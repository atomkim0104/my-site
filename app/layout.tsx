import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "헤리티지 부동산 | 김기환 공인중개사사무소 - 프리미엄 하이엔드 중개",
  description:
    "하이엔드 아파트, 고급 펜트하우스, 상업용 빌딩 및 자산관리 전문. 철저한 권리분석과 1:1 맞춤형 프리미엄 부동산 중개 솔루션을 제공합니다.",
  keywords: [
    "헤리티지 부동산",
    "김기환 공인중개사",
    "강남 부동산",
    "서초 펜트하우스",
    "고급빌라 중개",
    "빌딩 매매",
    "부동산 세무 상담",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 antialiased selection:bg-[#d4af37] selection:text-slate-950">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
