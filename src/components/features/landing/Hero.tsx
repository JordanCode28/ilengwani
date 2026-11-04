// src/components/features/landing/Hero.tsx
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-b-4xl bg-linear-to-b from-surface to-background px-4 py-20"
      // TODO: remplacer le dégradé par l'image officielle du client
      // (ex. /images/hero.jpg dans public/images/) une fois le fichier reçu
    >
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold leading-tight text-text md:text-5xl">
          Un espace pour te sentir mieux, à ton rythme.
        </h1>

        <p className="mt-4 text-base text-text/80 md:text-lg">
          ILENGWANI est une application de bien-être conçue pour tous les
          jeunes, avec une attention particulière portée aux jeunes de 15 à 28
          ans.
        </p>

        {/* TODO: lier vers /connexion quand l'écran 02 existe */}
        <Button className="mt-8 px-8 py-3 text-base">
          Commencer le bien-être
        </Button>
      </div>
    </section>
  );
}