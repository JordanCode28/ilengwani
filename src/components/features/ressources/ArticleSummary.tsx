import { InfoBox } from "@/components/ui/InfoBox";

type ArticleSummaryProps = {
  items: string[];
  className?: string;
};

export function ArticleSummary({ items, className = "" }: ArticleSummaryProps) {
  return (
    <nav aria-label="Dans cet article" className={className}>
      <InfoBox variant="light">
        <h2 className="mb-4 text-center text-lg font-semibold">
          Dans cet article
        </h2>
        {/* TODO: transformer en liens (ancres) quand le texte des sections existera */}
        <ol className="list-inside list-decimal space-y-3">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </InfoBox>
    </nav>
  );
}