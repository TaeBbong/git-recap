"use client";

import { useRecap } from "@/src/application/recap/useRecap";
import StoryDeck from "./_components/StoryDeck";

export default function RecapPage({
  params,
}: {
  params: { handle: string; year: string };
}) {
  const handle = decodeURIComponent(params.handle);
  const year = Number(params.year);

  const { data, isLoading, isError } = useRecap(handle, year);

  if (isLoading) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border bg-gh-bg2 p-8">
          <p className="text-gh-muted">Loading your recap...</p>
        </div>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border bg-gh-bg2 p-8">
          <p className="text-gh-danger">
            Failed to load recap. Try again.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border bg-gh-bg2" />
        <div>
          <div className="text-sm text-gh-muted">{year}</div>
          <div className="text-lg font-semibold">{data.user.handle}</div>
        </div>
      </div>

      <StoryDeck recap={data} />
    </main>
  );
}
