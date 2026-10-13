import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "나의 두 번째 사이트 - Next.js 시작하기",
  description: "TypeScript, App Router, Tailwind CSS로 구동되는 깔끔하고 모던한 Next.js 웹사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-[#070f26] via-[#0b1b42] to-[#050c20] text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}


