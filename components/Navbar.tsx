"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "홈", href: "/" },
    { name: "소개", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#070f26]/85 border-b border-blue-500/20 shadow-lg shadow-blue-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-400 to-amber-400 p-[2px] shadow-md shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <div className="w-full h-full bg-[#091536] rounded-[9px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-300 font-black text-sm">
                나
              </span>
            </div>
          </div>
          <span className="font-extrabold text-white tracking-tight group-hover:text-sky-200 transition-all">
            나의 두 번째 사이트
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1.5 sm:gap-2.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600/25 text-amber-300 border border-amber-400/40 shadow-sm shadow-blue-500/20"
                    : "text-slate-300 hover:text-white hover:bg-blue-900/40"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Live Status Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/40 bg-sky-500/10 text-xs font-bold text-sky-300 shadow-sm shadow-sky-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>LIVE ⚡</span>
        </div>

      </div>
    </header>
  );
}
