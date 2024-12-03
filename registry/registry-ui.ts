import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "sherlock-hero",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "ui/sherlock-hero.tsx",
        content: "./registry/ui/sherlock-hero.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
];
