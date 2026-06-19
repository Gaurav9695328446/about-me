import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { filterXSS } from 'xss';

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(20).max(2000),
});

// Simple in-memory rate limiter (per IP, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  // CORS – restrict to own domain in production
  const origin = req.headers.get('origin') ?? '';
  const allowedOrigins = [
    'https://gaurav-arya.vercel.app',
    'http://localhost:3000',
  ];
  if (process.env.NODE_ENV === 'production' && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  // Parse & validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: 'Validation failed', issues: result.error.issues }, { status: 422 });
  }

  // Sanitize inputs
  const sanitized = {
    name: filterXSS(result.data.name),
    email: filterXSS(result.data.email),
    subject: filterXSS(result.data.subject),
    message: filterXSS(result.data.message),
  };

  // ── Email delivery ─────────────────────────────────────────────────────────
  // TODO: Wire up your preferred email provider here.
  //
  // Option A – Resend (recommended):
  //   npm install resend
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({ from: 'portfolio@yourdomain.com', to: 'gauravmka24@gmail.com', ... });
  //
  // Option B – Nodemailer with SMTP:
  //   import nodemailer from 'nodemailer';
  //   const transporter = nodemailer.createTransport({ ... });
  //   await transporter.sendMail({ ... });
  //
  // For now, log in development:
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Contact Form]', sanitized);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://gaurav-arya.vercel.app',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
