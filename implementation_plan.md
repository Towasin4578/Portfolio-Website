# Clean Layout Refinement, Minimalist Journey & Smooth Moving Tech Skills Plan

Clean up the portfolio based on the user's specific visual feedback: remove the photo corner brackets and bottom extra overlay artifacts, revert the skills section to a clean smooth-moving marquee while retaining the vibrant tech logos and allowing users to drag back and forth, eliminate the blast/burst confetti effect on clicks, and style the Journey timeline with an ultra-minimalist clean hairline border and subtle accent dot matching the sleek dark theme.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following specific fixes were requested:
> 1. **Photo Clean-up**:
>    - Remove `.pt-corner` brackets (the 4 corner target tick marks on the hero photo).
>    - Remove the extra bottom overlay artifact appearing below the photo.
>    - Ensure the photo card is pure, clean, and seamlessly rounded without stray elements.
> 2. **Skills Section (Back to Smooth Moving Marquee with Tech Logos)**:
>    - Reinstate the smooth auto-moving marquee strip like before, but upgrade each chip with its colorful authentic SVG tech logo.
>    - Retain drag-to-move forward and back capabilities without messy dock stacking or complex snap blocks.
> 3. **Remove Blast / Confetti Particle Effects**:
>    - Remove the confetti/blast bursts on link clicks, card clicks, and skill clicks (only keep game win celebration if playing Breakout).
> 4. **Journey Timeline Polish**:
>    - Remove the heavy circuit-trace laser lines and pulsating radar rings.
>    - Implement an **ultra-minimalist clean hairline vertical line** (`width: 1px`, `rgba(255,255,255,0.14)`) with a clean glowing accent dot on each card node that elegantly aligns with the site's dark aesthetic.

---

## 1. Overview & Visual Direction

- **Photo Section**: Crisp, border-radius photo card with clean 3D perspective tracking and holographic sheen on hover. No corner brackets, no extra bottom artifacts.
- **Skills Section**: An effortless infinite horizontal marquee with rich SVG tech logos (C, Python, HTML, Web Dev, Math, Competitive Programming, YouTube SEO, Team Collaboration). Users can grab and drag smoothly forward or backward.
- **Journey Timeline**: Quiet, professional, and elegant. A refined 1px hairline timeline with a subtle glowing dot anchor for each education step, free of distracting laser beams or circuit branches.
- **Click Behavior**: Smooth, clean link transitions without distracting particle explosions.

---

## 2. Technical Modifications

### A. Photo (`.pt` & `header#hero`)
- Remove `.pt-corner` markup and CSS (`.pt-corner.tl`, `.tr`, `.bl`, `.br`).
- Ensure `.pt` has clean overflow containment and no spurious pseudo-elements underneath.

### B. Skills (`.mq` & `.mqt`)
- Restore marquee markup `<div class="mq" id="mq"><div class="mqt" id="mqt">...</div></div>`.
- Populate each chip with its colored SVG icon + title.
- Re-enable the smooth `requestAnimationFrame` infinite scroll loop with pointer drag support.

### C. Journey (`.tl` & `.st`)
- Update `.tl` styling: `padding-left: 28px; position: relative`.
- `.tl:before`: `width: 1px; background: rgba(255, 255, 255, 0.14); left: 6px`.
- `.st:before`: clean `8px` glowing accent dot positioned precisely on the hairline.
- Remove all circuit-trace laser lines, pulsing pings, and horizontal tracks.

### D. Confetti Removal
- Disable `burstConfetti` on normal links (`a.fv, a.st, .hb a.fill, #lang-btn, #scroll-top`).
- Keep game celebration strictly for when the user wins the Breakout game.
