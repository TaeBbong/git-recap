import type { StarsStory } from "@/src/domain/recap/models/Story";

export default function StarsCard({ story }: { story: StarsStory }) {
  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border bg-gh-bg2 p-5">
          <div className="text-[11px] text-gh-muted">Stars gained</div>
          <div className="mt-1 text-3xl font-semibold">{story.starsGained}</div>
          <div className="mt-1 text-xs text-gh-muted">
            Community appreciation across the year.
          </div>
        </div>

        <div className="rounded-xl border bg-gh-bg2 p-5">
          <div className="text-[11px] text-gh-muted">Most loved repo</div>
          <div className="mt-1 text-sm font-medium">
            {story.mostLovedRepo.repo}
          </div>
          <div className="mt-2 inline-flex items-center rounded-lg border bg-gh-bg px-2 py-1 text-[11px] text-gh-muted">
            ★ {story.mostLovedRepo.stars}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border bg-gh-bg2 p-4">
        <div className="text-[11px] text-gh-muted">Recap note</div>
        <div className="mt-1 text-sm">
          Star deltas can be approximated if historical star timelines aren’t available.
        </div>
      </div>
    </section>
  );
}
