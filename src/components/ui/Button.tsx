import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 uppercase tracking-[0.16em] text-xs focus:outline-none focus:ring-2 focus:ring-[#C69A63]/50 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer';

  const sizes = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3.5 text-xs',
    lg: 'px-8 py-4 text-xs tracking-[0.2em]',
  };

  const variants = {
    primary:
      'bg-[#252824] text-white hover:bg-[#C69A63] border border-[#252824] hover:border-[#C69A63] shadow-sm',
    gold:
      'bg-[#C69A63] text-white hover:bg-[#b3854e] border border-[#C69A63] shadow-sm',
    secondary:
      'bg-[#E9E1D5] text-[#252824] hover:bg-[#252824] hover:text-white border border-[#E9E1D5] hover:border-[#252824]',
    outline:
      'bg-transparent text-[#252824] border border-[#252824] hover:bg-[#252824] hover:text-white',
    ghost:
      'bg-transparent text-white border border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-xs',
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
