import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-10 md:mb-14 ${
        centered ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3 justify-start sm:justify-center">
          {centered && <span className="hidden sm:inline-block w-8 h-[1px] bg-[#C69A63]/60" />}
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C69A63]">
            {eyebrow}
          </span>
          <span className="w-8 h-[1px] bg-[#C69A63]/60" />
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.18] ${
          isDark ? 'text-white' : 'text-[#252824]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? 'text-white/70' : 'text-[#686868]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
