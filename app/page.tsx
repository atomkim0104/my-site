"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  transaction: "sale" | "jeonse" | "monthly";
  transactionLabel: string;
  type: "apartment" | "building" | "villa";
  typeLabel: string;
  region: "gangnam" | "yongsan" | "seongsu" | "pangyo";
  areaM2: number;
  py: number;
  rooms: string;
  parking: string;
  floor: string;
  highlight: string;
  badges: string[];
  image: string;
  desc: string;
}

export default function HomePage() {
  // Search Filter State
  const [filterTx, setFilterTx] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterRegion, setFilterRegion] = useState<string>("all");

  // Unit State: "m2" or "py"
  const [areaUnit, setAreaUnit] = useState<"m2" | "py">("py");

  // Active Category Tab for properties
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Modal State for Property Quick Detail
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Calculator State
  const [calcTab, setCalcTab] = useState<"commission" | "tax">("commission");
  const [calcType, setCalcType] = useState<"house" | "officetel" | "commercial">("house");
  const [calcTxType, setCalcTxType] = useState<"sale" | "rent">("sale");
  const [calcPrice, setCalcPrice] = useState<number>(30); // 30억원 기본값
  const [calcHouseCount, setCalcHouseCount] = useState<"1" | "2" | "3+">("1");

  // Inquiry Form State
  const [inquiryType, setInquiryType] = useState<"buy" | "sell">("buy");
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formRegion, setFormRegion] = useState("강남·서초");
  const [formBudget, setFormBudget] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Property Listing Data
  const properties: Property[] = [
    {
      id: "prop-1",
      title: "아크로 리버하이 펜트하우스",
      location: "서울시 서초구 반포동",
      price: "매매 85억원",
      transaction: "sale",
      transactionLabel: "매매",
      type: "apartment",
      typeLabel: "아파트·펜트하우스",
      region: "gangnam",
      areaM2: 184,
      py: 55.6,
      rooms: "방 4 / 욕실 3",
      parking: "세대당 3대",
      floor: "초고층 (32F)",
      highlight: "영구 한강 조망 파노라마 뷰",
      badges: ["단독 전속", "한강뷰", "즉시입주"],
      image: "/properties/penthouse.jpg",
      desc: "탁 트인 한강 조망과 대리석 인테리어, 프라이빗 테라스가 갖춰진 최고급 펜트하우스입니다. 입주민 전용 발렛 및 컨시어지 서비스를 제공합니다.",
    },
    {
      id: "prop-2",
      title: "더 아제르 프레스티지 레지던스",
      location: "서울시 강남구 청담동",
      price: "매매 68억원",
      transaction: "sale",
      transactionLabel: "매매",
      type: "apartment",
      typeLabel: "고급 레지던스",
      region: "gangnam",
      areaM2: 162,
      py: 49.0,
      rooms: "방 3 / 욕실 3",
      parking: "세대당 3대",
      floor: "고층 (18F)",
      highlight: "호텔식 발렛 및 프라이빗 클럽",
      badges: ["추천 매물", "최고급 자재", "보안 철저"],
      image: "/properties/building.jpg",
      desc: "명품거리 인근 프라이빗 하이엔드 주거로 수입 주방가구 및 최고급 음향 방음 시공이 완료된 희소성 높은 매물입니다.",
    },
    {
      id: "prop-3",
      title: "한남 프라이빗 가든 하우스",
      location: "서울시 용산구 한남동",
      price: "전세 35억원 (매매 협의)",
      transaction: "jeonse",
      transactionLabel: "전세",
      type: "villa",
      typeLabel: "단독주택·고급빌라",
      region: "yongsan",
      areaM2: 215,
      py: 65.0,
      rooms: "방 5 / 욕실 4",
      parking: "단독 차고 4대",
      floor: "지상 2층 + 썬큰",
      highlight: "단독 수영장 & 사계절 정원",
      badges: ["단독 정원", "단지 보안", "외국인 선호"],
      image: "/properties/villa.jpg",
      desc: "대사관로 인근에 위치하여 완벽한 프라이버시를 보장합니다. 전용 잔디정원과 자연 채광이 돋보이는 모던 럭셔리 단독주택입니다.",
    },
    {
      id: "prop-4",
      title: "테헤란로 메디컬·오피스 빌딩",
      location: "서울시 강남구 역삼동",
      price: "매매 290억원",
      transaction: "sale",
      transactionLabel: "매매",
      type: "building",
      typeLabel: "상업용 빌딩",
      region: "gangnam",
      areaM2: 2150,
      py: 650.3,
      rooms: "지하 2층 ~ 지상 8층",
      parking: "기계식+자주식 18대",
      floor: "전층",
      highlight: "우량 메디컬 입점 (연 4.2% 수익률)",
      badges: ["전층 만실", "역세권 도보 2분", "수익형 자산"],
      image: "/properties/building.jpg",
      desc: "테헤란로 이면 코너 필지로 가시성과 접근성이 매우 뛰어납니다. 병의원 및 대형 프랜차이즈 장기 임차로 안정적인 현금흐름을 확보하고 있습니다.",
    },
    {
      id: "prop-5",
      title: "갤러리아포레 서울숲 듀얼 파노라마",
      location: "서울시 성동구 성수동1가",
      price: "매매 75억원",
      transaction: "sale",
      transactionLabel: "매매",
      type: "apartment",
      typeLabel: "아파트·펜트하우스",
      region: "seongsu",
      areaM2: 170,
      py: 51.4,
      rooms: "방 3 / 욕실 3",
      parking: "세대당 3대",
      floor: "초고층 (38F)",
      highlight: "서울숲 녹지와 한강을 동시에 조망",
      badges: ["올리모델링", "서울숲 슬세권", "급매"],
      image: "/properties/penthouse.jpg",
      desc: "서울숲과 한강이 한눈에 펼쳐지는 파노라마 뷰 세대입니다. 최근 3억원 상당의 프리미엄 인테리어 리뉴얼을 마쳤습니다.",
    },
    {
      id: "prop-6",
      title: "서래마을 와이드 테라스 듀플렉스",
      location: "서울시 서초구 방배동",
      price: "보증금 5억 / 월세 1,200만원",
      transaction: "monthly",
      transactionLabel: "월세",
      type: "villa",
      typeLabel: "단독주택·고급빌라",
      region: "gangnam",
      areaM2: 190,
      py: 57.5,
      rooms: "방 4 / 욕실 3",
      parking: "세대당 2대",
      floor: "복층 (4~5F)",
      highlight: "20평형 단독 루프탑 바비큐 테라스",
      badges: ["복층 구조", "와이드 테라스", "조용한 주거지"],
      image: "/properties/villa.jpg",
      desc: "유러피언 감성의 서래마을 고급 주거지역에 위치한 복층 빌라로, 독립된 루프탑 테라스에서 여유로운 라이프스타일을 누릴 수 있습니다.",
    },
  ];

  // Filtered properties
  const filteredProperties = properties.filter((item) => {
    // Category Tab match
    if (activeCategory !== "all" && item.type !== activeCategory) return false;
    // Search Bar Filters
    if (filterTx !== "all" && item.transaction !== filterTx) return false;
    if (filterType !== "all" && item.type !== filterType) return false;
    if (filterRegion !== "all" && item.region !== filterRegion) return false;
    return true;
  });

  // Calculate Real Estate Commission
  const calculateCommission = () => {
    const priceInWon = calcPrice * 100000000;
    let rate = 0.007; // 15억 이상 주택 매매 상한요율 0.7%
    if (calcType === "house") {
      if (calcTxType === "sale") {
        if (calcPrice < 2) rate = 0.004;
        else if (calcPrice < 9) rate = 0.005;
        else if (calcPrice < 12) rate = 0.005;
        else if (calcPrice < 15) rate = 0.006;
        else rate = 0.007;
      } else {
        // 임대차
        if (calcPrice < 1) rate = 0.003;
        else if (calcPrice < 6) rate = 0.004;
        else if (calcPrice < 12) rate = 0.004;
        else if (calcPrice < 15) rate = 0.005;
        else rate = 0.006;
      }
    } else if (calcType === "officetel") {
      rate = calcTxType === "sale" ? 0.005 : 0.004;
    } else {
      // 상가, 토지
      rate = 0.009;
    }

    const fee = priceInWon * rate;
    const vat = fee * 0.1;
    const total = fee + vat;

    return {
      ratePct: (rate * 100).toFixed(2),
      fee: Math.round(fee).toLocaleString(),
      vat: Math.round(vat).toLocaleString(),
      total: Math.round(total).toLocaleString(),
    };
  };

  // Calculate Acquisition Tax
  const calculateTax = () => {
    let taxRate = 0.03; // 기본 3% (9억 초과 주택)
    if (calcHouseCount === "1") {
      if (calcPrice <= 6) taxRate = 0.01;
      else if (calcPrice <= 9) taxRate = 0.02;
      else taxRate = 0.03; // 9억 초과 3%
    } else if (calcHouseCount === "2") {
      taxRate = 0.08; // 조정대상 2주택 8%
    } else {
      taxRate = 0.12; // 3주택 이상 12%
    }

    const localEduTax = taxRate * 0.1; // 지방교육세 약 10%
    const ruralSpecialTax = 0.002; // 농특세
    const totalRate = taxRate + localEduTax + ruralSpecialTax;
    const taxWon = calcPrice * 100000000 * totalRate;

    return {
      ratePct: (totalRate * 100).toFixed(2),
      pureRatePct: (taxRate * 100).toFixed(1),
      taxWon: Math.round(taxWon).toLocaleString(),
    };
  };

  const commResult = calculateCommission();
  const taxResult = calculateTax();

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="relative flex flex-col items-center overflow-hidden">
      
      {/* =========================================================================
          HERO SECTION: Elegant Luxury Atmosphere & Value Proposition
      ========================================================================= */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center border-b border-[#d4af37]/15">
        
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-[#997920]/20 via-[#d4af37]/10 to-transparent blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-gradient-to-br from-blue-900/15 via-[#0d1b38]/20 to-transparent blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center space-y-6">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#0f172a]/80 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#f4e29e] shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
            <span>프리미엄 자산가 & VIP를 위한 1:1 전담 공인중개 솔루션</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-[1.2]">
            가장 신뢰받는 자산의 가치,<br />
            <span className="gold-gradient-text drop-shadow-[0_2px_25px_rgba(212,175,55,0.3)]">
              헤리티지 부동산
            </span>
            이 완성합니다
          </h1>

          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed font-light break-keep">
            하이엔드 주거부터 상업용 빌딩·오프마켓 투자자산까지, <br className="hidden sm:inline" />
            30개 항목의 정밀 권리분석과 세무·법률 원스톱 케어로 최상의 거래 경험을 선사합니다.
          </p>

          {/* Core Trust Counters */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl">
            <div className="glass-panel p-3.5 sm:p-4 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#f4e29e]">2,800억+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">누적 중개 거래액</div>
            </div>
            <div className="glass-panel p-3.5 sm:p-4 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#f4e29e]">100%</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">실매물 현장 검증</div>
            </div>
            <div className="glass-panel p-3.5 sm:p-4 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#f4e29e]">99.4%</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">고객 재계약·추천율</div>
            </div>
            <div className="glass-panel p-3.5 sm:p-4 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#f4e29e]">2억원</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">협회 손해배상보증</div>
            </div>
          </div>

          {/* Quick Property Search Bar */}
          <div className="w-full mt-6 p-4 sm:p-6 rounded-2xl glass-panel shadow-2xl border border-[#d4af37]/30 text-left">
            <div className="text-xs font-semibold text-[#f4e29e] mb-3 flex items-center gap-2">
              <span>🔍</span> 실시간 프리미엄 매물 간편 검색
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* 거래 유형 */}
              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">거래 유형</label>
                <select
                  value={filterTx}
                  onChange={(e) => setFilterTx(e.target.value)}
                  className="w-full bg-[#0a0f1d] border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-slate-200 focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="all">전체 거래 (매매/전세/월세)</option>
                  <option value="sale">매매</option>
                  <option value="jeonse">전세</option>
                  <option value="monthly">월세</option>
                </select>
              </div>

              {/* 매물 종류 */}
              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">매물 종류</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-[#0a0f1d] border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-slate-200 focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="all">전체 매물 유형</option>
                  <option value="apartment">아파트·펜트하우스</option>
                  <option value="building">상업용 빌딩·빌딩</option>
                  <option value="villa">단독주택·고급빌라</option>
                </select>
              </div>

              {/* 지역 */}
              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">선호 지역</label>
                <select
                  value={filterRegion}
                  onChange={(e) => setFilterRegion(e.target.value)}
                  className="w-full bg-[#0a0f1d] border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-slate-200 focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="all">전체 지역 (서울·수도권)</option>
                  <option value="gangnam">강남·서초 (반포/청담/역삼)</option>
                  <option value="yongsan">용산·한남 (한남/이태원)</option>
                  <option value="seongsu">성수·성동 (서울숲/뚝섬)</option>
                </select>
              </div>

              {/* 검색 실행 / 초기화 */}
              <div className="flex items-end gap-2">
                <a
                  href="#properties"
                  className="gold-btn w-full py-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 h-[37px]"
                >
                  <span>매물 확인하기</span>
                  <span>({filteredProperties.length}건)</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          FEATURED PROPERTIES SECTION: High-End Visual Cards with Area Unit Toggle
      ========================================================================= */}
      <section id="properties" className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              <span>✦</span> PRESTIGE COLLECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              헤리티지 엄선 <span className="gold-gradient-text">추천 프리미엄 매물</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              권리분석과 시세 적정성 검토가 완료된 상위 1% 하이엔드 자산 컬렉션입니다.
            </p>
          </div>

          {/* Unit Toggle & Reset Controls */}
          <div className="flex items-center gap-3">
            {/* Area Unit Switcher: m2 vs py */}
            <div className="inline-flex rounded-lg p-1 bg-slate-900 border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setAreaUnit("py")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  areaUnit === "py"
                    ? "bg-[#d4af37] text-slate-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                평 (PY)
              </button>
              <button
                onClick={() => setAreaUnit("m2")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  areaUnit === "m2"
                    ? "bg-[#d4af37] text-slate-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ㎡ (m²)
              </button>
            </div>

            {(filterTx !== "all" || filterType !== "all" || filterRegion !== "all") && (
              <button
                onClick={() => {
                  setFilterTx("all");
                  setFilterType("all");
                  setFilterRegion("all");
                  setActiveCategory("all");
                }}
                className="px-3 py-1.5 text-xs text-[#f4e29e] hover:underline"
              >
                필터 초기화
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs border-b border-slate-800/80">
          {[
            { id: "all", label: "전체 매물" },
            { id: "apartment", label: "아파트·펜트하우스" },
            { id: "building", label: "상업용 빌딩" },
            { id: "villa", label: "단독주택·고급빌라" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#d4af37]/20 text-[#f4e29e] border border-[#d4af37]/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="glass-panel p-16 rounded-2xl text-center space-y-4">
            <div className="text-3xl">🏛️</div>
            <div className="text-slate-300 font-medium">선택하신 조건에 일치하는 매물이 없습니다.</div>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              현재 포털 미공개 VIP 오프마켓 매물이 다수 등록되어 있습니다. 고객 맞춤형 비공개 매물 조회를 원하시면 1:1 상담을 신청해 주세요.
            </p>
            <button
              onClick={() => {
                setFilterTx("all");
                setFilterType("all");
                setFilterRegion("all");
                setActiveCategory("all");
              }}
              className="gold-btn px-4 py-2 rounded-lg text-xs"
            >
              전체 매물 다시 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Property Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-[#0a0f1d]/90 backdrop-blur-md border border-[#d4af37]/40 text-[#f4e29e] font-bold text-[10px] tracking-wide">
                      {prop.transactionLabel}
                    </span>
                    {prop.badges.slice(0, 2).map((b, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-slate-200 text-[10px]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Price Banner on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="text-xl sm:text-2xl font-serif font-black text-white drop-shadow-md">
                      {prop.price}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {areaUnit === "py" ? `${prop.py}평` : `${prop.areaM2}㎡`}
                    </span>
                  </div>
                </div>

                {/* Property Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-[#d4af37] font-semibold flex items-center gap-1.5">
                      <span>📍</span> {prop.location}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#f4e29e] transition-colors leading-snug">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {prop.desc}
                    </p>
                  </div>

                  {/* Key Specs Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 text-center text-xs">
                    <div>
                      <div className="text-[10px] text-slate-500">구조</div>
                      <div className="text-slate-200 font-medium truncate mt-0.5">{prop.rooms}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500">층수</div>
                      <div className="text-slate-200 font-medium truncate mt-0.5">{prop.floor}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500">주차</div>
                      <div className="text-slate-200 font-medium truncate mt-0.5">{prop.parking}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setSelectedProperty(prop)}
                      className="flex-1 py-2 rounded-lg border border-slate-700 hover:border-[#d4af37] text-slate-200 hover:text-white text-xs font-medium transition-colors"
                    >
                      상세 정보 보기
                    </button>
                    <a
                      href="#inquiry"
                      className="gold-btn px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap text-center"
                      onClick={() => {
                        setFormMessage(`[매물 문의] ${prop.title} (${prop.location}) 매물 현장 안내 및 상담을 원합니다.`);
                      }}
                    >
                      상담 신청
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>


      {/* =========================================================================
          PROPERTY DETAIL MODAL (Quick View & Direct Inquire)
      ========================================================================= */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0b1222] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#d4af37] font-semibold">{selectedProperty.typeLabel}</span>
                <h3 className="text-xl font-bold text-white">{selectedProperty.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProperty(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-5">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">거래 조건</div>
                  <div className="text-2xl font-serif font-black text-[#f4e29e]">{selectedProperty.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">면적 기준</div>
                  <div className="text-sm font-mono text-white font-semibold">
                    {selectedProperty.areaM2}㎡ ({selectedProperty.py}평)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-900/80 rounded-xl text-xs">
                <div>
                  <span className="text-slate-500 block">위치</span>
                  <span className="text-slate-200 font-medium">{selectedProperty.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">룸 / 욕실</span>
                  <span className="text-slate-200 font-medium">{selectedProperty.rooms}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">층수</span>
                  <span className="text-slate-200 font-medium">{selectedProperty.floor}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">주차 여부</span>
                  <span className="text-slate-200 font-medium">{selectedProperty.parking}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-300">매물 특징 & 상세 설명</div>
                <p className="text-xs text-slate-300 leading-relaxed bg-[#070b14] p-4 rounded-xl border border-slate-800">
                  {selectedProperty.desc}
                </p>
              </div>

              <div className="p-3.5 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl text-xs text-[#f4e29e] flex items-center justify-between">
                <div>
                  <div className="font-bold">담당 공인중개사: 김기환 대표</div>
                  <div className="text-[11px] text-slate-300">권리분석서 제공 및 현장 프라이빗 동행 투어 가능</div>
                </div>
                <a
                  href="tel:02-588-1204"
                  className="px-3 py-1.5 rounded bg-[#d4af37] text-slate-950 font-bold hover:bg-[#e2b864]"
                >
                  전화 문의
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 flex justify-end gap-2 bg-[#080d1a]">
              <button
                onClick={() => setSelectedProperty(null)}
                className="px-4 py-2 rounded-lg text-xs text-slate-300 hover:text-white"
              >
                닫기
              </button>
              <a
                href="#inquiry"
                onClick={() => {
                  setFormMessage(`[매물 문의] ${selectedProperty.title} (${selectedProperty.location}) 매물 현장 안내 및 상세 자료를 요청합니다.`);
                  setSelectedProperty(null);
                }}
                className="gold-btn px-5 py-2 rounded-lg text-xs font-bold"
              >
                이 매물로 상담 신청하기
              </a>
            </div>

          </div>
        </div>
      )}


      {/* =========================================================================
          CLIENT VALUE PROPOSITION: Why Choose Heritage Realty
      ========================================================================= */}
      <section id="services" className="w-full py-20 bg-[#060a14] border-y border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              ✦ CORE ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              고객의 신뢰를 완성하는 <span className="gold-gradient-text">헤리티지 4대 안심 시스템</span>
            </h2>
            <p className="text-slate-400 text-sm">
              단순 매물 연결을 넘어, 법률적 안전성과 세무 최적화까지 종합 자산관리 파트너로서 동행합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="glass-panel p-6 rounded-2xl space-y-4 hover:border-[#d4af37]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-xl text-[#f4e29e]">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-white">
                30항목 정밀 권리분석
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                계약 전 등기부등본, 신탁원부, 건축물대장 및 근저당권을 정밀 분석하여 사전에 100% 안전한 계약 환경을 보장합니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-6 rounded-2xl space-y-4 hover:border-[#d4af37]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-xl text-[#f4e29e]">
                🗝️
              </div>
              <h3 className="text-lg font-bold text-white">
                비공개 오프마켓 네트워크
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                포털에 공개되지 않는 하이엔드 자산가의 매도·매수 희망 건을 전속 보유하여, 철저한 비밀 유지 속에 1:1 매칭해 드립니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-6 rounded-2xl space-y-4 hover:border-[#d4af37]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-xl text-[#f4e29e]">
                📊
              </div>
              <h3 className="text-lg font-bold text-white">
                세무·금융 원스톱 연계
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                취득세 중과 여부, 종합부동산세, 양도소득세 절세 시뮬레이션 및 전담 세무사·금융권 대출 전담팀과 즉각 연계합니다.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass-panel p-6 rounded-2xl space-y-4 hover:border-[#d4af37]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-xl text-[#f4e29e]">
                🤝
              </div>
              <h3 className="text-lg font-bold text-white">
                입주 후 사후 자산 케어
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                계약 체결로 끝나지 않고, 입주 후 하자보수 조율, 임대 관리 대행, 향후 적정 재매각 타이밍까지 체계적으로 관리합니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          REAL ESTATE TOOLS: Interactive Commission & Tax Calculator
      ========================================================================= */}
      <section id="calculator" className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
            ✦ FINANCIAL TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
            부동산 <span className="gold-gradient-text">중개보수 & 취득세 간편 계산기</span>
          </h2>
          <p className="text-slate-400 text-sm">
            거래 예정 금액을 입력하시면 현행 법정 상한 요율 기준 예상 중개수수료와 취득세액을 즉시 계산해 드립니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#d4af37]/25">
          
          {/* Tab Switcher */}
          <div className="flex border-b border-slate-800 mb-6">
            <button
              onClick={() => setCalcTab("commission")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                calcTab === "commission"
                  ? "border-[#d4af37] text-[#f4e29e]"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              💼 중개수수료(복비) 계산기
            </button>
            <button
              onClick={() => setCalcTab("tax")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                calcTab === "tax"
                  ? "border-[#d4af37] text-[#f4e29e]"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              🏛️ 취득세 간편 계산기
            </button>
          </div>

          {/* Calculator Content */}
          {calcTab === "commission" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">매물 구분</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "house", label: "주택·아파트" },
                      { id: "officetel", label: "오피스텔" },
                      { id: "commercial", label: "상가·빌딩" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setCalcType(t.id as any)}
                        className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                          calcType === t.id
                            ? "bg-[#d4af37]/20 border-[#d4af37] text-[#f4e29e]"
                            : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">거래 방식</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCalcTxType("sale")}
                      className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                        calcTxType === "sale"
                          ? "bg-[#d4af37]/20 border-[#d4af37] text-[#f4e29e]"
                          : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      매매 / 교환
                    </button>
                    <button
                      onClick={() => setCalcTxType("rent")}
                      className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                        calcTxType === "rent"
                          ? "bg-[#d4af37]/20 border-[#d4af37] text-[#f4e29e]"
                          : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      임대차 (전세/월세)
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-slate-300">거래 금액 (억원 기준)</label>
                    <span className="text-xs font-mono font-bold text-[#f4e29e]">{calcPrice}억원 ({calcPrice * 10000}만원)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(Number(e.target.value))}
                    className="w-full accent-[#d4af37] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>1억</span>
                    <span>25억</span>
                    <span>50억</span>
                    <span>100억</span>
                  </div>
                </div>
              </div>

              {/* Output Display Card */}
              <div className="p-6 rounded-xl bg-[#090f1e] border border-[#d4af37]/30 space-y-4">
                <div className="text-xs text-slate-400 font-medium">예상 중개보수 산출 결과</div>
                
                <div className="space-y-2 border-b border-slate-800 pb-3">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>법정 상한 요율</span>
                    <span className="font-mono text-[#f4e29e] font-bold">{commResult.ratePct}%</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>중개수수료 (부가세 별도)</span>
                    <span className="font-mono text-white font-medium">{commResult.fee}원</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>부가가치세 (10%)</span>
                    <span className="font-mono text-slate-400">{commResult.vat}원</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400">총 예상 수수료 (VAT 포함)</div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-[#f4e29e]">
                    {commResult.total}원
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    * 공인중개사법 시행규칙 기준 상한요율이며, 실제 요율은 협의에 따라 감면될 수 있습니다.
                  </p>
                </div>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Tax Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">보유 주택 수</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "1", label: "1주택 (무주택)" },
                      { id: "2", label: "2주택 (조정대상)" },
                      { id: "3+", label: "3주택 이상" },
                    ].map((h) => (
                      <button
                        key={h.id}
                        onClick={() => setCalcHouseCount(h.id as any)}
                        className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                          calcHouseCount === h.id
                            ? "bg-[#d4af37]/20 border-[#d4af37] text-[#f4e29e]"
                            : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        {h.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-slate-300">취득 가액 (억원)</label>
                    <span className="text-xs font-mono font-bold text-[#f4e29e]">{calcPrice}억원</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(Number(e.target.value))}
                    className="w-full accent-[#d4af37] cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-900/60 rounded-lg text-[11px] text-slate-400 leading-relaxed">
                  💡 고가주택 및 다주택자의 경우 세제 혜택 및 법인 매수 등 다양한 절세 방안이 있습니다. 헤리티지 제휴 세무사를 통한 정밀 상담을 권장합니다.
                </div>
              </div>

              {/* Tax Output Display */}
              <div className="p-6 rounded-xl bg-[#090f1e] border border-[#d4af37]/30 space-y-4">
                <div className="text-xs text-slate-400 font-medium">예상 취득세액 산출 결과</div>
                
                <div className="space-y-2 border-b border-slate-800 pb-3">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>기본 취득세율</span>
                    <span className="font-mono text-white font-medium">{taxResult.pureRatePct}%</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>총 부담세율 (교육세·농특세 포함)</span>
                    <span className="font-mono text-[#f4e29e] font-bold">{taxResult.ratePct}%</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400">총 예상 세액</div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-[#f4e29e]">
                    약 {taxResult.taxWon}원
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    * 전용면적 85㎡ 초과 여부 및 지자체 감면 요건에 따라 실제 세액에 차이가 있을 수 있습니다.
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>


      {/* =========================================================================
          CLIENT REVIEWS & TESTIMONIALS SECTION
      ========================================================================= */}
      <section id="reviews" className="w-full py-20 bg-[#060a14] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              ✦ TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              헤리티지를 경험한 <span className="gold-gradient-text">고객들의 이야기</span>
            </h2>
            <p className="text-slate-400 text-sm">
              정확한 분석과 배려 깊은 중개로 소중한 인연을 맺어주신 고객님들의 진솔한 후기입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex text-[#d4af37] text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  "반포 펜트하우스 매수 과정에서 세무 취득세 중과 이슈 때문에 고민이 깊었는데, 김기환 대표님께서 전문 세무사와 함께 최적의 방안을 도출해주셔서 편안하게 계약을 마칠 수 있었습니다."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-xs">
                <div className="font-bold text-white">김 * * 대표님</div>
                <div className="text-slate-500 text-[11px]">IT 벤처기업 CEO • 반포 아크로 매수</div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4 border-[#d4af37]/35 shadow-lg">
              <div className="space-y-3">
                <div className="flex text-[#d4af37] text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  "테헤란로 상업용 빌딩을 매각하면서 프라이버시가 최우선이었는데, 포털에 올리지 않고도 오프마켓 전속 네트워크를 통해 3주 만에 우량 매수자와 조용히 조율해주셨습니다. 대단히 만족합니다."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-xs">
                <div className="font-bold text-white">이 * * 원장님</div>
                <div className="text-slate-500 text-[11px]">강남 의료법인 이사장 • 역삼 빌딩 매각</div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex text-[#d4af37] text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  "한남동 단독주택 전세 계약 당시 브리핑 자료로 만들어주신 15페이지짜리 권리분석 보고서를 보고 감탄했습니다. 제가 변호사임에도 불구하고 놓칠 뻔한 사소한 특약까지 세밀하게 챙겨주셨습니다."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-xs">
                <div className="font-bold text-white">박 * * 파트너 변호사님</div>
                <div className="text-slate-500 text-[11px]">대형 로펌 시니어 파트너 • 한남동 주택 임차</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          FAST CONSULTATION & PROPERTY REGISTRATION SECTION
      ========================================================================= */}
      <section id="inquiry" className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
            ✦ PRIVATE CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
            1:1 프라이빗 <span className="gold-gradient-text">중개 & 매물 상담 신청</span>
          </h2>
          <p className="text-slate-400 text-sm">
            소중한 자산의 매도·매수, 임대차 의뢰를 남겨주시면 담당 공인중개사가 30분 이내에 신속하게 유선 안내드립니다.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-2xl shadow-2xl border border-[#d4af37]/30">
          
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] mx-auto flex items-center justify-center text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">상담 신청이 정상 접수되었습니다</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                헤리티지 김기환 대표 공인중개사가 남겨주신 연락처(<span className="text-[#f4e29e] font-mono">{formPhone || "입력하신 번호"}</span>)로 사전 자료를 검토한 뒤 30분 이내에 연락드리겠습니다.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormName("");
                  setFormPhone("");
                  setFormMessage("");
                }}
                className="gold-btn px-6 py-2.5 rounded-lg text-xs font-bold"
              >
                추가 상담 신청하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setInquiryType("buy")}
                  className={`py-2.5 rounded-lg transition-all ${
                    inquiryType === "buy"
                      ? "bg-[#d4af37] text-slate-950 shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  매물 구하기 (매수 / 임차)
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("sell")}
                  className={`py-2.5 rounded-lg transition-all ${
                    inquiryType === "sell"
                      ? "bg-[#d4af37] text-slate-950 shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  매물 내놓기 (매도 / 임대)
                </button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    고객 성함 <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    연락처 <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    희망 지역 / 대상 지역
                  </label>
                  <select
                    value={formRegion}
                    onChange={(e) => setFormRegion(e.target.value)}
                    className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="강남·서초">강남·서초권 (반포/청담/압구정/역삼)</option>
                    <option value="용산·한남">용산·한남권 (한남/이태원/동빙고)</option>
                    <option value="성수·송파">성수·송파권 (성수/잠실)</option>
                    <option value="판교·분당">판교·분당 및 수도권</option>
                    <option value="기타">기타 지역 (직접 협의)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    희망 예산 / 매도 희망가
                  </label>
                  <input
                    type="text"
                    placeholder="예: 50억 ~ 70억원 선"
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  상세 문의 내용
                </label>
                <textarea
                  rows={3}
                  placeholder="원하시는 층수, 한강 조망 여부, 희망 입주 시기 등을 자유롭게 적어주세요."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none leading-relaxed"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-slate-500">
                  🔒 남겨주신 정보는 프라이빗 중개 상담 목적으로만 활용되며 안전하게 보호됩니다.
                </span>
                <button
                  type="submit"
                  className="gold-btn w-full sm:w-auto px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  상담 신청 완료하기
                </button>
              </div>

            </form>
          )}

        </div>

      </section>

    </main>
  );
}
