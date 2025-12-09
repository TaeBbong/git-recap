"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RecapEntryPage() {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  function submit() {
    const h = handle.trim();
    if (!h) return;
    router.push(`/recap/${encodeURIComponent(h)}/${year}`);
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border bg-gh-bg2 p-8 shadow-soft">
        <h2 className="text-2xl font-semibold">Start your recap</h2>
        <p className="mt-2 text-gh-muted">
          Enter your GitHub handle and choose a year.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_140px]">
          <input
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="github handle"
            className="h-11 rounded-xl border bg-gh-bg px-3 text-sm outline-none focus:border-gh-accent"
          />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            min={2010}
            max={2100}
            className="h-11 rounded-xl border bg-gh-bg px-3 text-sm outline-none focus:border-gh-accent"
          />
        </div>

        <button
          onClick={submit}
          className="mt-6 inline-flex items-center rounded-xl bg-gh-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Generate recap
        </button>
      </div>
    </main>
  );
}
