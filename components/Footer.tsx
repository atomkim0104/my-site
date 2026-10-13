import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-900/50 bg-[#050c20]/90 backdrop-blur-xl mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">나의 두 번째 사이트</span>
          <span className="text-slate-600">•</span>
          <span>© {new Date().getFullYear()} 모든 권리 보유.</span>
        </div>

        {/* Center: Tech tags */}
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-sky-300 font-mono text-[11px]">
            Next.js 16
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-sky-300 font-mono text-[11px]">
            TypeScript
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-amber-300 font-mono text-[11px]">
            Tailwind v4
          </span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4 font-medium">
          <Link href="/" className="hover:text-amber-300 transition-colors">
            홈
          </Link>
          <Link href="/about" className="hover:text-amber-300 transition-colors">
            소개
          </Link>
        </div>

      </div>
    </footer>
  );
}
