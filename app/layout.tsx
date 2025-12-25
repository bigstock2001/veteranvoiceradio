// app/layout.tsx

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import RadioPlayerProvider from "@/components/RadioPlayerProvider";
import StickyPlayerBar from "@/components/StickyPlayerBar";

export const metadata: Metadata = {
  title: "Veteran Voice Radio",
  description:
    "Veteran-powered radio network featuring Semper Fi Country and Ranger Rockwave.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                  <Link className="navLink" href="/">
                    Home
                  </Link>

                  <Link
                    className="navLink"
                    href="/stations/semper-fi-country"
                  >
                    Semper Fi Country
                  </Link>

                  <Link
                    className="navLink"
                    href="/stations/ranger-rockwave"
                  >
                    Ranger Rockwave
                  </Link>

                  {/* DJs Dropdown */}
                  <div className="vvrDropdown" aria-label="DJs menu">
                    <button
                      type="button"
                      className="navLink vvrDropdownTrigger"
                      aria-haspopup="menu"
                    >
                      DJs
                    </button>

                    <div className="vvrDropdownMenu" role="menu">
                      <Link
                        className="vvrDropdownItem"
                        role="menuitem"
                        href="/djs/ranger-rockwave"
                      >
                        Ranger Rockwave
                      </Link>

                      <Link
                        className="vvrDropdownItem"
                        role="menuitem"
                        href="/djs/semper-fi-country"
                      >
                        Semper Fi Country
                      </Link>
                    </div>
                  </div>

                  <Link className="navLink" href="/about">
                    About
                  </Link>

                  <Link className="navLink" href="/donate">
                    Donate
                  </Link>
                </nav>
              </div>

              {/* Scoped dropdown CSS */}
              <style>{`
                .vvrDropdown {
                  position: relative;
                  display: inline-flex;
                  align-items: center;
                }

                .vvrDropdownTrigger {
                  background: transparent;
                  border: 0;
                  padding: 0;
                  margin: 0;
                  cursor: pointer;
                  font: inherit;
                  line-height: inherit;
                }

                .vvrDropdownMenu {
                  position: absolute;
                  left: 0;
                  top: 100%;
                  z-index: 9999;

                  display: none;
                  flex-direction: column;
                  gap: 6px;

                  min-width: 220px;
                  padding: 10px;
                  border-radius: 12px;

                  background: rgba(15, 18, 25, 0.98);
                  border: 1px solid rgba(255, 255, 255, 0.12);
                  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
                  backdrop-filter: blur(10px);
                }

                .vvrDropdown:hover .vvrDropdownMenu,
                .vvrDropdown:focus-within .vvrDropdownMenu {
                  display: flex;
                }

                .vvrDropdownMenu::before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: -12px;
                  width: 100%;
                  height: 12px;
                }

                .vvrDropdownItem {
                  display: block;
                  width: 100%;
                  padding: 10px 12px;
                  border-radius: 10px;
                  text-decoration: none;

                  color: rgba(255, 255, 255, 0.92);
                  font-weight: 600;
                  line-height: 1.2;
                  white-space: nowrap;
                }

                .vvrDropdownItem:hover,
                .vvrDropdownItem:focus {
                  background: rgba(255, 255, 255, 0.10);
                  outline: none;
                }
              `}</style>
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
