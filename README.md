# Ryan Wynn Portfolio

Ryan Wynn's native-scrolling, extreme-sports portfolio. The production domain is
[ryanwynn.dev](https://ryanwynn.dev), and `docs/portfolio-brief.md` is the source of
truth for visual direction, copy, interaction, and acceptance criteria.

## Stack and requirements

- Astro 7.1.6 with semantic `.astro` components
- TypeScript 6.0.3 in Astro's strict configuration
- Custom CSS
- GSAP 3.15.0 with ScrollTrigger
- ESLint 10.8.0 and Prettier 3.9.6
- Node.js 22.22.3 or newer and npm

No client framework, component library, smooth-scroll package, or WebGL renderer is
used.

## Local setup

```sh
npm install
npm run astro -- dev --background
```

The development server must run in Astro's background mode. Manage it with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Commands

| Command                | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `npm run check`        | Run Astro and TypeScript diagnostics.           |
| `npm run lint`         | Lint Astro, TypeScript, and JavaScript source.  |
| `npm run format:check` | Verify repository formatting with Prettier.     |
| `npm run build`        | Create the static production build in `dist/`.  |
| `npm run preview`      | Preview the completed production build locally. |

## Project structure

```text
docs/portfolio-brief.md      Approved experience specification
public/assets/               Optimized production artwork
public/favicon.ico           Approved photographic favicon
src/components/              Shared contact, cloud, and bike components
src/components/scenes/       Freefall, hero, copy, cards, visor, About, footer
src/layouts/BaseLayout.astro Shared document shell and production metadata
src/pages/index.astro        Single-page scene composition
src/styles/global.css        Global tokens and foundations
```

## Experience architecture

The page order is the timed freefall entrance, hero/arrival, native-scroll copy
transition, the shared card-and-visor stage revealing the rock-face About scene,
and the footer racer. The six-card journey and visor transition intentionally share
one pinned ScrollTrigger timeline so forward and reverse scroll use the same state.

The contact navigation is one persistent DOM component that transforms between its
hero, compact, and footer positions. The scroll-guide bike and fine-pointer footer
cursor bike reuse the same artwork but have separate responsibilities; one shared
document state prevents them from appearing together. Timelines, observers,
listeners, timers, and animation-frame work are scoped and reverted during teardown
and development hot reload.

Hero cloud tracks use repeated copies and an exact linear translation distance for a
seamless loop. The freefall scene applies its timeline-zero state before the
first-paint gate opens. Time-based decorative motion pauses when hidden or offscreen,
and `prefers-reduced-motion` keeps content accessible with reduced or static motion.

## Assets and content

Production artwork is served from `public/assets/` as dimensioned WebP derivatives.
Do not edit the original source artwork or add local HEIC conversion files to the
repository. Preserve the current responsive crops, decorative `alt` treatment, and
non-draggable image behavior. Contact destinations and their new-tab security rules
are defined in `src/components/SocialContactNav.astro`: Email opens the visitor's mail
application, while GitHub, LinkedIn, Telegram, and WhatsApp open securely in a new tab.

## Verification

Before release, run every command in the table and `git diff --check`. Test at narrow
mobile, tablet, desktop, and ultrawide sizes. Let the four-second intro complete, then
scroll from top to bottom and back upward. Verify the card journey, visor reveal,
contact transformations, guide/cursor bike handoff, footer blink, keyboard focus,
reduced motion, layout stability, asset loading, and a clean browser console.

## Vercel deployment

Connect the Git repository to Vercel and use the detected Astro preset. The build
command is `npm run build`, the output directory is `dist`, and this project currently
requires no environment variables. Preview deployments should pass the full command
and browser verification before promotion. The configured site URL supplies canonical
and social metadata; `public/robots.txt` references the static sitemap. Add the custom
domain only after the production deployment is ready, then verify both the apex domain
and its preferred redirect.
