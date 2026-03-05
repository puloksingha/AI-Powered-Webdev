# Day 03 Progress Tracker

- Date: 2026-03-05
- Day: Day 03
- Topic: CSS Layouts - Flexbox and Grid
- Planned duration: 2 hours
- Actual duration: 2 hours 15 minutes

## Goals
- [x] Build a landing page with header, hero, features grid, and footer
- [x] Use Flexbox for nav/action rows and wrapping behavior
- [x] Use CSS Grid for feature cards with responsive columns

## Build Checklist
- [x] Main deliverable completed
- [x] Mobile responsiveness checked
- [x] Accessibility quick check completed (semantic landmarks, heading order, focus states)
- [x] No console errors

## AI Usage Log
- Tool(s) used: Codex (GPT-5 coding agent)
- Prompt(s) used: "write the code and complete day 3"
- What AI generated well: semantic layout structure, Flexbox and Grid implementation, responsive behavior
- What I changed manually: content wording and completion status in tracker

## Bugs and Fixes
- Issue: None found during quick browser sanity check
- Fix: Not applicable

## Learnings (Write 5)
1. Flexbox works best for one-dimensional alignment such as navigation bars, button rows, and stat strips.
2. `flex-wrap: wrap` prevents overflow and keeps action rows usable on narrow screens.
3. CSS Grid with `repeat(auto-fit, minmax(...))` is a reliable pattern for responsive card layouts.
4. Keeping spacing and color tokens in `:root` makes it faster to maintain consistency across sections.
5. Semantic sectioning (`header`, `main`, `section`, `footer`) improves readability and accessibility with almost no extra complexity.

## End of Day
- [x] Notes updated
- [ ] Code committed
- [ ] Code pushed
- Commit message: feat(day-03): flex and grid layout
