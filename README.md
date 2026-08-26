# Cinematic Construction Experience

A premium, award-style scroll-driven interactive experience that tells the story of a building being constructed from an empty plot of land into a fully completed industrial building. 

As the user scrolls, the construction visually progresses through cross-fading cinematic images, bold typography, and smooth kinetic text transitions.

## ✨ Features

- **Scroll-Driven Storytelling**: The entire experience is tethered to the user's scroll position, creating a 1:1 tactile connection between scrolling and construction progress.
- **Cinematic Visuals**: Full-screen, edge-to-edge images with dynamic blur filters, scaling, and cross-fades powered by Framer Motion.
- **Interactive Progress Navigation**: A sticky vertical progress tracker on the left that allows users to instantly jump to any construction phase.
- **Smooth Scrolling**: Integrated with Lenis for a buttery-smooth scrolling experience on both desktop and mobile.
- **Premium Typography**: High-contrast, glowing display fonts (Oswald) paired with elegant body fonts (Inter) for an industrial, structural feel.

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/) (Scroll Animations & Web Animations API)
- [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or yarn install, pnpm install, bun install
```

Then, run the development server:

```bash
npm run dev
# or yarn dev, pnpm dev, bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗 Construction Stages

The timeline follows 7 distinct phases of construction:

1. **Site Prep**: Securing the site
2. **Excavation**: Clearing the ground
3. **Foundation**: Pouring concrete and reinforcing the base
4. **Columns**: Raising vertical supports
5. **Frame**: Assembling the structural skeleton
6. **Enclosure**: Sealing the exterior
7. **Handover**: The completed building

Data and timing for these stages can be modified in `src/data/constructionStages.ts`.
