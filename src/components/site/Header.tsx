import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Anasayfa" },
  { to: "/kesfedin", label: "Bizi Keşfedin" },
  { to: "/ogrencilerimiz", label: "Öğrencilerimiz" },
  { to: "/egitmenler", label: "Eğitmenler" },
  { to: "/galeri", label: "Galeri" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight text-navy">
          Hacettepe <span className="text-gold italic">Bilim Kampları</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-[12px] font-medium tracking-[0.18em] uppercase">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-navy/80 hover:text-gold transition-colors duration-300"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/basvuru"
            className="text-gold font-semibold hover:opacity-70 transition-opacity"
          >
            Hemen Başvur →
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menüyü aç"
        >
          <span className={`block h-px w-6 bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-8 space-y-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block font-serif text-2xl text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/basvuru"
            onClick={() => setOpen(false)}
            className="block font-serif text-2xl text-gold"
          >
            Hemen Başvur →
          </Link>
        </div>
      )}
    </nav>
  );
}
