import type { Metadata } from "next";
import "./globals.css";
import { ParticlesBackground } from "./ui/ParticlesBackground";
import { NavigationBar } from "./ui/NavigationBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://kyoheiyonehama.vercel.app/"),
  title: {
    default: "米浜 匡平 | ポートフォリオサイト",
    template: "%s | 米浜 匡平"
  },
  description : "米浜 匡平のポートフォリオサイト。制作物・スキル・経歴・ブログ・お問い合わせ",
  alternates: { canonical: "/"},
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "米浜 匡平のポートフォリオサイト",
    title: "米浜 匡平 | ポートフォリオサイト",
    description: "制作物・スキル・経歴・ブログ・お問い合わせ",
    images: [{ url: "../public/Me.png", width: 1200, height: 630, alt: "OGP"}],
  },
  twitter: {
    card: "summary_large_image",
    title: "米浜 匡平 | ポートフォリオサイト",
    description: "制作物・スキル・経歴・ブログ・お問い合わせ",
    images: ["/Me.png"]
  },
  robots: { index: true, follow: true},
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <NavigationBar />
        <ParticlesBackground />
        <main className="relative z-10 pt-32 flex-1">{children}</main>
      <footer className="bg-gray-200/30 py-4 mt-4 w-full text-center relative z-50">© 2025 Kyohei Yonehama</footer>
      </body>
    </html>
  );
}
