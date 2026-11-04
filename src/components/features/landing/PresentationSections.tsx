import { ButtonLink } from "@/components/ui/ButtonLink";

export function PresentationSections() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:items-center">
      {/* Salons d'écoute */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-text">
          Salons d&apos;écoute
        </h2>
        <p className="mb-4 text-text/80">
          Rejoins des conversations de groupe calmes et anonymes, par messages,
          avec d&apos;autres jeunes.
        </p>
        {/* TODO: remplacer par les images officielles du client */}
        <div className="grid grid-cols-2 gap-3 rounded-card bg-surface p-4">
          <div className="aspect-square rounded-xl bg-primary/20" />
          <div className="aspect-square rounded-xl bg-accent/20" />
          <div className="aspect-square rounded-xl bg-secondary/20" />
          <div className="aspect-square rounded-xl bg-primary/10" />
        </div>
      </div>

      {/* Programme ILENGWANI */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-text">
          Programme ILENGWANI
        </h2>
        <p className="mb-6 text-text/80">
          Un programme sur mesure pour avancer à ton rythme.
        </p>
        {/* TODO: vérifier la destination avec le client */}
        <ButtonLink href="/programme">Découvrir le programme</ButtonLink>
      </div>
    </section>
  );
}