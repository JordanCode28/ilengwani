import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 text-center">
      {/* TODO: texte à valider avec le client (voir remarque ci-dessous) */}
      <h2 className="mb-6 text-2xl font-semibold text-text">
        Prêt(e) à prendre soin de toi ?
      </h2>
      <ButtonLink href="/connexion" variant="secondary" className="px-8 py-3">
        Créer un compte
      </ButtonLink>
    </section>
  );
}