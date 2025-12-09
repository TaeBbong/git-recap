import type { NumbersStory } from "@/src/domain/recap/models/Story";

export default function NumbersCard({ story }: { story: NumbersStory }) {
  const t = story.totals;

  const items = [
    ["Commits", t.commits],
    ["Contributions", t.contributions],
    ["PRs Opened", t.prsOpened],
    ["PRs Merged", t.prsMerged],
    ["Issues Opened", t.issuesOpened],
    ["Issues Closed", t.issuesClosed],
    ["Reviews", t.reviews],
    ["Stars Gained", t.starsGained],
  ] as const;

  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border bg-gh-bg2 p-3"
          >
            <div className="text-[11px] text-gh-muted">{label}</div>
            <div className="mt-1 text-lg font-semibold">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
