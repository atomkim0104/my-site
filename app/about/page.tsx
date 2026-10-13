import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개 - 나의 두 번째 사이트",
  description: "Next.js 16과 모던 웹 기술 스택에 대한 소개 페이지입니다.",
};

export default function AboutPage() {
  const features = [
    {
      title: "App Router 아키텍처",
      description:
        "Next.js의 신규 라우터로, 중첩 레이아웃, 서버 컴포넌트, 간결한 로딩 및 에러 처리를 지원합니다.",
      badge: "아키텍처",
      badgeColor: "bg-[#ff007a]/15 text-[#ff72be] border-[#ff007a]/35",
    },
    {
      title: "강력한 정적 타입 (TypeScript)",
      description:
        "컴파일 타임에 오류를 사전 방지하고, 코드 자동 완성 및 리팩토링 안정성을 극대화합니다.",
      badge: "개발 언어",
      badgeColor: "bg-[#00f0ff]/15 text-[#00f0ff] border-[#00f0ff]/35",
    },
    {
      title: "Tailwind CSS v4 스타일링",
      description:
        "초고속 빌드 성능의 최신 CSS 엔진을 기반으로 유연하고 일관된 디자인 시스템을 구축합니다.",
      badge: "디자인 시스템",
      badgeColor: "bg-[#ccff00]/15 text-[#ccff00] border-[#ccff00]/35",
    },
    {
      title: "Turbopack 번들러",
      description:
        "Rust 기반 초고속 증분 컴파일 엔진이 적용되어 로컬 개발 서버 시작과 HMR을 지연 없이 제공합니다.",
      badge: "초고속 번들러",
      badgeColor: "bg-[#c084fc]/15 text-[#c084fc] border-[#c084fc]/35",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-8rem)] py-12 px-4 sm:px-6 flex flex-col items-center">
      {/* Background ambient lighting - Blue & Cyan Glow */}
      <div className="absolute top-10 left-1/3 w-[520px] h-[340px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-sky-400/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sky-400/35 bg-blue-950/60 text-xs font-bold text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="text-amber-400">✨</span> 프로젝트 아키텍처 가이드
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            프로젝트{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              소개
            </span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            이 사이트는 빠르고 확장성 있는 모던 웹 애플리케이션을 제작하기 위한 최적의 표준 스택으로 구성되어 있습니다.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-blue-500/25 bg-[#091536]/80 backdrop-blur-xl hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2.5 py-0.5 rounded-full border font-bold bg-blue-900/60 text-sky-200 border-blue-700/50">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Directory Structure Guide Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-blue-500/25 bg-[#091536]/85 backdrop-blur-2xl shadow-[0_0_35px_rgba(14,165,233,0.12)]">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📁</span> 현재 폴더 구조 안내
          </h2>
          <div className="bg-[#050b1d] p-4 rounded-xl font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed border border-blue-900/50">
            <div><span className="text-amber-300 font-bold">my_2nd_site/</span></div>
            <div>├── <span className="text-sky-300">app/</span></div>
            <div>│   ├── <span className="text-slate-300">layout.tsx</span>      <span className="text-slate-500"># 공통 레이아웃 (Navbar & Footer 포함)</span></div>
            <div>│   ├── <span className="text-slate-300">page.tsx</span>        <span className="text-slate-500"># 메인 홈 페이지 (/)</span></div>
            <div>│   ├── <span className="text-slate-300">globals.css</span>     <span className="text-slate-500"># Tailwind CSS 글로벌 스타일</span></div>
            <div>│   └── <span className="text-sky-300">about/</span></div>
            <div>│       └── <span className="text-slate-300">page.tsx</span>    <span className="text-slate-500"># 소개 페이지 (/about)</span></div>
            <div>├── <span className="text-sky-300">components/</span></div>
            <div>│   ├── <span className="text-slate-300">Navbar.tsx</span>      <span className="text-slate-500"># 상단 네비게이션 헤더</span></div>
            <div>│   └── <span className="text-slate-300">Footer.tsx</span>      <span className="text-slate-500"># 하단 정보 푸터</span></div>
            <div>├── <span className="text-slate-300">package.json</span>    <span className="text-slate-500"># 의존성 및 스크립트</span></div>
            <div>└── <span className="text-slate-300">tsconfig.json</span>   <span className="text-slate-500"># TypeScript 컴파일러 설정</span></div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(251,191,36,0.35)] transition-all active:scale-95 cursor-pointer"
          >
            ← 메인 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
