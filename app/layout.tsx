import type { Metadata } from "next";
import Link from "next/link";
import { Balsamiq_Sans, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "baza.prod — Студія звукозапису",
  description: "Сучасна студія звукозапису для артистів та брендів."
};

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/services", label: "Послуги" },
  { href: "/prices", label: "Ціни" },
  { href: "/booking", label: "Запис" },
  { href: "/contacts", label: "Контакти" }
];

const balsamiq = Balsamiq_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-balsamiq"
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${balsamiq.variable}`}>
        <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="brand-font text-xs uppercase tracking-[0.3em] text-purple-300">
                baza.prod
              </p>
              <p className="text-lg font-semibold text-slate-100">
                Студія, де треки звучать доросло.
              </p>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="rounded-full px-4 py-2 transition hover:bg-slate-800/70 hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-800/60 bg-slate-950">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <p className="brand-font text-base text-slate-100">baza.prod</p>
              <p>Пн–Нд · 10:00–22:00</p>
            </div>
            <div className="flex flex-col gap-1 md:text-right">
              <p>Instagram · Telegram · Email</p>
              <p>© {new Date().getFullYear()} baza.prod</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
