import Image from "next/image";
import Link from "next/link";

// TODO: lire le pseudo et l'image de profil depuis la session de l'utilisateur
const username = "Lumière";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 md:justify-end md:px-10 md:py-5">
      {/* Le logo n'apparaît ici que sur mobile : sur ordinateur, il est dans la barre latérale */}
      <Link href="/accueil" aria-label="ILENGWANI, accueil" className="md:hidden">
        <Image
          src="/images/logo-iliengwani.png"
          alt="ILENGWANI"
          width={120}
          height={34}
          className="h-auto w-28"
        />
      </Link>

      <div className="flex items-center gap-4">
        <button type="button" aria-label="Notifications">
          <Image src="/images/icons/cloche.png" alt="" width={28} height={28} />
        </button>
        <div className="h-11 w-11 rounded-full bg-sun" aria-hidden="true" />
        <span>{username}</span>
      </div>
    </header>
  );
}