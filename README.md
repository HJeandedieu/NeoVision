# NeoVision

Next.js App Router and TypeScript starter for the NeoVision landing page.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck` and `npm run build` to check changes.

## Where to work

- `src/app/globals.css` owns the design tokens, semantic typography, theme scopes, layout utilities, and shared control states.
- `src/app/layout.tsx` loads the global stylesheet and bundled DM Sans variable font.
- `src/app/page.tsx` assembles the landing page.
- `src/components/layout` contains header and footer placeholders.
- `src/components/sections` contains one placeholder per section.
- `public/images` contains the prepared photography and avatars. Reference these with URLs starting at `/images/`.

Use a semantic H1 for the page title, H2 for sections, and H3 for items within sections. The global styles own headline size, case, weight, spacing, and mobile line height. Use `data-theme="light"` for the header and hero. Use local CSS Modules for section-specific layout. The shared layout breakpoint is 48rem. Use 64rem as the desktop threshold for section layouts.

The scaffold includes anchor navigation and shared CSS states. Implement search, the mobile menu, service carousel, article tabs, dialogs, video playback, and viewport observation in the relevant sections as they are built. Apply `data-reveal="visible"` when the observer triggers a reveal. Content is visible by default.

