import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { landingNav } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-iliengwani.png"
            alt="Ilengwani"
            width={148}
            height={42}
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {landingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* TODO: lier vers /connexion quand l'écran 02 existe */}
        <Button className="px-5 py-2 text-sm">Se connecter</Button>
      </div>
    </header>
  );
}