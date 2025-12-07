import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./_components/Navigation";

const pretendard = localFont({
  src: "../public/font/PretendardVariable.ttf",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "아무튼",
  description: "잡생각과 공부한 내용들을 기록하기 위해 만든 블로그인데, 아무튼 적습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-pretendard dark:bg-black">
          <Navigation />
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start bg-white dark:bg-black">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
