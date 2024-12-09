"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowDown, CheckIcon, ClipboardIcon, Terminal } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { CodeBlockWrapper } from "@/components/ui/code-block-wrapper";
import { CopyNpmCommandButton } from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Tweet } from "react-tweet";
import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";
import { toast } from "sonner";
import { useTheme } from "next-themes";

interface InstallCommands {
  npm: string;
  pnpm: string;
  yarn: string;
  bun: string;
}

interface CodeExample {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  dependencies?: string[];
  inspiration: string;
  shoutout: string;
  registryCommands?: InstallCommands;
  installCommands?: InstallCommands;
  shadcnCommands?: InstallCommands;
  component: React.ElementType | null;
  code: string;
}

interface CodePreviewProps {
  examples: CodeExample[];
}

export function CodePreview({ examples }: CodePreviewProps) {
  const [formattedCodes, setFormattedCodes] = useState<Record<number, string>>(
    {},
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const formatAllCodes = async () => {
      const newFormattedCodes: Record<number, string> = {};
      for (const example of examples) {
        if (example.code) {
          const formatted = await codeToHtml(example.code, {
            lang: "typescript",
            theme: theme === "dark" ? "github-dark" : "github-light",
          });
          newFormattedCodes[example.id] = formatted;
        }
      }
      setFormattedCodes(newFormattedCodes);
    };

    formatAllCodes();
  }, [examples, theme]);

  const copyToClipboard = (id: string, title: string, code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => toast.success(`Copied ${title} code to clipboard!`))
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1000);
      })
      .catch((err) =>
        toast.error(`Failed to copy ${title} code to clipboard`, err),
      );
  };

  const extractTweetId = (url: string): string => {
    const match = url.match(/status\/(\d+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="w-full h-full border">
      {examples.map((example) => (
        <div key={example.id} className="mb-6">
          <Tabs defaultValue="preview">
            <div className="flex flex-col justify-between items-center gap-2 p-4 border-b md:flex-row">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="install">Installation</TabsTrigger>
              </TabsList>
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                {example.title}
              </h2>
            </div>

            <TabsContent value="preview">
              <div className="p-4">
                {example.component ? (
                  <example.component />
                ) : (
                  <p className="text-muted-foreground text-center">
                    No preview available.
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="install">
              <div className="space-y-10">
                <div className="p-6">
                  <div className="w-full flex flex-col gap-6 lg:flex-row">
                    <div className="w-full lg:w-3/5">
                      <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-2xl font-bold">
                          {example.title}
                          <Badge>{example.category}</Badge>
                        </h2>
                        <p className="text-muted-foreground">
                          {example.description}
                        </p>
                      </div>
                      {example.dependencies && (
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold">
                            Dependencies
                          </h3>
                          <p className="text-muted-foreground mb-2 text-sm">
                            These libraries are required to use this component:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {example.dependencies.map((dep) => (
                              <Badge key={dep}>{dep}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {example.registryCommands?.npm && (
                        <div className="max-w-2xl mt-4 space-y-4">
                          <h3 className="text-lg font-semibold">
                            Install {example.title}
                          </h3>
                          <Alert>
                            <Terminal className="w-4 h-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                              We use the exact same installation process and cli
                              from{" "}
                              <a
                                href="https://ui.shadcn.com/docs/installation"
                                target="_blank"
                                rel="noreferrer"
                                className={cn(
                                  buttonVariants({
                                    variant: "linkHover1",
                                    className: "font-bold w-[4.5rem]",
                                  }),
                                )}
                              >
                                shadcn/ui
                              </a>
                              .
                            </AlertDescription>
                          </Alert>
                          <div className="flex items-center gap-2">
                            <p className="text-muted-foreground text-sm">
                              Install directly from our registry using the
                              shadcn/ui cli:
                            </p>
                          </div>
                          <div className="max-w-2xl relative flex items-center">
                            <Input
                              readOnly
                              value={example.registryCommands.npm}
                              className="bg-muted/20 border-input py-6 pr-8 font-mono text-sm border focus-visible:border-input"
                            />
                            <CopyNpmCommandButton
                              className="absolute right-2"
                              commands={{
                                __npmCommand__: example.registryCommands?.npm!,
                                __pnpmCommand__:
                                  example.registryCommands?.pnpm!,
                                __yarnCommand__:
                                  example.registryCommands?.yarn!,
                                __bunCommand__: example.registryCommands?.bun!,
                              }}
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-muted-foreground text-sm mb-6">
                              The component will be in your components/ui folder
                              under for{" "}
                              <strong className="text-primary">
                                components/ui/{example.slug}.tsx
                              </strong>
                            </p>
                          </div>
                          <Link
                            href="#manual-installation"
                            className="text-muted-foreground text-sm italic flex flex-col items-center"
                          >
                            <span>Want to install manually? Scroll down</span>
                            <ArrowDown className="w-4 h-4 animate-bounce mt-2" />
                          </Link>
                        </div>
                      )}
                    </div>

                    <div className="w-full lg:w-2/5">
                      {example.inspiration && (
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold">Inspiration</h3>
                          <Tweet id={extractTweetId(example.inspiration)} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div id="manual-installation" className="pt-6 border-t">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="manual-install">
                        <AccordionTrigger>
                          Manual Install {example.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          {example.shadcnCommands?.npm && (
                            <div className="mt-6">
                              <h3 className="text-lg font-semibold">
                                Add shadcn/ui Components
                              </h3>
                              <p className="text-muted-foreground mb-2 text-sm">
                                Use the following npm command to add the Shadcn
                                component(s):
                              </p>
                              <div className="max-w-2xl relative flex items-center">
                                <Input
                                  readOnly
                                  value={example.shadcnCommands.npm}
                                  className="bg-muted/20 border-input py-6 pr-8 font-mono text-sm border focus-visible:border-input"
                                />
                                <CopyNpmCommandButton
                                  className="absolute right-2"
                                  commands={{
                                    __npmCommand__:
                                      example.shadcnCommands?.npm!,
                                    __pnpmCommand__:
                                      example.shadcnCommands?.pnpm!,
                                    __yarnCommand__:
                                      example.shadcnCommands?.yarn!,
                                    __bunCommand__:
                                      example.shadcnCommands?.bun!,
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {example.installCommands?.npm && (
                            <div className="mt-6">
                              <h3 className="text-lg font-semibold">
                                Install Packages
                              </h3>
                              <p className="text-muted-foreground mb-2 text-sm">
                                Use the following npm command to install
                                required dependencies:
                              </p>
                              <div className="max-w-2xl relative flex items-center">
                                <Input
                                  readOnly
                                  value={example.installCommands.npm}
                                  className="bg-muted/20 border-input py-6 pr-8 font-mono text-sm border focus-visible:border-input"
                                />
                                <CopyNpmCommandButton
                                  className="absolute right-2"
                                  commands={{
                                    __npmCommand__:
                                      example.installCommands?.npm!,
                                    __pnpmCommand__:
                                      example.installCommands?.pnpm!,
                                    __yarnCommand__:
                                      example.installCommands?.yarn!,
                                    __bunCommand__:
                                      example.installCommands?.bun!,
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          <div className="mt-6">
                            <h3 className="text-lg font-semibold">
                              Install {example.title}
                            </h3>
                            <p className="text-muted-foreground my-2 text-sm">
                              Copy and paste the {example.title} code directly
                              in your project:
                            </p>
                            <div className="relative">
                              <CodeBlockWrapper>
                                <div
                                  className="rounded-md border border-input shadow-sm transition-colors bg-muted/20 font-mono [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all overflow-scroll"
                                  dangerouslySetInnerHTML={{
                                    __html: formattedCodes[example.id] || "",
                                  }}
                                />
                              </CodeBlockWrapper>
                              <Button
                                className="absolute top-4 right-4"
                                size="icon"
                                variant="outline"
                                onClick={() =>
                                  copyToClipboard(
                                    `${example.id}-code`,
                                    example.title,
                                    example.code,
                                  )
                                }
                              >
                                {copiedId === `${example.id}-code` ? (
                                  <CheckIcon className="w-4 h-4" />
                                ) : (
                                  <ClipboardIcon className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ))}
    </div>
  );
}
