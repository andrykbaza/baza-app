import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baza Studio",
  description: "Boutique studio scheduling and service booking."
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/prices", label: "Prices" },
  { href: "/booking", label: "Booking" },
  { href: "/contacts", label: "Contacts" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Baza Studio</p>
              <p className="text-lg font-semibold">Calm spaces. Confident looks.</p>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="rounded-full px-3 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>Open daily · 9:00–20:00</p>
            <p>Call us: +1 (555) 010-0824 · hello@bazastudio.com</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
