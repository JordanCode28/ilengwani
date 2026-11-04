// src/components/layout/Footer.tsx
import Link from "next/link";
import { footerNav } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="mt-16 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {footerNav.map((column) => (
            <ul key={column.title} className="space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p className="mt-8 text-sm text-text/70">
          © {new Date().getFullYear()} ILENGWANI. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}