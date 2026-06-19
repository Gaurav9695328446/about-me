import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gold' | 'blue' | 'green' | 'pink';
}

const variants = {
  default: 'bg-white/8 text-gray-300 border border-white/10',
  gold: 'bg-gold/10 text-gold border border-gold/25',
  blue: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
  green: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
  pink: 'bg-pink-500/10 text-pink-300 border border-pink-500/20',
};

export default function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
