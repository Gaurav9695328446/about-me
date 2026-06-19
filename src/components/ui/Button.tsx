'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ButtonActionProps extends ButtonBaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

type ButtonProps = ButtonLinkProps | ButtonActionProps;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-navy-900 font-semibold hover:bg-gold-light shadow-lg shadow-gold/20 border border-gold',
  outline:
    'border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 font-medium',
  ghost: 'text-gray-300 hover:text-gold hover:bg-white/5 font-medium',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-2.5 text-base rounded-xl gap-2',
  lg: 'px-8 py-3.5 text-lg rounded-xl gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  iconPosition = 'right',
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const inner = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, external } = rest as ButtonLinkProps;
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {inner}
        </Link>
      </motion.div>
    );
  }

  const { onClick, type = 'button', disabled } = rest as ButtonActionProps;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && 'opacity-50 cursor-not-allowed')}
      whileHover={!disabled ? { scale: 1.03 } : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
    >
      {inner}
    </motion.button>
  );
}
