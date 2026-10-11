import Link from "next/link";

export default function Home() {
  const stack = [
    { name: "Next.js", desc: "최신 App Router & Turbopack 기반", tag: "Framework" },
    { name: "TypeScript", desc: "안전하고 엄격한 정적 타입 시스템", tag: "Language" },
    { name: "Tailwind CSS", desc: "유틸리티 우선의 현대적인 스타일링", tag: "Styling" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          프로젝트 준비 완료
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            안녕하세요, <span className="text-teal-600 dark:text-teal-400">[김기환]</span>입니다
          </h1>
          <p className="text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-300">
            방문해 주셔서 진심으로 환영합니다!
          </p>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            TypeScript, App Router, Tailwind CSS가 모두 구성되어 있습니다. 지금 바로 원하는 컴포넌트를 추가해 보세요.
          </p>
          <div className="pt-2">
            <Link
              id="link-to-about"
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md shadow-emerald-600/20"
            >
              자기소개 페이지 보기 &rarr;
            </Link>
          </div>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
          {stack.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition"
            >
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                {item.tag}
              </span>
              <h2 className="text-lg font-bold mt-2">{item.name}</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* PowerShell Run Guide */}
        <div className="w-full p-5 rounded-xl bg-zinc-900 text-zinc-100 border border-zinc-800 shadow-md text-left">
          <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800 mb-3">
            <span>PowerShell 실행 명령어</span>
            <span className="text-[11px] bg-zinc-800 px-2 py-0.5 rounded">Terminal</span>
          </div>
          <code className="text-sm font-mono text-emerald-400 select-all block">
            npm run dev
          </code>
          <p className="text-xs text-zinc-500 mt-2">
            실행 후 웹 브라우저에서 <span className="text-zinc-300 font-mono">http://localhost:3000</span> 으로 접속하세요.
          </p>
        </div>

        {/* Quick File Links / Hints */}
        <footer className="text-xs text-zinc-500 dark:text-zinc-500 pt-4">
          페이지 수정 시작: <code className="text-zinc-700 dark:text-zinc-300 font-mono">app/page.tsx</code>
        </footer>

        <p style={{ color: "#C84726" }} className="text-sm font-medium">
          [오늘 처음 인터넷에 사이트를 올렸어요!]
        </p>
      </div>
    </main>
  );
}
