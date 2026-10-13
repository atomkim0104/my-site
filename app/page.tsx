"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);

  const stackItems = [
    {
      name: "Next.js 16 (앱 라우터)",
      desc: "최신 React Server Components & 파일 시스템 기반 라우팅",
      icon: "⚡",
      badge: "핵심 프레임워크",
      color: "from-blue-900/40 via-blue-950/30 to-transparent border-blue-500/25 hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]",
    },
    {
      name: "타입스크립트 (TypeScript)",
      desc: "정적 타입 지원으로 안전하고 견고한 웹 개발 환경",
      icon: "🔷",
      badge: "타입 안정성",
      color: "from-blue-900/40 via-indigo-950/30 to-transparent border-indigo-500/25 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]",
    },
    {
      name: "테일윈드 CSS (Tailwind v4)",
      desc: "유틸리티 우선 CSS 프레임워크와 초고속 모던 스타일링",
      icon: "🎨",
      badge: "스타일링",
      color: "from-sky-950/40 via-blue-950/30 to-transparent border-sky-500/25 hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]",
    },
  ];

  // 배경 장미꽃 이모티콘 구성
  const backgroundRoses = [
    { top: "5%", left: "5%", size: "text-4xl sm:text-5xl", opacity: "opacity-45", anim: "animate-float-slow", delay: "0s", rotate: "-rotate-12" },
    { top: "10%", right: "8%", size: "text-5xl sm:text-6xl", opacity: "opacity-50", anim: "animate-float-reverse", delay: "1.5s", rotate: "rotate-12" },
    { top: "28%", left: "7%", size: "text-3xl sm:text-4xl", opacity: "opacity-35", anim: "animate-float-drift", delay: "3s", rotate: "rotate-45" },
    { top: "34%", right: "6%", size: "text-4xl sm:text-5xl", opacity: "opacity-40", anim: "animate-float-slow", delay: "2.2s", rotate: "-rotate-6" },
    { top: "58%", left: "4%", size: "text-4xl sm:text-5xl", opacity: "opacity-40", anim: "animate-float-reverse", delay: "0.8s", rotate: "-rotate-45" },
    { top: "64%", right: "7%", size: "text-5xl sm:text-6xl", opacity: "opacity-45", anim: "animate-float-slow", delay: "2.8s", rotate: "rotate-12" },
    { top: "86%", left: "11%", size: "text-3xl sm:text-4xl", opacity: "opacity-35", anim: "animate-float-drift", delay: "1.2s", rotate: "rotate-30" },
    { top: "88%", right: "12%", size: "text-4xl sm:text-5xl", opacity: "opacity-40", anim: "animate-float-reverse", delay: "3.5s", rotate: "-rotate-12" },
    { top: "2%", left: "46%", size: "text-3xl sm:text-4xl", opacity: "opacity-30", anim: "animate-float-drift", delay: "4s", rotate: "rotate-6" },
    { top: "48%", left: "18%", size: "text-2xl sm:text-3xl", opacity: "opacity-25", anim: "animate-float-slow", delay: "2s", rotate: "-rotate-12" },
    { top: "50%", right: "20%", size: "text-2xl sm:text-3xl", opacity: "opacity-25", anim: "animate-float-reverse", delay: "1.7s", rotate: "rotate-20" },
  ];

  return (
    <main className="relative py-16 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow effects - Deep Blue & Ocean Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[380px] bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-sky-400/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[440px] h-[280px] bg-gradient-to-br from-sky-500/15 via-blue-700/15 to-transparent blur-[130px] rounded-full pointer-events-none" />

      {/* Floating Rose Emoticons Background (배경 장미꽃 이모티콘 레이어) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {backgroundRoses.map((rose, idx) => (
          <span
            key={idx}
            className={`absolute ${rose.size} ${rose.opacity} ${rose.anim} ${rose.rotate} transition-transform drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]`}
            style={{
              top: rose.top,
              left: rose.left,
              right: rose.right,
              animationDelay: rose.delay,
            }}
            aria-hidden="true"
          >
            🌹
          </span>
        ))}
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center space-y-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-blue-950/60 backdrop-blur-md text-xs sm:text-sm font-semibold text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:border-sky-400/60 transition-all">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Next.js 프로젝트가 성공적으로 준비되었습니다 🚀</span>
        </div>

        {/* Hero title & Photo */}
        <div className="w-full flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.15] text-center text-white">
            안녕하세요,{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(251,191,36,0.45)]">
              민효정
            </span>
            입니다
          </h1>

          {/* Photo (반달 모양, 테두리 없음) */}
          <div className="relative my-2 overflow-hidden rounded-t-full w-40 h-24 sm:w-48 sm:h-28 shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/my-photo.jpg"
              alt="장미꽃 사진"
              width={192}
              height={112}
              className="w-full h-full object-cover object-[center_30%]"
              priority
            />
          </div>

          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed text-center break-keep font-medium">
            TypeScript, App Router, 그리고 Tailwind CSS로 구성된 심플하고 강력한 웹 시작 템플릿입니다.
          </p>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className={`p-5 rounded-2xl border bg-gradient-to-b backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.color}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-sky-300">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-bold text-white text-base mb-1">
                {item.name}
              </h3>
              <p className="text-xs text-slate-300 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Playground Section */}
        <div className="w-full p-6 sm:p-8 rounded-2xl border border-blue-500/25 bg-[#091536]/85 backdrop-blur-2xl shadow-[0_0_35px_rgba(14,165,233,0.12)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">⚡</span> 대화형 React 컴포넌트 테스트
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              버튼을 클릭하여 클라이언트 상태 관리 및 인터랙션을 확인해보세요.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(251,191,36,0.35)] active:scale-95 transition-all cursor-pointer"
            >
              클릭 횟수: <span className="font-black ml-1 text-slate-950 underline decoration-slate-900 decoration-2">{count}</span>
            </button>
            {count > 0 && (
              <button
                onClick={() => setCount(0)}
                className="px-3 py-2.5 rounded-xl border border-blue-700/60 hover:border-amber-400/60 hover:bg-blue-900/40 text-slate-300 hover:text-white text-xs transition-all cursor-pointer font-medium"
              >
                초기화
              </button>
            )}
          </div>
        </div>

        {/* Quick Tips Footer */}
        <div className="text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4 pt-2">
          <span>📁 프로젝트: <code className="text-sky-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/40">my_2nd_site</code></span>
          <span className="text-slate-600">•</span>
          <span>수정할 파일: <code className="text-sky-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/40">app/page.tsx</code></span>
        </div>
      </div>
    </main>
  );
}
