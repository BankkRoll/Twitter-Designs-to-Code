# Tweet to Code

## 📝 Overview

Tweet to Code is an design-to-code registry that I transform tweet designs i find into ready-to-use, customizable React components. Seamlessly integrate any of these designs into your projects with just a few commands.

## ✨ Features

- 🎨 Curated UI component designs from tweet designers
- 🔧 Fully compatible with shadcn/ui ecosystem
- 💻 Responsive and accessible components
- 🌓 Built-in light/dark theme support
- 🚀 Easy, CLI-based installation

## 🛠 Technologies

<div style="display: flex; gap: 10px; align-items: center;">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Shadcn/UI-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white" alt="Shadcn/UI" />
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Lucide%20Icons-222222?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide Icons" />
</div>

## 🚀 Quick Start

We use the exact same installation process and cli from:
[shadcn/ui](https://ui.shadcn.com/docs/installation)

### Installation

Install components directly from our registry:

```bash
# Generic component installation
npx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/component-name.json"

# Example: Sherlock Hero Component
npx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/sherlock-hero.json"
```

### Usage Example

```tsx
import { SherlockHero } from "@/components/ui/sherlock-hero"

export default function HomePage() {
  return <SherlockHero />
}
```

## 🤝 Design Attribution

All designs are attributed to their original creators.

## 🚨 Disclaimer

If you are a design owner and wish to have a design removed, please:
- [Open an Issue](https://github.com/BankkRoll/tweet-to-code/issues)
- Contact via [X (Twitter)](https://x.com/bankkroll_eth)

## 📄 License

- Repository: [MIT License](LICENSE.md)
- Design Ownership: Remains with original creators

---

**Built with ❤️ by Bankk**