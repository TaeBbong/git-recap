import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border bg-gh-bg2 p-8 shadow-soft">
        <h1 className="text-3xl font-semibold tracking-tight">
          GitHub Year Recap
        </h1>
        <p className="mt-3 text-gh-muted">
          Your year of code, reimagined like a music recap.
        </p>

        <div className="mt-8">
          <Link
            href="/recap"
            className="inline-flex items-center rounded-xl bg-gh-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Create your recap
          </Link>
        </div>
      </div>
    </main>
  );
}
