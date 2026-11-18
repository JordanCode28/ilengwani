import Link from "next/link";
import { Home, BookOpen, MessagesSquare, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-gray-200 bg-white md:flex">
      <div className="px-6 py-5 text-2xl font-extrabold tracking-wide text-brand-800">
        ILENGWANI
      </div>

      <nav className="mt-4 flex flex-col gap-6 px-2">
        <Link href="/" className="flex items-center gap-4 rounded-xl px-4 py-3 font-semibold text-brand-800 hover:bg-gray-50">
          <Home size={22} /> Accueil
        </Link>

        {/* Page active : fond gris */}
        <Link href="/ressources" className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 font-semibold text-brand-800 shadow-sm">
          <BookOpen size={22} /> Ressources
        </Link>

        <Link href="/salons" className="flex items-center gap-4 rounded-xl px-4 py-3 font-semibold text-brand-800 hover:bg-gray-50">
          <MessagesSquare size={22} /> Salons d'écoute
        </Link>

        <Link href="/parametres" className="flex items-center gap-4 rounded-xl px-4 py-3 font-semibold text-brand-800 hover:bg-gray-50">
          <Settings size={22} /> Paramètres
        </Link>
      </nav>
    </aside>
  );
}