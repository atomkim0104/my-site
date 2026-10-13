import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#d4af37]/20 bg-[#060911] text-slate-400 text-xs">
      {/* Top Banner / Trust Points */}
      <div className="border-b border-slate-800/80 bg-[#080d1a] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-[#d4af37] text-lg font-bold">100%</div>
            <div className="text-slate-300 font-medium">실매물 안심 검증</div>
            <div className="text-[11px] text-slate-500">허위 매물 즉시 필터링</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#d4af37] text-lg font-bold">2억원</div>
            <div className="text-slate-300 font-medium">손해배상책임보증</div>
            <div className="text-[11px] text-slate-500">한국공인중개사협회 가입</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#d4af37] text-lg font-bold">1:1 맞춤</div>
            <div className="text-slate-300 font-medium">전담 공인중개사 매칭</div>
            <div className="text-[11px] text-slate-500">철저한 프라이버시 보호</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#d4af37] text-lg font-bold">원스톱</div>
            <div className="text-slate-300 font-medium">법률·세무 연계 자문</div>
            <div className="text-[11px] text-slate-500">취득·양도세 최적화</div>
          </div>
        </div>
      </div>

      {/* Main Agency Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          
          {/* Brand & Address */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5">
              <span className="font-serif font-bold text-white text-base tracking-wider">
                HERITAGE REALTY
              </span>
              <span className="text-slate-600">|</span>
              <span className="font-medium text-slate-300">
                헤리티지 김기환 공인중개사사무소
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
              대표 공인중개사: <span className="text-slate-200 font-medium">김기환</span> &nbsp;•&nbsp; 
              중개사무소 등록번호: <span className="text-slate-200">제11680-2026-00382호</span><br />
              사업자등록번호: <span className="text-slate-200">214-88-02841</span> &nbsp;•&nbsp; 
              소재지: 서울특별시 서초구 반포대로 287 헤리티지 타워 4층<br />
              대표전화: <a href="tel:02-588-1204" className="text-[#f4e29e] hover:underline font-mono">02-588-1204</a> &nbsp;•&nbsp; 
              팩스: 02-588-1205 &nbsp;•&nbsp; 
              이메일: <a href="mailto:contact@heritage-realty.kr" className="text-slate-300 hover:underline">contact@heritage-realty.kr</a>
            </p>

            <div className="text-[11px] text-slate-500">
              * 중개대상물 표시·광고 명시사항을 철저히 준수하며, 모든 매물은 현장 실사 및 권리분석을 거칩니다.
            </div>
          </div>

          {/* Quick Links & Service Hours */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-14 text-xs">
            <div>
              <div className="text-white font-semibold mb-3 tracking-wide text-xs">바로가기</div>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/#properties" className="hover:text-[#f4e29e] transition-colors">추천 프리미엄 매물</Link></li>
                <li><Link href="/#services" className="hover:text-[#f4e29e] transition-colors">중개 & 자산관리 서비스</Link></li>
                <li><Link href="/#calculator" className="hover:text-[#f4e29e] transition-colors">부동산 중개보수 계산기</Link></li>
                <li><Link href="/about" className="hover:text-[#f4e29e] transition-colors">대표 공인중개사 소개</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold mb-3 tracking-wide text-xs">상담 및 업무 시간</div>
              <div className="text-slate-300 text-[11px] space-y-1">
                <div>평일: <span className="font-mono text-slate-200">09:30 ~ 19:30</span></div>
                <div>토요일: <span className="font-mono text-slate-200">10:00 ~ 17:00</span> (예약제)</div>
                <div className="text-slate-500">일요일·공휴일: 사전 프라이빗 예약제</div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:02-588-1204"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800/80 hover:bg-slate-700/80 text-[#f4e29e] font-mono text-xs transition-colors border border-slate-700"
                >
                  <span>📞</span> 긴급 유선 상담 연결
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} 헤리티지 부동산 중개법인 (김기환 공인중개사). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">개인정보처리방침</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">이용약관</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">부동산중개법령 준수 안내</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
