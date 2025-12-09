import type { QualityStory } from "@/src/domain/recap/models/Story";

function SignalBar({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: "accent" | "success" | "warning";
}) {
  const pct = Math.round(value * 100);

  const colorClass =
    accent === "success"
      ? "bg-gh-success"
      : accent === "warning"
      ? "bg-gh-warning"
      : "bg-gh-accent";

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm">{label}</div>
        <div className="text-[11px] text-gh-muted">{pct}%</div>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gh-bg">
        <div className={`h-full ${colorClass}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function QualityCard({ story }: { story: QualityStory }) {
  const { testRatio, refactorRatio, docsRatio } = story.signals;

  return (
    <section className="rounded-2xl border bg-gh-bg p-6">
      <h3 className="text-xl font-semibold">{story.title}</h3>
      {story.subtitle && (
        <p className="mt-1 text-sm text-gh-muted">{story.subtitle}</p>
      )}

      <div className="mt-6 rounded-xl border bg-gh-bg2 p-5 space-y-4">
        <SignalBar label="Testing signals" value={testRatio} accent="success" />
        <SignalBar label="Refactoring signals" value={refactorRatio} accent="accent" />
        <SignalBar label="Documentation signals" value={docsRatio} accent="warning" />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-[11px] text-gh-muted">Testing</div>
          <div className="mt-1 text-sm">
            Higher signals suggest more verification work in your year.
          </div>
        </div>
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-[11px] text-gh-muted">Refactor</div>
          <div className="mt-1 text-sm">
            Indicates investment in long-term maintainability.
          </div>
        </div>
        <div className="rounded-xl border bg-gh-bg2 p-4">
          <div className="text-[11px] text-gh-muted">Docs</div>
          <div className="mt-1 text-sm">
            Signals from README/docs and related changes.
          </div>
        </div>
      </div>
    </section>
  );
}
