import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { personal } from '@/data/personal';
import { GithubIcon, LinkedinIcon, DevToIcon, MediumIcon } from '@/components/ui/icons';

const socialLinks = [
  { label: 'GitHub', href: personal.links.github, icon: GithubIcon },
  { label: 'LinkedIn', href: personal.links.linkedin, icon: LinkedinIcon },
  { label: 'Dev.to', href: personal.links.devto, icon: DevToIcon },
  { label: 'Medium', href: personal.links.medium, icon: MediumIcon },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#0a1018]">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-sm font-bold text-[#0d1520]">
                G
              </span>
              <span className="font-semibold text-white text-lg">
                Gaurav<span className="text-gold">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Frontend Architect building fast, scalable interfaces for millions of users. Based in
              Mumbai, India.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-gold transition-colors"
              >
                {personal.email}
              </a>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-gold transition-colors group"
                  >
                    <Icon size={15} className="group-hover:text-gold transition-colors" />
                    {label}
                    <ExternalLink size={11} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Gaurav Kumar Arya. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with
            <span className="text-gold">♥</span>
            using Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
