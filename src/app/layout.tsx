import "../styles/globals.css";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Portal de Compras Públicas | Marketplace",
  description: "Marketplace - Onde Governo e Mercado fecham negócios rápidos  com transparência.",
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${inter.variable} antialiased flex flex-col items-center justify-center`}
      >
        <Header />
        <main className="w-[100%] min-h-[1000px] flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
