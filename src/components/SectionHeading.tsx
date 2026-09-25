import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  className = '',
  centered = false,
}) => {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-medium text-blue-400 mb-3 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[#a3a3a3] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
