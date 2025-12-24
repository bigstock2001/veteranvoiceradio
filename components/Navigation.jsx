"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const djStations = [
  { label: "Ranger Rockwave", href: "/djs/ranger-rockwave" },
  { label: "Semper Fi Country", href: "/djs/semper-fi-country" },
];

export default function Navigation() {
  const [djsOpen, setDjsOpen] = useState(false);
  const djsRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!djsRef.current) return;
      if (!djsRef.current.contains(e.target)) setDjsOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-4">
        <div className="container-card px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            Veteran Voice Radio
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/stations" className="hover:opacity-80">
              Stations
            </Link>

            {/* DJs dropdown (hover on desktop, tap on mobile) */}
            <div
              className="relative"
              ref={djsRef}
              onMouseEnter={() => setDjsOpen(true)}
              onMouseLeave={() => setDjsOpen(false)}
            >
              <button
                type="button"
                className="hover:opacity-80"
                onClick={() => setDjsOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={djsOpen}
              >
                DJs
              </button>

              {djsOpen && (
                <div className="absolute right-0 mt-3 w-60 rounded-xl border bg-white shadow-lg overflow-hidden">
                  {djStations.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-3 hover:bg-gray-100"
                      onClick={() => setDjsOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:opacity-80">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
