import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "김기환 소개 | About",
  description: "김기환의 자기소개 및 기술 스택 페이지입니다.",
};

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend / Infra", items: ["Node.js", "RESTful API", "Git & GitHub"] },
    { category: "Focus", items: ["사용자 경험(UX)", "반응형 웹", "클린 코드"] },
  ];

  const milestones = [
    { year: "현재", title: "Next.js & 프론트엔드 역량 강화", desc: "모던 웹 생태계 탐색 및 웹 애플리케이션 개발" },
    { year: "성장", title: "지속적인 문제 해결과 학습", desc: "새로운 기술을 빠르게 습득하고 프로젝트에 적용" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-3xl flex flex-col space-y-8">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <Link
            id="nav-back-home"
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <span aria-hidden="true">&larr;</span> 홈으로 돌아가기
          </Link>
          <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            About Me
          </span>
        </div>

        {/* Profile Header */}
        <section className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-emerald-500/20">
              김
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight">김기환</h1>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Frontend & Web Developer
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 pt-1 leading-relaxed">
                사용자 중심의 가치를 실현하고 효율적이며 유지보수가 쉬운 웹 인터페이스를 설계하는 데 열정을 가지고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">기술 역량 & 관심사</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-3">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs rounded-md font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey / Milestone */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">여정</h2>
          <div className="space-y-3">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/30 flex items-start gap-4"
              >
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap mt-0.5">
                  {m.year}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{m.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Link Footer */}
        <div className="pt-4 flex justify-center">
          <Link
            id="btn-return-home"
            href="/"
            className="px-6 py-2.5 rounded-full text-sm font-medium bg-zinc-900 text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            홈 화면으로 돌아가기
          </Link>
        </div>

      </div>
    </main>
  );
}
