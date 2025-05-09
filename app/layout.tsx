import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "City Stroy - Комплексные решения для гражданской защиты",
  description: "Поставка тренажёров, спецтехники и СИЗ для МЧС, МВД, МО и промышленных объектов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased bg-[#1C1C1C] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
