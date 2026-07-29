import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PUBG SENS LAB｜专属灵敏度调试助手",
  description: "用三项免点击准星测试，生成现版 PUBG 可直接使用的灵敏度参数。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
