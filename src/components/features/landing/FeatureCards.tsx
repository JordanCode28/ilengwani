// src/components/features/landing/FeatureCards.tsx
import { Card } from "@/components/ui/Card";

const features = [
  {
    title: "Ressources",
    description:
      "Accède à des articles, vidéos et conseils pour comprendre et gérer tes émotions.",
  },
  {
    title: "Salons d'écoute",
    // Texte mis à jour : salons en chat uniquement (plus de vidéo ni d'audio)
    description:
      "Participe à des conversations de groupe calmes et anonymes avec d'autres jeunes, par messages.",
  },
  {
    title: "Programme ILENGWANI",
    description:
      "Découvre un parcours de bien-être personnalisé pour ton développement personnel.",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-8 text-center text-2xl font-semibold text-text">
        Nos fonctionnalités clés
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            {/* TODO: remplacer par l'icône officielle de chaque carte */}
            <div className="mb-3 h-10 w-10 rounded-full bg-surface" />
            <h3 className="mb-2 text-lg font-semibold text-text">
              {feature.title}
            </h3>
            <p className="text-sm text-text/80">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}