"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appNav } from "@/config/navigation";
import { isActivePath } from "@/lib/IsActivePath";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-surface bg-white p-4 md:flex">
      <Link href="/accueil" aria-label="ILENGWANI, accueil" className="mb-8 block">
        <Image
          src="/images/logo-iliengwani.png"
          alt="ILENGWANI"
          width={160}
          height={45}
          priority
          className="h-auto w-40"
        />
      </Link>

      <nav aria-label="Navigation principale">
        <ul className="space-y-2">
          {appNav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-4 rounded-xl p-3 font-bold transition hover:bg-surface ${
                    active ? "bg-surface" : ""
                  }`}
                >
                  <Image src={item.icon} alt="" width={28} height={28} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* TODO: feuilles décoratives en bas de la barre (absentes du code de la
          maquette). Ajouter quand decor/feuilles-sidebar.png est reçu :
          <Image src="/images/decor/feuilles-sidebar.png" alt="" width={256} height={300} className="mt-auto" /> */}
    </aside>
  );
}