import { ReactNode } from "react";

type ScreenProps = {
  title: string;
  description: string;
  tag?: string;
  accent?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

export function Screen({
  title,
  description,
  tag,
  accent,
  footer,
  children,
}: ScreenProps) {
  return (
    <article className="flex w-[360px] flex-col gap-4">
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-ink-muted">
          <p className="font-medium uppercase tracking-[0.24em] text-xs text-primary/80">
            Avicure
          </p>
          {accent}
        </div>
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          {tag ? (
            <span className="rounded-[10px] bg-primary-soft/30 px-3 py-1 text-xs font-semibold text-primary-dark">
              {tag}
            </span>
          ) : null}
        </div>
        <p className="text-sm text-ink-muted">{description}</p>
      </header>

      <div className="phone-frame relative overflow-hidden">
        <div className="flex items-center justify-between pb-4 text-xs text-ink-muted">
          <span>09:41</span>
          <div className="flex items-center gap-1">
            <span className="inline-flex h-2.5 w-4 rounded-sm bg-primary" />
            <span className="inline-flex h-2.5 w-2 rounded-sm bg-primary" />
            <span className="inline-flex h-2.5 w-2 rounded-sm bg-primary" />
          </div>
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
        {footer ? <footer className="pt-4">{footer}</footer> : null}
      </div>
    </article>
  );
}
