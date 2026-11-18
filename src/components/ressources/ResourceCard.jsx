import Image from "next/image";

export default function ResourceCard({ label, title, description, duration, image }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-800 bg-white">
      <div className="relative h-36 w-full sm:h-40">
        <Image src={image} alt={title} fill sizes="50vw" className="object-cover" />
      </div>

      <div className="flex gap-4 px-4 pb-4">
        <div className="flex w-24 shrink-0 flex-col items-start justify-between">
          <span className="-mt-4 rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-800">
            {label}
          </span>
          <span className="mt-6 pl-3 text-xs font-bold text-brand-800">{duration}</span>
        </div>

        <div className="pt-2">
          <h3 className="text-base font-bold leading-tight text-brand-800">{title}</h3>
          <p className="mt-1 text-sm leading-snug text-brand-800">{description}</p>
        </div>
      </div>
    </article>
  );
}