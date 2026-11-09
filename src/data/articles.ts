// src/data/articles.ts
// Contenu provisoire : sera remplacé par les données de l'API (voir cahier des charges, section 11).

export type Article = {
  id: string;
  title: string;
  category: string;
  readingTime: number; // en minutes
  heroImage: string;
  heroAlt: string;
  intro: string;
  keyPoints: string[];
  summary: string[];
  closingQuote: string;
};

export const articles: Article[] = [
  {
    id: "gerer-son-stress-au-quotidien",
    title: "Gérer son stress au quotidien",
    category: "Article",
    readingTime: 6,
    heroImage: "/images/articles/meditation.webp",
    heroAlt: "Une personne médite assise dans l'herbe, entre des arbres",
    intro:
      "Le stress fait partie de notre quotidien. Dans cet article, découvre des conseils pratiques pour mieux gérer tes émotions et retrouver un équilibre dans ton quotidien.",
    keyPoints: [
      "Comprendre ce qu'est le stress",
      "Identifier les signes qui doivent t'alerter",
      "Mettre en place des habitudes simples",
    ],
    summary: [
      "Qu'est-ce que le stress ?",
      "Des signes à reconnaître",
      "Des solutions simples",
      "À retenir",
    ],
    closingQuote: "Prendre soin de toi, c'est aussi avancer",
  },
];

export function getArticleById(id: string) {
  return articles.find((article) => article.id === id);
}