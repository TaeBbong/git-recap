import type { DeveloperTypeStory } from "@/src/domain/recap/models/Story";

export default function DeveloperTypeCard({
  story,
}: {
  story: DeveloperTypeStory;
}) {
  const dt = story.developerType;

  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 rounded-2xl border bg-gh-bg2 p-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-gh-bg px-3 py-1">
          <span className="text-[10px] text-gh-muted">Type</span>
          <span className="text-xs font-semibold text-white">{dt.label}</span>
        </div>
        <div className="mt-3 text-lg font-semibold">{dt.tagline}</div>

        <ul className="mt-4 space-y-2">
          {dt.reasons.map((r, i) => (
            <li key={i} className="text-sm text-gh-muted">
              • {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-xs font-medium">Keywords</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {story.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border bg-gh-bg px-3 py-1 text-[11px] text-gh-muted"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-xs font-medium">Badges</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {story.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border bg-gh-bg px-3 py-1 text-[11px] text-gh-muted"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border bg-gh-bg2 p-4">
        <div className="text-[11px] text-gh-muted">Interpretation</div>
        <div className="mt-1 text-sm">
          This is a playful label grounded in your year’s activity patterns.
        </div>
      </div>
    </section>
  );
}
