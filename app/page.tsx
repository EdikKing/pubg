import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PUBG SENS LAB｜专属灵敏度调试助手",
  description: "通过追踪、定位与 360° 转身测试，生成可直接应用于 PUBG 的专属灵敏度。",
};

export default function Home() {
  return (
    <main className="page-shell">
      <iframe
        className="app-frame"
        src="/pubg-sensitivity.html"
        title="PUBG 专属灵敏度调试助手"
      />
    </main>
  );
}
