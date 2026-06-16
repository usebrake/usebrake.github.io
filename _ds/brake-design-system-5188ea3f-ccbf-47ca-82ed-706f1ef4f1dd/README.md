# Brake Design System

A complete design system for **Brake** — a Windows desktop accountability app that
helps people stop impulsive explicit-content viewing before it escalates.

Brake runs **locally** on the user's computer, watches the screen for explicit
visual content, and triggers **calm but serious lockouts** when needed. It is a
polished desktop utility — *not* a website, SaaS dashboard, or mobile app. The
whole system is tuned to feel **quiet, trustworthy, modern, and serious without
being scary or shame-based**, and deliberately **warmer and brighter** than a
gloomy blue-on-dark security tool.

> This system was built from a written brand brief (no existing codebase or Figma
> was provided). Where a real product source becomes available, reconcile the
> tokens here against it. All visual decisions below are originals derived from the
> brief's stated colour, voice, and product direction.

---

## What's in here (index)

| Path | What it is |
| --- | --- |
| `colors_and_type.css` | **Source of truth** for all design tokens — colour, type, spacing, radius, elevation, motion. Import this first. |
| `README.md` | This file — context, content & visual foundations, iconography. |
| `SKILL.md` | Agent Skill manifest so this system works inside Claude Code. |
| `fonts/` | Geist Sans + Geist Mono (variable woff2, local). |
| `assets/icons/` | All Lucide SVG icons used across the system. |
| `assets/brand/` | **Real Brake logo** — source SVG, gold/teal/amber glow variants, PNG renders, `.ico`, and `LOGO-USAGE.md`. |
| `preview/` | ~19 small design-system cards (colour, type, spacing, components, brand). |
| `ui_kits/desktop-app/` | High-fidelity interactive recreation of the Brake app — shell + all six core screens. See its own `README.md`. |
| `screenshots/` | Reference renders captured during build. |

**Primary product surface:** one desktop app (`ui_kits/desktop-app/`). Core screens:
Overview (Off), Overview (Protected), Detection settings, Commitment dialog,
Recovery code dialog, Lockout screen — plus Activity, Settings, and a system-tray menu.

---

## Brand in one breath

- **Name:** Brake
- **Meaning:** pause · self-control · friction before impulse · calm accountability
- **Voice:** calm, direct, supportive, private, serious
- **Avoid:** shame, panic, hacker/security theatre, childish gamification,
  porn-specific branding, SaaS marketing gloss, religious language.
- **Symbol:** the **pause mark** — two gold bars inside a soft ring — **never a
  padlock**. The ring tints to signal state: gold (normal), teal (protected), amber
  (commitment). The packaged Windows app icon is the ring on a dark rounded square
  (`assets/brand/brake-ring.ico`, `brake-ring-icon-*.png`). The padlock appears *only*
  on the lockout screen, where it literally represents the locked state.

---

## CONTENT FUNDAMENTALS

How Brake talks. Copy is part of the product's job: it has to lower the temperature,
never raise it.

**Person & stance.** Address the user as **"you"**; the app refers to itself as
**"Brake"** in the third person ("Brake stepped in", "Brake is watching"). It speaks
*beside* the user, like a level-headed ally — never *down* at them.

**Tone.** Calm, plain, and quietly serious. Short declarative sentences. It states
what is happening and what to do next, then gets out of the way. It is never alarmed,
never jokey, never congratulatory in a gamified way.

**Casing.** Sentence case everywhere — titles, buttons, labels. The only uppercase is
the small tracked **eyebrow / state label** (`PROTECTED`, `OFF`, `LOCKED`). No Title
Case, no ALL-CAPS shouting in body copy.

**No shame, ever.** Copy never blames, scolds, or references the content itself. A
lockout reads as *"Brake stepped in — breathe, stand up, get a glass of water,"* not
*"You failed"* or *"Caught you."* The lockout is framed as **a moment the user set up
for themselves**, restoring agency.

**Privacy is stated, not implied.** Because the product watches the screen, copy
repeatedly and plainly reassures: *"It works entirely on your computer. Nothing you do
is uploaded, recorded, or sent anywhere."*

**Friction is described honestly.** Destructive actions (turning protection off,
lowering sensitivity) are named for what they are and paired with a calm rationale:
*"Turning off protection removes the pause you set up for yourself. There's no rush —
sit with the decision for a few seconds."*

**Emoji:** none. **Exclamation marks:** effectively none. **Numbers:** only when they
mean something (countdown, streak, intervention count) — never decorative stat-slop.

Representative strings:
- "You're covered" · "Protection is off"
- "Brake runs quietly on your computer and steps in only when it needs to."
- "A quiet pause between impulse and action"
- "Take a moment before turning off"
- "Brake stepped in" / "until the lock lifts"
- "Brake can't recover this for you" (recovery code)

---

## VISUAL FOUNDATIONS

**Overall feel.** A warm, quiet, modern Windows desktop utility. Compact and
efficient — real desktop density, generous-but-disciplined spacing, no marketing hero
sections, no decorative orbs or gradients-for-show.

**Colour vibe.** Dark, but **warm-dark**. The base `#0b0e14` is a cool near-black,
deliberately lifted by warm off-white text (`#f3f0e6`) and a **warm gold accent**
(`#e6cd9b`) that carries the brand's warmth. Surfaces step up in lightness
(`#12161f → #181d28 → #212736`) with a faint warm tint rather than pure cool grey, so
the UI never reads as cold blue-on-black.
- **Gold** = brand + primary action + focus.
- **Teal** (`#5eead4`) = *safe / protected* only, used sparingly.
- **Amber** (`#f0a84e`) = commitment & warnings (serious, not alarmist).
- **Coral** (`#e2796b`) = destructive / error (muted, never neon-red).
- **Lock-blue** (`#6ba6e0`) = **reserved exclusively for the lockout screen.**

**Type.** Geist (variable) for all UI; Geist Mono for numerals, countdowns, and
recovery codes (always tabular, `font-feature-settings:'tnum'`). Weights 400/500/560/680.
Headings get slightly tight tracking (`-0.012em`); body is neutral. Sizes are compact —
14px body, 11px tracked eyebrows — but never below 11px.

**Spacing.** 4px base grid (`--sp-1 … --sp-16`). Desktop-compact: 18px card padding,
14px between cards, 14px control gaps.

**Backgrounds.** Flat solid surfaces. The *only* permitted gradients are extremely
subtle: a faint radial top-light on the app backdrop and on the lockout screen to add
depth. **No** imagery, photos, textures, patterns, or decorative gradients. No explicit
imagery, obviously, anywhere.

**Cards.** Flat `--surface-1` panels, 1px `--border` hairline, `--r-md` (9px) corners,
a very soft `--sh-1` shadow plus a 1px inner top-light (`inset 0 1px 0 rgba(243,240,230,.05)`)
that gives raised surfaces a gentle warm "lift". Card headers carry a small tinted
lead-icon chip.

**Corners.** Soft but utilitarian: 4 / 6 / 9 / 12 / 16px. Buttons & inputs 6px, cards
9px, dialogs 12px, the window 16px. Pills (999px) only for badges and the demo bar.

**Elevation / shadows.** Low, soft, desaturated — never harsh black drop shadows.
Four levels: rows (`--sh-1`), popovers (`--sh-2`), the window (`--sh-3`), dialogs
(`--sh-pop`). Depth comes mostly from surface-lightness steps + the inner top-light,
not from heavy shadow.

**Borders.** Hairlines are warm-white at low alpha (`rgba(243,240,230,…)`), three
weights: `--border` (default), `--border-strong` (inputs/emphasis), `--border-faint`
(internal splits). Coloured borders use the matching state's `…-line` token at ~32% alpha.

**Transparency & blur.** Used sparingly and only with intent: the modal scrim is a dark
wash with a light `blur(3px)`; state tints (`--gold-soft`, `--teal-soft`, etc.) are
~13–14% alpha fills behind icons, radios, alerts, and badges. No frosted-glass
everywhere.

**Protected state language.** "Protected" is shown as a **teal ring + soft halo** around
the shield, a left accent bar on the status module, and a pulsing teal "Active" badge —
a calm capsule, not a loud banner.

**Hover states.** Subtle. Backgrounds step up one surface level (`--surface-2 →
--surface-3`); text muted→primary; the primary button brightens to `--gold-bright`;
the window close button is the one place colour appears on hover (`#b5453a`).

**Press states.** Buttons nudge down and scale to `0.992` — a tiny tactile "give",
no bounce. Primary darkens to `--gold-dim`.

**Focus.** A 3px soft gold halo (`0 0 0 3px var(--gold-soft)`) plus a gold border on
inputs. Always visible, never removed.

**Motion.** Quiet and brief. Dialogs fade + rise 8px over ~200ms on `ease-out`;
toggles slide their knob over 200ms; the lockout meter fills linearly. Durations
120 / 200 / 340ms. **No** bounces, springs, parallax, or attention-seeking loops — the
product's whole thesis is *less* stimulation.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — a single, consistent open line-icon family.
  2px stroke, 24px grid, rounded caps & joins. The calm, even weight suits a quiet
  utility far better than filled or duotone icons.
- **Format:** SVG. Every icon used is copied locally into `assets/icons/` (44 icons).
  In the UI kit they're loaded once into `icons-data.js` and rendered through a tiny
  `<Icon name="…">` React component (`stroke="currentColor"` so they inherit state
  colour). In static preview cards the SVG is inlined directly.
- **The Brake mark is *not* a Lucide icon.** It's the brand pause glyph — two gold
  bars inside a soft ring. Drawn parametrically as `BrakeMark` in
  `ui_kits/desktop-app/Icon.jsx` with a `variant` prop, and as ring SVGs in
  `assets/brand/brake-ring-{gold,teal,amber}.svg`. Use the **gold** ring for normal
  app / title bar / tray / docs, **teal** for protected/safe, **amber** for
  commitment/warning. The packaged OS / installer icon is the rasterized ring
  (`brake-ring.ico` + `brake-ring-icon-{16…512}.png`); the older filled rounded-square
  files (`brake-mark*.svg`, `brake-primary-*.png`) are kept as an alternate. **Do not**
  substitute a padlock for the brand.
- **The padlock (`lock-keyhole`) is allowed only on the lockout screen**, tinted
  lock-blue, where it represents the literal locked state.
- **Colour:** icons inherit text colour by default; state icons take the state colour
  (teal/amber/coral/lock-blue). Card-header lead icons sit in a tinted rounded chip.
- **Emoji:** never. **Unicode glyphs as icons:** never (a middot `·` is used only as a
  text separator in eyebrows). Always use a real Lucide SVG.

Common icons by meaning: `shield-check` (protected), `power` / `shield-off` (off /
disarm), `scan-eye` (detection), `gauge` (sensitivity / overview), `clock-alert`
(lockout timing), `key-round` (recovery), `activity` (log), `settings`, `pause`,
`triangle-alert` (warning), `lock-keyhole` (locked state only).

---

## How to use this system

1. Link `colors_and_type.css` first — it defines every token and `@font-face`.
2. For app UI, link `ui_kits/desktop-app/app.css` for the component classes, or pull
   the JSX components directly.
3. Build with tokens (`var(--gold)`, `var(--sp-4)`, `var(--r-md)`…), never hard-coded
   hex/px.
4. Keep the voice: sentence case, "you", calm, private, no shame, no emoji.
5. Reach for the padlock **only** for a locked state; use the pause-mark for brand.
