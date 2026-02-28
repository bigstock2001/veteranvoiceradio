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
        <div
          className="
            container-card px-4 py-3
            flex items-center justify-between gap-4
            text-white
            !bg-white/15
            !border-white/20
            backdrop-blur-xl
          "
        >
          <Link href="/" className="font-bold text-lg shrink-0 whitespace-nowrap">
            <span style={{ color: "#f59e0b" }}>Veteran Voice Radio</span>
          </Link>

          {/* KEY CHANGE: allow wrapping so links don't get clipped */}
          <nav className="flex flex-1 flex-wrap items-center justify-end gap-x-6 gap-y-2 min-w-0">
            <Link href="/stations" className="hover:opacity-80 whitespace-nowrap">
              Stations
            </Link>

            <Link href="/artists" className="hover:opacity-80 whitespace-nowrap">
              Artists
            </Link>

            <Link href="/sponsors" className="hover:opacity-80 whitespace-nowrap">
              Sponsorship
            </Link>

            <Link href="/webinars/live" className="hover:opacity-80 whitespace-nowrap">
              Live Webinar
            </Link>

            {/* DJs dropdown (hover on desktop, tap on mobile) */}
            <div
              className="relative whitespace-nowrap"
              ref={djsRef}
              onMouseEnter={() => setDjsOpen(true)}
              onMouseLeave={() => setDjsOpen(false)}
            >
              <button
                type="button"
                className="hover:opacity-80 whitespace-nowrap"
                onClick={() => setDjsOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={djsOpen}
              >
                DJs
              </button>

              {djsOpen && (
                <div className="absolute right-0 mt-3 w-60 rounded-xl border bg-white shadow-lg overflow-hidden text-black">
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

            <Link href="/contact" className="hover:opacity-80 whitespace-nowrap">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}