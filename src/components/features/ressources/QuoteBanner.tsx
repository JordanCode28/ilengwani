import Image from "next/image";

export function QuoteBanner({ text }: { text: string }) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4 rounded-[20px] bg-surface p-4 md:p-8">
      {/* TODO: feuilles officielles à placer dans public/images/decor/ */}
      <Image
        src="/images/decor/fleurs-roses.jpeg"
        alt="roses"
        width={150}
        height={150}
        className="h-auto w-16 shrink-0 md:w-36"
      />
      <p className="flex-1 -rotate-[8deg] text-balance text-center text-xl font-bold md:text-3xl">
        {text}
      </p>
      <Image
        src="/images/decor/fleurs-lys.jpeg"
        alt="lys"
        width={150}
        height={150}
        className="h-auto w-16 shrink-0 md:w-36"
      />
    </div>
  );
}