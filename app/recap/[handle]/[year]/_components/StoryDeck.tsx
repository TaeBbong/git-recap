"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import type { Recap } from "@/src/domain/recap/models/Recap";
import StoryCard from "./StoryCard";

export default function StoryDeck({ recap }: { recap: Recap }) {
  const stories = recap.stories;
  const [index, setIndex] = useState(0);

  const current = stories[index];
  const progress = useMemo(
    () => Math.round(((index + 1) / stories.length) * 100),
    [index, stories.length]
  );

  function next() {
    setIndex((i) => Math.min(i + 1, stories.length - 1));
  }
  function prev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  return (
    <div className="rounded-2xl border bg-gh-bg2 p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xs text-gh-muted">
          {index + 1} / {stories.length}
        </div>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-gh-bg">
          <div
            className="h-full bg-gh-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="relative min-h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.type}-${index}`}
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.22 }}
          >
            <StoryCard story={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={prev}
          disabled={index === 0}
          className="rounded-xl border bg-gh-bg px-4 py-2 text-xs disabled:opacity-40"
        >
          Prev
        </button>
        <button
          onClick={next}
          disabled={index === stories.length - 1}
          className="rounded-xl bg-gh-accent px-4 py-2 text-xs text-white disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
