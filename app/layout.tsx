// app/layout.tsx

import type { Metadata } from "next";
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
                  <a className="navLink" href="/">
                    Home
                  </a>
                  <a className="navLink" href="/stations/semper-fi-country">
                    Semper Fi Country
                  </a>
                  <a className="navLink" href="/stations/ranger-rockwave">
                    Ranger Rockwave
                  </a>

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
                      <a
                        className="vvrDropdownItem"
                        role="menuitem"
                        href="/djs/ranger-rockwave"
                      >
                        Ranger Rockwave
                      </a>
                      <a
                        className="vvrDropdownItem"
                        role="menuitem"
                        href="/djs/semper-fi-country"
                      >
                        Semper Fi Country
                      </a>
                    </div>
                  </div>

                  <a className="navLink" href="/about">
                    About
                  </a>
                  <a className="navLink" href="/donate">
                    Donate
                  </a>
                </nav>
              </div>

              {/* Scoped dropdown CSS (keeps DJs inline + prevents hover drop-close) */}
              <style>{`
                /* Make dropdown wrapper behave like the other inline nav items */
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

                /* Hidden by default */
                .vvrDropdownMenu {
                  position: absolute;
                  left: 0;
                  top: 100%;
                  margin-top: 0;
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

                /* Hover/focus opens menu */
                .vvrDropdown:hover .vvrDropdownMenu,
                .vvrDropdown:focus-within .vvrDropdownMenu {
                  display: flex;
                }

                /* Hover buffer so moving mouse down doesn't close the menu */
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
                  © {new Date().getFullYear()} Veteran Voice Radio. Built on
                  Vercel.
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
