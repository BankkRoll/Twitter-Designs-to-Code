// pages/preview/[slug].tsx

import { useEffect, useState } from "react";

import { CodePreview } from "@/components/ui/code-preview";
import { Loader } from "lucide-react";
import { codeExamples } from "@/lib/component-config";
import { useRouter } from "next/router";

export default function PreviewPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [componentExample, setComponentExample] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const example = codeExamples.find((example) => example.slug === slug);
      setComponentExample(example);
      setIsLoading(false);
    }
  }, [slug]);

  return (
    <main className="py-12 min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin w-10 h-10 text-primary" />
        </div>
      ) : !componentExample ? (
        <p className="text-muted-foreground text-center">
          Component not found.
        </p>
      ) : (
        <CodePreview key={componentExample} examples={[componentExample]} />
      )}
    </main>
  );
}
