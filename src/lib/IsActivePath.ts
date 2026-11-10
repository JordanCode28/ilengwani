// Un lien est actif si on est sur sa page ou sur une sous-page.
// Exemple : /ressources/mon-article reste actif pour /ressources.
export function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}