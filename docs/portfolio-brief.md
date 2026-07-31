# Ryan Wynn — Extreme Sports Web Portfolio Brief

Status: Stage 1 creative direction
Purpose: Source of truth for portfolio design and implementation
Last updated: 31 July 2026

## 1. Core Direction

The website itself is the showcase.

It should not contain a project gallery, project case studies, mock project placeholders, a résumé download, a source-code promotion, technology grids, or lengthy career sections. The design, motion, responsiveness, and interaction should demonstrate Ryan’s web-development ability directly.

The experience should feel like one continuous ride rather than a collection of separate pages.

## 2. Permanent Content Rule

Do not display Ryan’s location or availability anywhere on the website.

Do not add location or availability back in future revisions unless Ryan explicitly reverses this rule.

## 3. Originality and Anti-AI-Slop Standard

The finished website must feel authored, specific, and unmistakably Ryan’s. It must not resemble a generic AI-generated portfolio in its visual design, writing, motion, or code.

### Visual rules

- Build the art direction from Ryan’s real relationship with skydiving, freestyle motocross, and rock climbing.
- Use one coherent design system instead of combining unrelated fashionable effects.
- Every shape, colour, type choice, transition, and texture must have a defined role.
- Use a deliberate grid, type scale, spacing system, colour system, and motion system.
- Prefer controlled composition and original details over feature quantity.
- Keep the extreme-sports references specific and informed rather than generic.
- Use original, owned, commissioned, or properly licensed visual assets.
- Do not ship generative placeholder images or synthetic extreme-sports photography.
- Do not copy Dave Holloway’s illustrations, layout, assets, branding, or source code.

### Prohibited visual clichés

- Purple-and-blue neon gradients
- Glowing gradient blobs
- Decorative floating orbs
- Excessive glassmorphism
- Random 3D objects
- Meaningless particle fields
- Generic bento grids
- Unnecessary pill-shaped controls
- Fake code terminals
- Stock startup illustrations
- Generic astronaut imagery
- Constant glow around every interactive element
- Scroll effects that exist only to demonstrate an animation library
- Multiple unrelated animation styles

### Writing rules

- Use only approved copy.
- Do not add phrases such as “crafting digital experiences,” “where creativity meets code,” “passionate developer,” or similarly generic portfolio language.
- Do not invent achievements, capabilities, experience, or personal claims.
- Avoid decorative labels, technical jargon, and filler copy.
- Keep the voice confident, playful, concise, and specific.

### Code rules

- Code should read as intentional production code written for this exact website.
- Use small, focused components with clear responsibilities.
- Use names derived from the actual experience: freefall, airtime, card track, visor transition, rock face, and footer.
- Keep animation timelines modular and scoped to their scenes.
- Centralise reusable tokens and motion values.
- Avoid duplicated styles, unexplained magic numbers, dead code, and unused dependencies.
- Avoid giant components, premature abstractions, and generic utility wrappers.
- Do not add comments that explain obvious syntax.
- Do not leave scaffolding comments, placeholder TODOs, generated essays, or agent instructions in shipped source files.
- Do not mention AI tools, assistants, agents, prompts, or generated code in the production interface or source comments.
- Format, lint, type-check, build, and manually review the complete source before release.
- Inspect every generated change and rewrite anything that does not match the established architecture or design language.

### Final authenticity review

Before launch, perform three separate reviews:

1. Visual review for generic AI design patterns
2. Copy review for filler or generic language
3. Code review for generated-code smells, unnecessary complexity, duplication, and inconsistent naming

No section is complete merely because it works. It must also feel intentionally art-directed and technically maintained.

## 4. Identity

**Name:**
Ryan Wynn

**Professional title:**
Web Developer

**Hero content:**

> RYAN WYNN
> Web Developer

Do not add a supporting line, introduction, location, availability, or paragraph to the hero.

## 5. Minimal About Copy

Use only this exact sentence:

> I like my sports extreme and my websites anything but ordinary.

Do not extend, rewrite, subtitle, or add another sentence to it. Do not add a location, availability statement, biography, employment history, or second paragraph.

## 6. Footer Contact Details

The following contact methods should appear only in the footer:

**Email:**
`[PROFESSIONAL_EMAIL]`

**GitHub:**
https://github.com/Ryan-W-Dev

**LinkedIn:**
https://www.linkedin.com/in/ryan-wynn-01a784403/

**Telegram:**
`[TELEGRAM_URL]`

**WhatsApp Messenger:**
`[WHATSAPP_URL]`

Do not add a contact headline, contact paragraph, résumé link, source-code link, location, or availability text.

## 7. Signature Concept — Extreme Sports

Extreme sports are Ryan’s unique creative signature.

The visual and motion language should draw from:

- Skydiving
- Freestyle motocross
- Rock climbing

These sports should shape the experience rather than appear as decorative stock photographs.

### Skydiving language

- Altitude
- Freefall
- Aerial perspective
- Clouds and atmosphere
- Acceleration
- Controlled descent
- Parachute-like circular expansion

### Freestyle motocross language

- Airtime
- Launch ramps
- Curved flight paths
- Suspension and impact
- Rotation
- Momentum
- Controlled risk

### Rock-climbing language

- Route finding
- Grip
- Chalk marks
- Vertical progress
- Anchors and carabiner geometry
- Rock contours
- Precision

### Creative restraint

- Avoid generic flames, skulls, racing stripes, sports logos, or energy-drink styling.
- Avoid turning the website into a game.
- Avoid using all three sports in every scene.
- Give each sport a clear role in the journey.
- Keep the visual system premium, graphic, and editorial.
- Use movement, geometry, perspective, and texture to communicate the sports.

## 8. Entry Loading Sequence — Freefall

Every entry begins with a cinematic skydiving sequence.

### Camera direction

- Camera points straight down toward the ground.
- The camera begins high above the landscape.
- It descends continuously as though the visitor is in freefall.
- Cloud layers, atmospheric depth, scale changes, and controlled motion blur communicate height and speed.
- The camera may make subtle stabilizing adjustments but should not spin or create motion sickness.
- The descent lasts approximately 15 seconds before the hero transition begins.

### Transition into the hero

1. After the descent, the ground stabilizes around a central landing point.
2. The loading world begins a smooth fade.
3. “RYAN WYNN” appears in the exact centre of the screen.
4. A solid-colour circle appears behind or around the central name.
5. The circle expands outward with a fluid, organic perimeter.
6. The circle fills the viewport and becomes the transition surface.
7. The hero is revealed from inside the expanding colour field.
8. Ryan’s name remains visually continuous so the transition does not feel like a page reload.

### Loading-sequence safeguards

- The full cinematic sequence begins immediately and runs uninterrupted whenever the visitor enters or reloads the website.
- The entry experience has one route: freefall, circular reveal, then hero.
- Never keep the visitor waiting for the animation if required assets fail.
- Use the sequence to preload critical hero assets.
- If advanced rendering is unavailable, use an equivalent timed 2D descent rather than bypassing the sequence.

## 9. Experience Structure

The website should be one continuous page with cinematic visual scenes. Scrolling advances the experience without breaking native navigation.

### Scene 01 — Arrival

Content:

- Ryan Wynn
- Web Developer
- Minimal scroll indicator

Experience:

- The expanding loading circle resolves into the hero’s main graphic form.
- Ryan’s name is centred and visually dominant.
- The hero is calm after the speed of the freefall sequence.
- One subtle cursor interaction suggests that the experience is responsive.

### Scene 02 — Airtime

Content:

- No supporting line
- No paragraph
- No technology list

Experience:

- The hero’s circle stretches into a curved freestyle-motocross flight path.
- Typography and graphic elements lift, rotate, and settle with controlled suspension-like easing.
- The movement communicates airtime without showing a literal motorcycle in every frame.
- The hero composition transforms rather than disappearing.

### Scene 03 — Scroll-Driven Extreme-Sports Cards

As the visitor scrolls down, the cards travel horizontally from right to left.

Implementation:

- Use a GSAP ScrollTrigger timeline tied to native vertical scroll progress.
- Pin the scene only while the horizontal card sequence is crossing the viewport.
- Map downward scrolling to smooth right-to-left card movement.
- Reverse the card movement cleanly when the visitor scrolls upward.
- Calculate the horizontal travel distance from the rendered card track and viewport width.
- Keep part of the next card visible.
- Preserve native vertical scrolling on desktop and touch devices.
- Recalculate the travel distance and ScrollTrigger positions when the viewport changes.
- Let the final card settle before the helmet-visor transition begins.
- Do not auto-advance.
- Do not use infinite looping unless separately approved.
- Do not make the cards draggable.
- Do not add previous or next buttons.
- Do not add arrow-key card navigation.

Working card directions:

1. **FREEFALL** — Commit to the drop.
2. **AIRTIME** — Make the impossible feel weightless.
3. **LINE** — Choose it. Build it. Send it.
4. **GRIP** — Precision over panic.
5. **FLOW** — Every move leads to the next.
6. **SUMMIT** — Finish higher than you started.

The card copy remains subject to final approval. Cards are not projects, services, or a skills grid.

### Scene 03 → Scene 04 — Helmet-Visor Transition

After the card experience, the camera should pan, align with a helmet visor, and pass through it into the About scene.

The complete transition is controlled only by vertical scroll progress. It must not autoplay, run on a timer, or be triggered by a button.

Transition choreography:

1. The selected or final card slows and settles as the visitor scrolls.
2. A dark helmet silhouette begins to form from the card’s graphic geometry.
3. The visor becomes the only clear opening and locks to the centre of the viewport.
4. Reflections move across the curved visor surface as scroll progress advances.
5. The card track and surrounding interface pull backward while the visor remains centred.
6. The camera banks slightly and moves toward the visor.
7. The visor rim passes around the edges of the viewport with layered parallax.
8. The camera travels through the visor.
9. The view inside the helmet becomes the rock-climbing environment of Scene 04.
10. Reversing the scroll reverses the complete camera movement cleanly.

This should capture the continuity and camera-led quality of the transitions on Dave Holloway’s portfolio while using original extreme-sports imagery, geometry, animation, and code.

### Scene 04 — About / Rock Face

Content:

> I like my sports extreme and my websites anything but ordinary.

Experience:

- The portal resolves into a stylised rock surface or climbing-route composition.
- A minimal route line guides the eye toward the About statement.
- The visual system opens and becomes calmer so the text remains readable.
- Chalk-like marks, anchor geometry, or subtle rock contours may provide texture.
- Avoid a conventional biography panel.

### Scene 05 — Descent and Footer

Content:

- Email
- GitHub
- LinkedIn
- Telegram
- WhatsApp Messenger

Experience:

- The climbing route resolves or reaches a visual summit.
- Motion becomes calm and stable.
- Contact links appear only in the footer.
- The footer should be simple, clear, and easy to use.
- Do not add a contact headline or additional marketing copy.

## 10. Seamless Transition Rules

- The website must feel like one connected composition.
- Persistent visual elements should transform between scenes.
- Each scene should inherit at least one form, colour, line, or motion from the previous scene.
- Do not create obvious rectangular page boundaries.
- Avoid repeated fade-in-and-fade-out effects.
- Prefer camera movement, masking, reflow, scale, rotation, and spatial transformation.
- Each transition should prepare the next scene before the current scene leaves.
- Scrolling downward and upward must both feel intentional.
- Navigation should move smoothly to experience landmarks.
- Do not trap the user in scroll-jacking.
- Native browser navigation and scrolling must remain usable.

## 11. Interaction Rules

- Interaction is the primary content.
- Motion should respond quickly and precisely.
- Hover effects must communicate interactivity.
- Cursor effects should support the composition rather than chase the pointer as decoration.
- Use the extreme-sports motion language consistently.
- Avoid collections of unrelated animation tricks.
- Touch devices need purpose-built interactions instead of desktop hover effects.
- The card sequence is controlled only by vertical scroll and cannot be dragged.
- The Scene 03 helmet-visor transition is controlled only by vertical scroll.

## 12. Text Restraint Rules

- No project showcase.
- No project case studies.
- No skills grid.
- No long technology list.
- No service section.
- No employment timeline.
- No testimonials.
- No awards section.
- No résumé download.
- No portfolio source-code promotion.
- No location or availability.
- No lengthy introduction.
- No paragraph should exceed approximately 45 words.
- The homepage should contain fewer than approximately 120 visible words, excluding navigation and legal text.
- Let typography, space, movement, and interaction carry the experience.

## 13. Visual Direction

- Extreme-sports editorial identity
- Large-scale use of Ryan’s name
- Strong typography
- Clean light or neutral foundation
- One controlled solid accent colour per visual state
- Fluid solid-colour transitions
- Generous negative space
- Crisp geometry and deliberate composition
- Minimal interface chrome
- High contrast without excessive glow
- Depth created through scale, overlap, perspective, camera movement, and parallax
- Original illustration and motion language
- No copied Dave Holloway assets, layouts, sports, or transition code

## 14. Technical Quality Requirements

The website should demonstrate:

- Semantic HTML
- Responsive CSS
- Well-structured Astro components
- Purposeful TypeScript
- Smooth GSAP animation
- A scroll-linked horizontal card sequence built with GSAP ScrollTrigger
- Reversible ScrollTrigger timelines where appropriate
- Strong mobile adaptation
- Fast initial loading
- Optimized fonts and visual assets
- Stable layout with no avoidable content shifts
- SEO metadata and structured content
- Clean, maintainable source code

## 15. Implementation Boundaries

Core stack:

- Astro
- TypeScript
- Custom CSS
- GSAP
- GSAP ScrollTrigger
- Native scrolling

Provisionally justified for the freefall and portal sequences:

- Three.js or focused WebGL
- A lightweight pre-rendered visual fallback

Add only when an approved prototype proves the benefit:

- Lenis
- Rive

Avoid:

- React without a specific need
- Generic component libraries
- Template-based portfolio sections
- Excessive dependencies
- Animation added solely to make the website busy
- Forcing advanced rendering on devices that cannot run it smoothly

## 16. Performance and Accessibility Limits

- Target smooth 60 fps on modern desktop hardware.
- Prefer transforms and opacity for interface animation.
- Use adaptive quality for WebGL.
- Reduce terrain detail, particles, and post-processing on mobile.
- Pause rendering when the tab is hidden.
- Dispose of WebGL resources after a sequence when they are no longer needed.
- Do not autoplay audio.
- Do not use flashing effects.
- Avoid rapid camera rotation.
- Provide an equivalent timed 2D animation when advanced rendering is unsupported.

## 17. Success Test

The website succeeds when a visitor can understand:

1. Ryan Wynn is a web developer.
2. Extreme sports are his authentic creative signature.
3. He cares about bold design, usability, and interaction.
4. He can create polished, technically controlled web experiences.
5. He understands responsive design, accessibility, and performance.
6. His email, GitHub, LinkedIn, Telegram, and WhatsApp are easy to find in the footer.

## 18. Remaining Placeholders

- `[PROFESSIONAL_EMAIL]`
- `[TELEGRAM_URL]`
- `[WHATSAPP_URL]`
