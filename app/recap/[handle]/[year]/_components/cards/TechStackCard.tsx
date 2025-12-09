import type { TechStackStory } from "@/src/domain/recap/models/Story";

function StackList({
  title,
  items,
}: {
  title: string;
  items: Array<{ name: string; score: number }>;
}) {
  return (
    <div className="rounded-xl border bg-gh-bg2 p-4">
      <div className="text-xs font-medium">{title}</div>
      <div className="mt-3 space-y-3">
        {items.map((i) => {
          const pct = Math.round(i.score * 100);
          return (
            <div key={`${title}-${i.name}`}>
              <div className="flex items-center justify-between">
                <div className="text-sm">{i.name}</div>
                <div className="text-[11px] text-gh-muted">{pct}%</div>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gh-bg">
                <div
                  className="h-full bg-gh-accent"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStackCard({ story }: { story: TechStackStory }) {
  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        <StackList title="Primary Stack" items={story.primary} />
        <StackList title="First Half" items={story.firstHalf} />
        <StackList title="Second Half" items={story.secondHalf} />
      </div>

      <div className="mt-5 rounded-xl border bg-gh-bg2 p-4">
        <div className="text-[11px] text-gh-muted">Interpretation</div>
        <div className="mt-1 text-sm">
          This card reflects **relative usage signals** across your repos and activity.
          It’s a directional view of your year’s stack, not a perfect time log.
        </div>
      </div>
    </section>
  );
}
