"use client";

import { CodePreview } from "@/components/code-preview";
import { Hero } from "@/components/layout/hero";
import { codeExamples } from "@/lib/component-config";

export default function FreeComponentsIndex() {
  return (
    <main className="container mx-auto max-w-7xl min-h-screen max-sm:p-0">
      <Hero />
      <div className="grid grid-cols-1 gap-6">
        {codeExamples.map((example) => (
          <CodePreview key={example.id} examples={[example]} />
        ))}
      </div>
    </main>
  );
}
