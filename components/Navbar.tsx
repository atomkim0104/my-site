"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "추천 매물", href: "/#properties" },
    { label: "전문 서비스", href: "/#services" },
    { label: "중개·세무 계산기", href: "/#calculator" },
    { label: "고객 후기", href: "/#reviews" },
    { label: "중개사 소개", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#070b14]/85 border-b border-[#d4af37]/20 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#997920] via-[#d4af37] to-[#f4e29e] p-[1.5px] shadow-md shadow-[#d4af37]/20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0a0f1d] rounded-[7px] flex items-center justify-center font-serif text-[#d4af37] font-black text-lg">
              H
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif tracking-widest text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors leading-tight">
              HERITAGE <span className="text-[#d4af37] font-sans text-xs uppercase tracking-wider font-semibold">REALTY</span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-tight">
              김기환 공인중개사사무소
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navLinks.map((link) => {
            const isAboutActive = link.href === "/about" && pathname === "/about";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isAboutActive
                    ? "bg-[#d4af37]/15 text-[#f4e29e] border border-[#d4af37]/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Phone */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:02-588-1204"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-700/60 bg-slate-900/60 hover:border-[#d4af37]/50 text-slate-300 hover:text-[#f4e29e] text-xs font-semibold transition-all"
            title="직통 전화 상담"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-sm">02-588-1204</span>
          </a>

          <Link
            href="/#inquiry"
            className="gold-btn px-4 py-2 rounded-lg text-xs tracking-wide uppercase shadow-md active:scale-95"
          >
            상담 예약하기
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-[#d4af37]/20 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#f4e29e] hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href="tel:02-588-1204"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 text-sm font-mono font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              전화 상담 02-588-1204
            </a>
            <Link
              href="/#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="gold-btn w-full text-center py-2.5 rounded-lg text-sm"
            >
              온라인 상담 예약
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
