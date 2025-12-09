import type { ProjectsStory } from "@/src/domain/recap/models/Story";

export default function ProjectsCard({ story }: { story: ProjectsStory }) {
  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 space-y-3">
        {story.projects.map((p) => {
          const pct = Math.round(p.focusScore * 100);
          return (
            <div
              key={p.repo}
              className="rounded-xl border bg-gh-bg2 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">{p.repo}</div>
                <div className="text-xs text-gh-muted">
                  {p.activityDays} days · ★ {p.stars}
                </div>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gh-bg">
                <div
                  className="h-full bg-gh-success"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-1 text-[11px] text-gh-muted">
                Project Focus Score {pct}%
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
