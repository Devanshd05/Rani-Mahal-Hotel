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
    'inline-flex items-center justify-center font-medium transition-all duration-200 uppercase tracking-[0.15em] text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A5B] disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer active:scale-[0.98] select-none text-center';

  const sizes = {
    sm: 'px-4 py-2.5 text-[11px] min-h-[40px]',
    md: 'px-6 py-3 text-xs min-h-[44px]',
    lg: 'px-8 py-3.5 text-xs tracking-[0.18em] min-h-[48px]',
  };

  const variants = {
    primary:
      'bg-[#252824] text-white hover:bg-[#C89A5B] border border-[#252824] hover:border-[#C89A5B] shadow-sm',
    gold:
      'bg-[#C89A5B] text-white hover:bg-[#b38548] border border-[#C89A5B] shadow-sm',
    secondary:
      'bg-[#EBE3D7] text-[#222222] hover:bg-[#252824] hover:text-white border border-[#EBE3D7] hover:border-[#252824]',
    outline:
      'bg-transparent text-[#222222] border border-[#222222] hover:bg-[#222222] hover:text-white',
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
