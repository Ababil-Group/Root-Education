import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopBar from "@/components/common/TopBar";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import NextTopLoader from "nextjs-toploader";
import clsx from "clsx";
import CookieBanner from "@/components/common/CookieBanner";

export const metadata: Metadata = {
  title: "Root Education",
  description: "Start Your Global Learning Experience",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.className,
          "relative flex min-h-screen flex-col text-secondary scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-primary",
        )}
      >
        <TanstackQueryProvider>
          <NextTopLoader color="#F37329" />
          <TopBar />
          <Header />
          {children}
          <Footer />
        </TanstackQueryProvider>

        <CookieBanner />
      </body>
    </html>
  );
}
