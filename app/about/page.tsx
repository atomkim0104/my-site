import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "공인중개사 소개 & 오시는 길 | 헤리티지 부동산",
  description:
    "대표 공인중개사 김기환 프로필, 중개 철학, 전문 자격 및 서초 반포 헤리티지 타워 오시는 길 안내입니다.",
};

export default function AboutPage() {
  const credentials = [
    { title: "국가공인 공인중개사", org: "국토교통부 등록", year: "등록번호 제11680-2026-00382호" },
    { title: "부동산 자산관리사 (KPM)", org: "한국부동산자산관리학회", year: "전문 자산운용 및 리스크 관리" },
    { title: "부동산 최고경영자 과정 수료", org: "연세대학교 경영전문대학원", year: "상업용 부동산 및 세무 연구" },
    { title: "2억원 손해배상책임보증", org: "한국공인중개사협회", year: "100% 안심 거래 보증증서 보유" },
  ];

  const services = [
    {
      title: "하이엔드 주거 중개",
      desc: "반포, 청담, 한남, 성수권역의 아파트, 펜트하우스, 고급빌라 및 단독주택 전속 매매·임대차",
      icon: "🏢",
    },
    {
      title: "상업용 빌딩 & 사옥 매매",
      desc: "테헤란로, 도산대로, 강남권역 중소형 빌딩 및 수익형 부동산 매입·매각 자문",
      icon: "🏬",
    },
    {
      title: "오프마켓 VIP 비공개 자산",
      desc: "공개 시장에 노출되지 않는 프라이빗 매물 소싱 및 고액 자산가 1:1 비밀 매칭",
      icon: "🔒",
    },
    {
      title: "세무 & 금융 원스톱 자문",
      desc: "취득세, 종합부동산세, 양도소득세 절세 시뮬레이션 및 전담 세무사 무료 연계 상담",
      icon: "⚖️",
    },
  ];

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Ambient background lighting */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[350px] bg-gradient-to-r from-[#997920]/15 via-[#d4af37]/10 to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#0f172a]/80 text-xs font-semibold text-[#f4e29e] shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span>✦</span> HERITAGE BROKERAGE & ASSET ADVISORY
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
            신뢰와 가치를 중개하는 <br />
            <span className="gold-gradient-text">대표 공인중개사 김기환</span>입니다
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            부동산은 단순한 거래의 대상이 아니라, 고객과 가문의 소중한 자산이자 역사입니다. <br className="hidden sm:inline" />
            한 분 한 분의 눈높이에 맞춘 정밀한 분석과 완벽한 비밀 유지로 최적의 결과를 이끌어냅니다.
          </p>
        </div>

        {/* Representative Greeting & Philosophy Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#d4af37]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Profile Avatar / Symbol */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-tr from-[#997920] via-[#d4af37] to-[#f4e29e] p-[2px] shadow-2xl shadow-[#d4af37]/25">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex flex-col items-center justify-center p-4">
                  <span className="font-serif text-4xl text-[#d4af37] font-bold">H</span>
                  <span className="text-[11px] text-slate-400 mt-2 font-mono">HERITAGE</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">김 기 환</h3>
                <p className="text-xs text-[#d4af37] font-medium">헤리티지 부동산 대표 공인중개사</p>
              </div>
            </div>

            {/* Right Greetings */}
            <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h2 className="text-lg sm:text-xl font-bold text-white font-serif">
                "안전한 권리분석 위에 세워진 신뢰만이 가장 큰 자산입니다."
              </h2>
              <p>
                안녕하십니까, 헤리티지 부동산을 찾아주신 고객 여러분 환영합니다.
              </p>
              <p>
                하이엔드 부동산 시장은 일반 주거와 달리 법률적 리스크 검토, 세무 포트폴리오, 프라이버시 보호 등 
                고도의 전문성이 요구됩니다. 헤리티지는 30개 이상의 점검 항목을 바탕으로 철저한 실매물 검증과 
                권리분석 보고서를 제공하여 고객님의 소중한 자산을 단 1%의 리스크 없이 지켜드립니다.
              </p>
              <p>
                매수, 매도, 임대차는 물론 상업용 빌딩과 개발 자산에 이르기까지, 언제나 고객의 곁에서 
                가장 든든한 평생 자산관리 파트너가 되어드릴 것을 약속드립니다.
              </p>
            </div>

          </div>
        </div>

        {/* Credentials & Qualifications Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-white text-center">
            공인 자격 및 <span className="gold-gradient-text">안심 보증</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((cred) => (
              <div
                key={cred.title}
                className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2 hover:border-[#d4af37]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#f4e29e]">{cred.title}</div>
                <div className="text-xs text-white font-medium">{cred.org}</div>
                <div className="text-[11px] text-slate-400">{cred.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-white text-center">
            전문 <span className="gold-gradient-text">중개 분야</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((item) => (
              <div
                key={item.title}
                className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-slate-800 hover:border-[#d4af37]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Location & Contact Info */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#d4af37]/30 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <span>📍</span> 오시는 길 및 상담 안내
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              사무실 방문 상담 시 편안하고 프라이빗한 VIP 상담실에서 1:1 맞춤 브리핑을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Address Details */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <span className="text-slate-500 block text-xs mb-1">소재지 주소</span>
                <span className="font-semibold text-white">
                  서울특별시 서초구 반포대로 287 헤리티지 타워 4층 (반포동)
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-xs mb-1">대중교통 이용 시</span>
                <span className="text-slate-200">
                  지하철 3호선·7호선·9호선 <strong className="text-[#f4e29e]">고속터미널역</strong> 5번 출구 도보 5분 거리
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-xs mb-1">차량 이용 시 (주차 안내)</span>
                <span className="text-slate-200">
                  건물 1층 <strong className="text-[#f4e29e]">무료 발렛 파킹(Valet Parking)</strong> 지원 (방문 고객 무료 주차권 제공)
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-slate-500 block text-xs mb-1">상담 예약 문의</span>
                <div className="flex items-center gap-3">
                  <a href="tel:02-588-1204" className="text-base font-bold text-[#f4e29e] font-mono hover:underline">
                    📞 02-588-1204
                  </a>
                  <span className="text-slate-600">|</span>
                  <span className="text-xs text-slate-400">010-5880-1204</span>
                </div>
              </div>
            </div>

            {/* Visual Location Card */}
            <div className="bg-[#090f1e] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl">🏛️</div>
                <div className="text-white font-bold text-base">HERITAGE PRESTIGE TOWER</div>
                <p className="text-xs text-slate-400">
                  반포 래미안 원베일리 및 아크로리버파크 인근 <br />
                  헤리티지 타워 4층 프라이빗 라운지
                </p>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/60 text-xs text-slate-300">
                ⏰ 평일 09:30 ~ 19:30 / 주말·공휴일 사전 예약제
              </div>

              <a
                href="/#inquiry"
                className="gold-btn w-full py-2.5 rounded-lg text-xs font-bold text-center block"
              >
                방문 상담 예약하기
              </a>
            </div>

          </div>
        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-[#f4e29e] transition-colors"
          >
            ← 메인 홈으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}
