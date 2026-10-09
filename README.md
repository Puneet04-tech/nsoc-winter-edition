# NSoC Winter Edition

Nexus Spring of Code (NSoC) - Winter Edition 2026 official landing page.

## 🚀 Features

- Modern, brutalist-inspired UI with 3D cards, animated aurora background, and snowflake effects
- Built with Next.js 15, React 19, and TypeScript
- Styled with Tailwind CSS and enhanced with Framer Motion, GSAP, and Lucide icons
- Theme switching (light/dark) via `next-themes`
- Interactive components: accordion, dialogs, dropdown menus, tabs, tooltips, tables, and charts
- Form handling with React Hook Form and Zod validation
- Data visualization with Recharts
- Animated background with aurora glow and snowfall
- Optimized for performance and accessibility

## 🛠️ Technologies Used

**Framework & Language**
- [Next.js 15](https://nextjs.org/) (React 19)
- [TypeScript](https://www.typescriptlang.org/)

**Styling**
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/) (via Radix UI primitives)

**Animation & Interaction**
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Lucide Icons](https://lucide.dev/)

**State & Forms**
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Zustand](https://zustand-demo.pmndrs/) (state management)

**Data & Charts**
- [React Table](https://tanstack.com/table/v8)
- [Recharts](https://recharts.org/)
- [Axios](https://axios-http.com/)

**Theming**
- [next-themes](https://github.com/pacocoursey/next-themes)

**Utilities**
- [Class Variance Authority](https://cva.style/)
- [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge)
- [Tailwind CSS Animate](https://www.npmjs.com/package/tailwindcss-animate)
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- [Sonner](https://sonner.emilkowal.ski/) (toast notifications)

## 🏃‍♂️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Puneet04-tech/nsoc-winter-edition.git
   cd nsoc-winter-edition
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `.next` folder.

## 🚀 Deployment

This project is configured for deployment on [Netlify](https://www.netlify.com/).

### Netlify Settings (if configuring manually)
- **Build command**: `npm install --legacy-peer-deps && npm run build`
- **Publish directory**: `.next`

> The `netlify.toml` file in the repository already contains these settings.

### Deploying to Netlify
1. Push your code to GitHub (or connect your GitLab/Bitbucket repo).
2. In Netlify, select "New site from Git" and connect your repository.
3. Netlify will automatically detect the Next.js project and use the build settings from `netlify.toml`.
4. Click "Deploy site".

## 📂 Project Structure

```
nsoc-winter-edition/
├── src/
│   ├── app/                 # Next.js app routing (layouts, pages)
│   ├── components/          # Reusable UI components
│   ├── data/                # Static data (e.g., for tables/charts)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── store/               # Zustand stores
│   └── types/               # TypeScript type declarations
├── public/                  # Static assets (favicon, images, etc.)
├── .gitignore               # Ignores node_modules, .next, dist, etc.
├── netlify.toml             # Netlify build configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── README.md                # This file
└── tsconfig.json            # TypeScript configuration
```

## 📄 License

This project is private and part of the Nexus Spring of Code (NSoC) Winter Edition 2026.

---
Built with ❄️ for NSoC Winter Edition 2026.