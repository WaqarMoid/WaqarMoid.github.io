import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { Icons } from './Icons';
import { personalInfo, socialLinks } from '../data/content';

const NAV_ITEMS = [
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'experience', 'projects', 'skills', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[#262626] py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center font-heading font-bold text-sm text-blue-400 group-hover:border-blue-500/50 group-hover:text-blue-300 transition-colors">
            {personalInfo.initials}
          </div>
          <span className="font-heading font-bold text-lg text-[#fafafa] tracking-wide group-hover:text-blue-400 transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Center Pill Nav Capsule (Desktop) */}
        <nav className="hidden md:flex items-center bg-[#121212]/80 border border-[#262626] px-2 py-1 rounded-full backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#262626] text-[#fafafa] shadow-inner'
                    : 'text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#1a1a1a]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#171717] border border-[#262626] text-xs font-medium text-[#fafafa] hover:border-[#3a3a3a] hover:bg-[#202020] transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            Resume
          </a>

          <div className="w-[1px] h-4 bg-[#262626]" />

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa] hover:border-[#3a3a3a] transition-colors"
          >
            <Icons.Github className="w-4 h-4" />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-blue-400 hover:border-blue-500/40 transition-colors"
          >
            <Icons.Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3] hover:text-[#fafafa]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#262626] bg-[#0a0a0a]/95 backdrop-blur-xl px-4 py-4 space-y-2 mt-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#171717]"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#262626] flex items-center justify-between">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] text-xs font-medium text-[#fafafa]"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              Resume
            </a>
            <div className="flex gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#a3a3a3]"
              >
                <Icons.Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#171717] border border-[#262626] text-blue-400"
              >
                <Icons.Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
