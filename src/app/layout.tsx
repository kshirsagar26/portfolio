"use client";

import "./globals.scss";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});

const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning={true}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={`${isDebug ? "debug-screens" : ""} antialiased selection:bg-cyber-blue selection:text-black`}>
        <div className="scanlines" />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-black opacity-80" />

        {isDebug ? <WebVitals /> : null}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
