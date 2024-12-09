"use client";

import { Hero } from "@/components/layout/hero";
import { codeExamples } from "@/lib/component-config";

export default function FreeComponentsIndex() {
  return (
    <main className="container mx-auto max-w-7xl min-h-screen max-sm:p-0">
      <Hero items={codeExamples} />
    </main>
  );
}
