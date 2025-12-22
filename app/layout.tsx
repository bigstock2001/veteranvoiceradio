// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import RadioPlayerProvider from "@/components/RadioPlayerProvider";
import StickyPlayerBar from "@/components/StickyPlayerBar";

export const metadata: Metadata = {
  title: "Veteran Voice Radio",
  description: "Veteran-powered radio network featuring Semper Fi Country and Ranger Rockwave.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RadioPlayerProvider>
          <div className="site">
            <header className="topNav">
              <div className="container navInner">
                <div className="brand">
                  <div className="brandMark" aria-hidden />
                  <div className="brandText">
                    <div className="brandName">Veteran Voice Radio</div>
                    <div className="brandSub">Two Stations. One Mission.</div>
                  </div>
                </div>

                <nav className="navLinks" aria-label="Main">
                  <a className="navLink" href="/">
                    Home
                  </a>
                  <a className="navLink" href="/stations/semper-fi-country">
                    Semper Fi Country
                  </a>
                  <a className="navLink" href="/stations/ranger-rockwave">
                    Ranger Rockwave
                  </a>
                  <a className="navLink" href="/about">
                    About
                  </a>
                  <a className="navLink" href="/donate">
                    Donate
                  </a>
                </nav>
              </div>
            </header>

            <main className="main">{children}</main>

            <footer className="footer">
              <div className="container footerInner">
                <div className="subtle">
                  © {new Date().getFullYear()} Veteran Voice Radio. Built on Vercel.
                </div>
                <div className="subtle">Professional. Fun. Veteran-powered.</div>
              </div>
            </footer>

            <StickyPlayerBar />
          </div>
        </RadioPlayerProvider>
      </body>
    </html>
  );
}
