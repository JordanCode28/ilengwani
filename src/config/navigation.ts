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

// Menu de la zone connectée (barre latérale)
export const appNav = [
  { label: "Accueil", href: "/accueil", icon: "/images/icons/accueil.png" },
  { label: "Ressources", href: "/ressources", icon: "/images/icons/ressources.png" },
  { label: "Salons d'écoute", href: "/salons", icon: "/images/icons/salons.png" },
  { label: "Paramètres", href: "/parametres", icon: "/images/icons/parametres.png" },
  // TODO: "Programme" et "Témoignages" absents de la maquette, à confirmer avec le client
];