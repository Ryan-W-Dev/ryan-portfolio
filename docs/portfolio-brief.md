# Ryan Wynn — Extreme Sports Web Portfolio Brief

Status: Approved production visual direction

Purpose: Source of truth for portfolio design and implementation

Last updated: 2 August 2026

## 1. Core Direction

The website itself is the showcase. It is one continuous, native-scrolling extreme-sports experience rather than a collection of portfolio sections.

Do not add a project gallery, project case studies, mock projects, a skills grid, a service section, an employment timeline, testimonials, awards, a résumé download, source-code promotion, location, availability, or lengthy career copy.

The final site must feel authored, specific to Ryan, responsive, technically controlled, and visually premium.

## 2. Approved Copy

Hero:

> RYAN WYNN
>
> Web Developer

About:

> I like my sports extreme and my websites anything but ordinary.

Card sequence:

1. **FREEFALL** — Commit to the drop.
2. **AIRTIME** — Make the impossible feel weightless.
3. **LINE** — Choose it. Build it. Send it.
4. **GRIP** — Precision over panic.
5. **FLOW** — Every move leads to the next.
6. **SUMMIT** — Finish higher than you started.

Do not extend or rewrite this copy. Do not add supporting hero copy, a contact headline, a biography paragraph, decorative slogans, filler text, invented achievements, or marketing claims.

## 3. Contact Details

Contact methods appear as one persistent component that transforms between the hero, compact navigation state, and footer state.

- Email: mailto:ryan.james.wynn@gmail.com
- GitHub: https://github.com/Ryan-W-Dev
- LinkedIn: https://www.linkedin.com/in/ryan-wynn-01a784403/
- Telegram: https://t.me/ryanwynn4
- WhatsApp: https://wa.me/971508114541

All five contact methods are interactive. External profile and messaging links open in a new tab; Email uses the visitor's mail application. The interface label is exactly “WhatsApp”.

Every icon must retain a clear accessible name and visible keyboard focus treatment throughout the transformation.

## 4. Visual System

The approved production direction is a bespoke vintage extreme-sports comic and screen-print system.

### Palette

- Very dark navy ink
- Saturated cobalt blue
- Burnt orange
- Warm cream
- Vivid red
- Small yellow accents

### Typography

- Ryan’s name and card titles use large, tightly composed condensed display typography.
- Display lettering uses cream fill, dark ink edges, and controlled red offset shadows.
- Supporting text remains highly legible and concise.
- Do not use generic startup typography, novelty comic fonts, excessive rounded UI, or pill-shaped containers.

### Illustration and texture

- Use bold ink contours, flat colour fields, strong crop, screen-print texture, restrained halftone, and subtle paper grain.
- Texture supports depth and material character; it must not reduce text or control legibility.
- Avoid generic photography, glassmorphism, neon gradients, glowing blobs, floating orbs, particle fields, random 3D objects, bento grids, fake terminals, and stock startup illustrations.
- Do not copy another portfolio’s layouts, branding, assets, or code.

### Asset direction

The four supplied concept artworks are the primary art-direction sources. Do not modify the original Desktop files. Production assets are optimized derivatives or newly generated artwork based on the approved palette and illustration character.

- The freefall environment contains no person.
- The hero landscape contains no person, rider, text, or logo.
- Each of the six cards uses a distinct artwork assignment.
- The footer racer uses Ryan's supplied comic portrait as the identity reference. Only the visible face is replaced; the existing helmet, equipment, pose, crop, composition, lighting, and comic treatment remain intact.
- The footer face must remain recognisable as Ryan, with both eyes clearly visible and no goggles, visor glass, sunglasses, face shield, or dark eye covering.
- Do not repeat artwork unless the reuse is an intentional visual motif.
- Do not add visible brand marks or unapproved logos to new artwork.

## 5. Extreme-Sports Roles

Skydiving defines the entry sequence, altitude, central vanishing point, and sustained speed.

Freestyle motocross defines the hero-to-cards momentum, airtime geometry, card imagery, suspension language, and the small scroll-bound dirt-bike guide.

Rock climbing defines the visor destination, route line, anchors, rock contours, and About composition.

Do not use all three sports indiscriminately in every scene. Each sport has a clear structural role.

## 6. Entry Sequence — Four-Second Freefall

Every fresh entry or reload runs the complete four-second sequence.

### Camera and motion

- The viewpoint points straight down and remains completely stationary.
- The camera root has no translation, rotation, scale, skew, or compensation tween.
- The central vanishing point remains aligned to the exact viewport centre from the first visible frame.
- A person-free cobalt, cream, and orange freefall environment moves through independent far-terrain, mid-terrain, near-terrain, cloud, and speed-stroke passes.
- The passes expand from one shared centre and recycle while visually masked by opacity.
- Extreme-speed motion begins on the first visible frame and continues at full speed through the hero handoff.
- The sequence lasts exactly four seconds. There is no skip control and no user input requirement.

### First paint and handoff

- Critical artwork is decoded before the first-paint visibility gate opens.
- All GSAP time-zero states are applied before `data-sequence-ready` reveals the world.
- From exactly 3.35 seconds, a central circular mask expands while the freefall continues at full speed outside it. The hero landscape and Ryan's name resolve inside the opening.
- The expanding field becomes the hero and never shrinks into a decorative circle behind the name. There is no blank frame, hard cut, or opacity-only handoff.
- The hero name remains visually continuous into the completed hero.
- Asset failure must not prevent the timed sequence from completing.
- Page scrolling is restored cleanly when the intro completes.

### Lifecycle

- Pause the sequence while the document is hidden and resume it without restarting.
- Revert the timeline, inline styles, listeners, visibility state, and scroll lock on teardown and development hot reload.
- Reduced-motion users receive the same timed structure with substantially reduced depth expansion.

## 7. Scene Structure

The page uses semantic Astro components and native vertical scrolling.

### Scene 01 — Hero / Arrival

- Full-bleed cobalt-and-orange desert artwork.
- Giant centred “RYAN WYNN” title and the exact “Web Developer” subtitle.
- Strong cream lettering, dark ink edge, and red print-offset shadow.
- Separate far, middle, and near cream cloud strips drift laterally at different speeds.
- Every cloud strip contains at least two identical copies and travels linearly by exactly one copy width, producing a seamless loop with no gap, seam, jump, reversal, or background drift over extended viewing.
- The background image itself does not move.
- Cloud animation pauses when the hero is outside the viewport, the tab is hidden, or reduced motion is requested.
- The persistent contact component begins as a floating five-icon panel over the lower-right hero area.

### Scene 02 — Temporary Copy Transition

- This native-scroll scene appears immediately after the hero and before the cards.
- Its only copy is exactly: `PLACEHOLDER TEXT — FINAL COPY TO BE CONFIRMED.`
- The copy enters from below, remains readable near the centre, and fades as it approaches the top. The movement is tied to scroll and reverses precisely.
- Desert, sky, cloud, and route-line cues continue the hero composition into the card stage. Do not restore the flat Airtime placeholder scene.

### Scene 03 — Scroll-Controlled Card Track

- Six large illustrated cards travel from right to left in response to native vertical scrolling.
- A single GSAP timeline with ScrollTrigger pins the shared stage only while the sequence and visor transition are active.
- Downward scrolling advances the cards; upward scrolling reverses them precisely.
- Travel distance is calculated from rendered card and viewport geometry and recalculated on resize.
- Part of the next card remains visible.
- The cards do not auto-advance, drag, loop, respond to arrow keys, or expose previous/next controls.
- Each card contains one distinct optimized illustration, its number, approved title, and approved line.
- The GRIP card uses the supplied rock-climbing direction and must not show motocross repair, gloves, or mechanical work.
- Card artwork is non-draggable and does not capture pointer input.
- The final SUMMIT card settles briefly before the visor begins.

### Scene 03 → Scene 04 — Helmet-Visor Transition

- The card sequence and visor share one pinned stage and one reversible ScrollTrigger timeline.
- Preserve the existing timeline labels: final-card settle, visor handoff, helmet form, visor lock, pass-through, and rock-face resolve.
- The final card aligns centrally, card typography leaves deliberately, and dark helmet geometry forms.
- The visor remains wider than tall at every viewport, including portrait mobile sizes.
- The shell and rim may extend beyond narrow viewport edges.
- The visor opening spatially reveals the rock-climbing scene.
- About copy remains hidden until enough of the opening exists to reveal it cleanly.
- Card and About typography must not overlap in an accidental or clipped state.
- Reverse scrolling restores every layer in the exact opposite order.
- Only vertical scroll controls this transition. It does not autoplay and has no button trigger.

### Scene 04 — Rock Face / About

- A detailed illustrated burnt-orange formation, cobalt canyon, cream sky, and clouds resolve through the visor.
- Inked ledges, fissures, print texture, a route line, yellow anchors, and a deliberately small climber establish depth without reading as flat CSS geometry.
- The approved About sentence is the only copy.
- The composition remains readable and spatially connected to the visor reveal.
- Do not turn this into a conventional biography panel.

### Scene 05 — Footer Racer

- Full-width comic racer artwork closes the experience.
- The visible face is based on Ryan's attached comic portrait and is integrated inside the unchanged helmet opening with matching perspective, proportions, skin tone, ink, halftone, shadows, and highlights.
- The racer’s natural eyes remain clearly visible with no goggles, visor, face shield, sunglasses, or eye-covering shadow.
- Closed-eye artwork is derived from each approved open-eye portrait with identical dimensions and crop, then clipped to the exact eye regions in the source viewBox. The blink is never anchored to fixed viewport coordinates.
- Only the clipped eye-region artwork animates; the face and artwork never scale or jump for the blink.
- Blinks use irregular timing with an occasional double blink.
- Blinking pauses while the footer is offscreen, the tab is hidden, or reduced motion is requested.
- With a fine pointer, the same small bike artwork directly replaces the normal cursor at the established footer activation point and follows the live footer pointer through one animation-frame loop. It remains decorative and never captures input.
- The cursor bike is layered above the rider portrait, helmet, face, eyes, and blinking-eye overlays, while the contact navigation remains above it and fully interactive.
- Leaving the footer, reversing the footer scroll, hiding the document, changing pointer mode, or tearing down the page immediately restores the normal cursor and scroll-bound bike and removes all tracking state.
- Touch never emulates cursor tracking; the scroll-bound bike remains the only bike guide on coarse-pointer devices.
- The persistent contact component settles into a wider labelled panel over the footer.
- Do not add contact marketing copy, a résumé link, source-code link, location, or availability.

## 8. Persistent Social Transformation

The five contact items are one DOM component, not duplicated hero, navigation, and footer sets.

1. In the hero it floats at the lower right.
2. As the hero leaves, it moves to a compact top-centre panel.
3. As the footer enters, it moves to the lower footer region, widens, and reveals labels.

The footer transformation begins only when approximately 55–60% of the footer is visible. Labels remain large enough to read as contact actions rather than a miniature toolbar.

The transformation is controlled by scroll progress and reverses cleanly. It must remain readable, keyboard accessible, and inside the viewport on mobile and desktop.

## 9. Scroll-Bound Dirt-Bike Guide

- A small code-native comic dirt bike is one rigid component with one root coordinate system and follows total page scroll progress.
- The root handles route position, scale, and rotation; wheel rotation and suspension displacement remain local transforms.
- It descends vertically along the left rail through the hero and temporary-copy scene, follows one gradual lower-left turn, and travels horizontally along the bottom during the cards.
- It leaves before the visor forms, remains hidden throughout the complete visor pass-through, and restores on the left rail only after the About scene resolves. Reverse scrolling restores this order precisely.
- It uses safe page edges without covering important copy, card text, card numbers, contact controls, or the helmet focal point.
- Wheel rotation, suspension displacement, and the bike’s route are derived only from scroll progress.
- It does not use idle timers, autoplay, or input capture. Pointer tracking is permitted only for the footer cursor-bike replacement described above.
- It is decorative, `aria-hidden`, and `pointer-events: none`.
- With reduced motion it rests at one stable landmark without travel or wheel animation.

## 10. Seamless Motion Rules

- The page must feel like one connected composition.
- Each scene inherits a colour, form, line, or motion cue from the previous scene.
- Prefer masking, scale, camera-space continuity, and spatial transformation over repeated fade-ins.
- Native scrolling remains usable on desktop and touch devices.
- Do not trap or hijack scroll.
- Scroll-controlled motion is reversible.
- Keep interaction motion tied to clear functional or narrative roles.
- Do not add unrelated animation demonstrations.

## 11. Technical Architecture

Core stack:

- Astro
- Semantic Astro components
- TypeScript
- Custom CSS
- GSAP
- GSAP ScrollTrigger
- Native scrolling

Do not add React, a component library, smooth-scroll dependency, WebGL renderer, or other dependency without a separately approved technical need.

Keep components focused on actual experience roles: freefall, arrival, temporary copy transition, card track, visor transition, rock face, persistent contact, footer portrait and cursor-bike motion, and dirt-bike guide.

All timelines, ScrollTriggers, observers, timers, media-query listeners, resize listeners, and hot-reload hooks must be scoped and fully cleaned up.

## 12. Performance and Accessibility

- Target smooth motion on modern desktop and mobile hardware.
- Prefer transforms and opacity for continuous animation.
- Activate `will-change` only while the relevant sequence is active.
- Use optimized WebP raster derivatives with explicit dimensions.
- Preserve stable layout and prevent horizontal page overflow.
- Pause time-based decorative motion when offscreen or hidden.
- Use no more than one animation-frame loop for the footer cursor bike, feed it the latest pointer target continuously, and cancel it outside the footer and during teardown.
- Do not autoplay audio or add flashing effects.
- Maintain accessible names and visible focus indicators for links.
- Decorative motion and images remain hidden from assistive technology.
- Preserve semantic heading, section, list, navigation, and footer structure.
- Support `prefers-reduced-motion` without removing access to content.

## 13. Quality Gate

Before approval:

- Run `npm run check`.
- Run `npm run lint`.
- Run `npm run format:check`.
- Run `npm run build`.
- Run `git diff --check`.
- Inspect at 390×844, 768×1024, 1440×900, and 1920×1080.
- Scroll from top to bottom and back upward.
- Verify the exact four-second intro and first-frame alignment.
- Verify the card travel, final settle, visor pass-through, and reverse restoration.
- Verify the persistent contact transformation and keyboard focus.
- Verify the footer blink pause and cleanup rules.
- Verify the dirt bike route landmarks, direct fine-pointer cursor-bike replacement, touch behavior, above-rider layering, and exact reverse restoration.
- Verify the face and open/closed-eye alignment in both responsive portrait sources.
- Run each hero cloud loop for at least 30 seconds at desktop and mobile widths and verify no visible seam, jump, gap, reversal, or drift.
- Check for layout jumps, horizontal overflow, clipped text, uncovered viewport edges, broken images, and browser console errors.
- Capture fresh desktop and mobile evidence for the freefall, expansion midpoint, hero, cloud loop, arrow states, temporary-copy entry and fade, bike landmarks, climbing scene, footer cursor-bike layering, reverse restoration, and open/closed eyes.
- Do not stage or commit changes without explicit approval.

## 14. Success Test

The website succeeds when a visitor can understand that Ryan Wynn is a web developer, recognise extreme sports as his authentic creative signature, experience polished responsive interaction, and reach every available contact method without encountering generic portfolio filler.
