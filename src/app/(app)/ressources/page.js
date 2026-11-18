import { Search } from "lucide-react";
import ResourceCard from "@/components/ressources/ResourceCard";

export default function RessourcesPage() {
  return (
    <section className="rounded-3xl bg-brand-50 p-5 sm:p-8">
      <h1 className="text-3xl font-bold text-brand-700 sm:text-4xl">Ressources</h1>
      <p className="mt-3 text-base text-brand-800 sm:ml-5 sm:text-lg">
        Des contenus utiles pour mieux comprendre, apprendre et prendre soin de toi.
      </p>

      {/* Barre de recherche (visuelle seulement) */}
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-5 py-4">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Rechercher un sujet, un mot clé..."
          className="w-full bg-transparent text-base outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Boutons de filtre (visuels seulement) */}
      <div className="mt-8 flex flex-wrap gap-3 sm:gap-6">
        <button className="rounded-2xl bg-brand-800 px-6 py-2 text-base text-white">Tous</button>
        <button className="rounded-2xl border border-gray-200 bg-white px-6 py-2 text-base">Articles</button>
        <button className="rounded-2xl border border-gray-200 bg-white px-6 py-2 text-base">Podcasts</button>
        <button className="rounded-2xl border border-gray-200 bg-white px-6 py-2 text-base">Vidéos</button>
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-brand-700">Ressources</h2>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ResourceCard
          label="Article"
          title="Gérer son stress au quotidien"
          description="Découvrez des conseils simples et créatifs pour mieux gérer le stress."
          duration="6 min"
          image="/images/stress.jpg"
        />
        <ResourceCard
          label="Vidéo"
          title="Cultiver la confiance en soi"
          description="Une vidéo inspirante pour apprendre à croire en vous et renforcer votre estime personnelle."
          duration="8 min"
          image="/images/confiance.jpg"
        />
        <ResourceCard
          label="Podcast"
          title="Les relations saines : comment les construire ?"
          description="Un échange bienveillant pour mieux comprendre ses relations."
          duration="12 min"
          image="/images/relations.jpg"
        />
        <ResourceCard
          label="Article"
          title="Se reconnecter à soi"
          description="Découvrez des conseils pour vous concentrer et retrouver un équilibre intérieur."
          duration="10 min"
          image="/images/equilibre.jpg"
        />
      </div>
    </section>
  );
}