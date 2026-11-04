// Menu de la landing (visiteur non connecté)
export const landingNav = [
  { label: "Accueil", href: "/" },
  { label: "Ressources", href: "/ressources" },
  { label: "Salons d'écoute", href: "/salons" },
  // TODO: "Témoignages" — en attente de la réponse du client
  { label: "Programme ILENGWANI", href: "/programme" },
];

// Liens du footer, regroupés par colonne
export const footerNav = [
  {
    title: "ILENGWANI",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact ILENGWANI", href: "/contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions d'utilisation", href: "/legal/conditions" },
      { label: "Politique de confidentialité", href: "/legal/confidentialite" },
      { label: "Mentions légales", href: "/legal/mentions" },
    ],
  },
  {
    title: "Plus",
    links: [
      { label: "Ressources / partenaires", href: "/partenaires" },
      // TODO: ajouter les liens des réseaux sociaux quand le client les fournit
    ],
  },
];