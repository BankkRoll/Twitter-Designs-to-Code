"use client";

import { BentoTweetGrid } from "@/components/sections/tweets";
import { Hero } from "@/components/sections/hero";
import { codeExamples } from "@/lib/component-config";

export default function FreeComponentsIndex() {
  return (
    <main className="container justify-center mx-auto max-w-7xl min-h-screen max-sm:p-0">
      <Hero items={codeExamples} />
      <BentoTweetGrid />
    </main>
  );
}
