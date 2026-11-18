import { ArticleBody } from "@/components/features/ressources/ArticleBody";
import { ArticleHeader } from "@/components/features/ressources/ArticleHeader";
import { articles } from "@/data/articles";

// TEMPORAIRE : aperçu de l'article. Remplacé à l'étape 4 par ressources/[id].
export default function RessourcesPage() {
  const article = articles[0];

  return (
    <article>
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
    </article>
  );
}