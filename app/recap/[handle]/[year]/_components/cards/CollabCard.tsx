import type { CollabStory } from "@/src/domain/recap/models/Story";

export default function CollabCard({ story }: { story: CollabStory }) {
  const { reviewStats, topCollaborators } = story;

  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-[11px] text-gh-muted">Reviews given</div>
          <div className="mt-1 text-2xl font-semibold">{reviewStats.given}</div>
        </div>
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-[11px] text-gh-muted">Approvals</div>
          <div className="mt-1 text-2xl font-semibold">{reviewStats.approved}</div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border bg-gh-bg2 p-4">
        <div className="text-xs font-medium">Top collaborators</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {topCollaborators.map((c) => (
            <div
              key={c.handle}
              className="inline-flex items-center gap-2 rounded-full border bg-gh-bg px-3 py-1"
            >
              <span className="text-xs font-medium">{c.handle}</span>
              <span className="text-[10px] text-gh-muted">{c.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl border bg-gh-bg2 p-4">
        <div className="text-[11px] text-gh-muted">Recap note</div>
        <div className="mt-1 text-sm">
          Collaboration is estimated from review and co-activity signals across your year.
        </div>
      </div>
    </section>
  );
}
