import type { ActivityStory } from "@/src/domain/recap/models/Story";

const MONTH_LABELS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

export default function ActivityCard({ story }: { story: ActivityStory }) {
  const max = Math.max(...story.monthlyIndex.map((m) => m.index), 1);

  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 rounded-xl border bg-gh-bg2 p-4">
        <div className="flex items-end gap-2">
          {story.monthlyIndex.map(({ month, index }) => {
            const heightPct = Math.round((index / max) * 100);
            const isPeak = month === story.peakMonth;
            const isRest = month === story.restMonth;

            return (
              <div key={month} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={[
                    "w-full rounded-md",
                    isPeak ? "bg-gh-accent" : isRest ? "bg-gh-border" : "bg-gh-success",
                  ].join(" ")}
                  style={{ height: `${Math.max(8, heightPct)}px` }}
                  title={`${MONTH_LABELS[month - 1]}: ${index}`}
                />
                <div
                  className={[
                    "text-[10px]",
                    isPeak ? "text-gh-accent" : isRest ? "text-gh-muted" : "text-gh-muted",
                  ].join(" ")}
                >
                  {MONTH_LABELS[month - 1] ?? month}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-[11px] text-gh-muted">Peak month</div>
          <div className="mt-1 text-lg font-semibold">
            {MONTH_LABELS[story.peakMonth - 1] ?? story.peakMonth}
          </div>
          <div className="mt-1 text-xs text-gh-muted">
            Your highest activity rhythm.
          </div>
        </div>
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-[11px] text-gh-muted">Rest month</div>
          <div className="mt-1 text-lg font-semibold">
            {MONTH_LABELS[story.restMonth - 1] ?? story.restMonth}
          </div>
          <div className="mt-1 text-xs text-gh-muted">
            The quiet stretch that made room for the next sprint.
          </div>
        </div>
      </div>
    </section>
  );
}
