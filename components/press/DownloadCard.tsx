import type { ComponentPropsWithoutRef } from "react";

const cardClasses =
  "group flex h-full flex-col justify-between gap-6 rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card transition hover:border-white/25";

const linkClasses =
  "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition group-hover:border-white/40 group-hover:text-white";

type DownloadCardProps = {
  title: string;
  description: string;
  href: string;
  fileType?: string;
} & ComponentPropsWithoutRef<"a">;

export default function DownloadCard({ title, description, href, fileType = "SVG", ...props }: DownloadCardProps) {
  return (
    <div className={cardClasses}>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">{fileType}</p>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-body-sm text-slate-200">{description}</p>
      </div>
      <a
        className={linkClasses}
        href={href}
        download
        aria-label={`Download ${title}`}
        {...props}
      >
        Download
      </a>
    </div>
  );
}
