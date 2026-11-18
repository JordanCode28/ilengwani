import Image from "next/image";
import { Tag } from "@/components/ui/Tag";
import type { Article } from "@/data/articles";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header>
      <div className="relative h-52 w-full overflow-hidden rounded-[18px] bg-surface md:h-80">
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          fill
          priority
          sizes="(min-width: 768px) 80vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-5 flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-5">
        <Tag>{article.category}</Tag>
        <h1 className="text-3xl font-bold md:text-[2.5rem]">{article.title}</h1>
      </div>

      <p className="mt-3 font-bold">{article.readingTime} min de lecture</p>
    </header>
  );
}