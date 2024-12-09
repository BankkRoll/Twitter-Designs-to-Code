import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "sherlock-hero",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: "ui/sherlock-hero.tsx",
        content: "./registry/ui/sherlock-hero.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "handwritten-hero",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: "ui/handwritten-hero.tsx",
        content: "./registry/ui/handwritten-hero.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "flowpay-hero",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: "ui/flowpay-hero.tsx",
        content: "./registry/ui/flowpay-hero.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
];
