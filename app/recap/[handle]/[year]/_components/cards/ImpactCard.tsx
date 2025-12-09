import type { ImpactStory } from "@/src/domain/recap/models/Story";

export default function ImpactCard({ story }: { story: ImpactStory }) {
  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 space-y-3">
        {story.topPRs.map((pr, idx) => {
          const pct = Math.round(pr.impactScore * 100);
          return (
            <div
              key={`${pr.repo}-${idx}`}
              className="rounded-xl border bg-gh-bg2 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] text-gh-muted">{pr.repo}</div>
                  <div className="mt-1 text-sm font-medium">{pr.title}</div>
                </div>
                <div className="shrink-0 rounded-lg border bg-gh-bg px-2 py-1 text-[10px] text-gh-muted">
                  Impact {pct}%
                </div>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gh-bg">
                <div
                  className="h-full bg-gh-success"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <p className="mt-3 text-xs text-gh-muted">{pr.summary}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border bg-gh-bg2 p-4">
        <div className="text-[11px] text-gh-muted">How this is picked</div>
        <div className="mt-1 text-sm">
          Ranked by a lightweight impact score (scale, discussion signals, and flow relevance),
          then summarized for a recap-friendly story.
        </div>
      </div>
    </section>
  );
}
