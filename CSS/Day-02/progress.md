# Day 02 Progress Tracker

- Date: 2026-03-04
- Day: Day 02
- Topic: CSS Fundamentals
- Planned duration: 2 hours
- Actual duration: 2 hours

## Goals
- [x] Build a styled profile card page with at least 3 sections
- [x] Practise element, class, ID, and descendant selectors
- [x] Apply box model (margin, border, padding) and display properties

## Build Checklist
- [x] Main deliverable completed
- [x] Mobile responsiveness checked
- [x] Accessibility quick check completed (aria-labels, semantic HTML)
- [x] No console errors

## AI Usage Log
- Tool(s) used: GitHub Copilot
- Prompt(s) used: "Generate a styled profile card page that demonstrates CSS selectors, box model, typography scale, and display properties"
- What AI generated well: overall layout structure, CSS custom properties, responsive grid
- What I changed manually: fine-tuned card padding, adjusted colour palette, fixed emoji encoding

## Bugs and Fixes
- Issue: Broken emoji rendering in the `.day-pill` element
- Fix: Replaced raw emoji byte sequence with HTML entity `&#127912;`

## Learnings (Write 5)
1. CSS custom properties (`--variable`) make it easy to maintain a consistent colour system across the whole page.
2. `box-sizing: border-box` ensures padding and border are included in an element's total width, preventing unexpected overflow.
3. `display: inline-block` lets an element sit inline with text while still accepting width, height, and vertical padding.
4. Descendant selectors (`#selector-demo p span`) allow precise targeting without extra classes.
5. `clamp()` for `font-size` provides a fluid type scale that scales smoothly between viewport sizes.

## End of Day
- [x] Notes updated
- [x] Code committed
- [x] Code pushed
- Commit message: feat(day-02): css fundamentals page complete
