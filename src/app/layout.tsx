import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PACE 1.0 方法论 - 程序化AI协作工程",
  description: "PACE 1.0 (Programmatic AI Collaboration Engineering) 是一套系统化的AI协作软件开发方法论，帮助团队高效进行人机协作开发。",
  keywords: "PACE, AI协作, 软件开发, 方法论, 程序化AI协作工程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
