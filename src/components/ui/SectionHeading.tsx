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
      className={`mb-8 sm:mb-12 ${
        centered ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3 ${centered ? 'justify-center' : 'justify-start'}`}>
          {centered && <span className="hidden sm:inline-block w-6 sm:w-8 h-[1px] bg-[#C89A5B]/60" />}
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#C89A5B]">
            {eyebrow}
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-[#C89A5B]/60" />
        </div>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.18] ${
          isDark ? 'text-white' : 'text-[#222222]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 sm:mt-4 text-xs sm:text-base leading-relaxed ${
            isDark ? 'text-white/75' : 'text-[#77736D]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
