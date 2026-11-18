import { InfoBox } from "@/components/ui/InfoBox";
import type { Article } from "@/data/articles";
import { ArticleSummary } from "./ArticleSummary";
import { QuoteBanner } from "./QuoteBanner";

export function ArticleBody({ article }: { article: Article }) {
  return (
    <div className="mt-4 rounded-[14px] border border-primary p-4 md:p-5">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <InfoBox className="md:w-1/2">
          <h2 className="mb-4 text-2xl font-bold">À propos</h2>
          <p className="mb-8 pl-5 font-bold leading-relaxed">{article.intro}</p>

          <h2 className="mb-4 text-2xl font-bold">Points clés</h2>
          <ul className="space-y-3 pl-5 font-bold">
            {article.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </InfoBox>

        <ArticleSummary
          items={article.summary}
          className="md:ml-auto md:w-72 md:self-center"
        />
      </div>

      <QuoteBanner text={article.closingQuote} />
    </div>
  );
}