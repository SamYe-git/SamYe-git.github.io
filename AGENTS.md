# Personal Website Agent Guide

## Project purpose

This repository contains Sam Ye's professional personal website. The site should communicate an accurate professional identity, relevant strengths, and real work in a clear, credible way.

Read `PRD.md` before making changes. It is the source of truth for product decisions.

## Working rules

- Inspect the existing files before editing.
- Preserve real content, working links, and existing assets unless the task asks to remove them.
- Never invent education, work experience, projects, skills, awards, contact details, social links, or metrics.
- If information is missing, use a clearly labeled placeholder or ask the user for the real content.
- Keep changes focused on the user's request. Do not add frameworks, build tools, dependencies, or complex JavaScript unless explicitly requested.
- Do not edit `PRD.md` unless the user asks to change product requirements.

## Design direction

- Create a professional, confident, minimal experience.
- Use generous whitespace, strong hierarchy, readable typography, and a consistent visual system.
- Preferred palette: forest green, cream, and charcoal, with one restrained accent color if needed.
- Avoid gradients, neon colors, stock photos, excessive animation, and generic template-like layouts.
- Keep the design consistent across all pages.

## HTML and CSS standards

- Use semantic HTML: `header`, `nav`, `main`, `section`, and `footer`.
- Keep shared navigation and footer consistent across every page.
- Use one shared external stylesheet when possible.
- Use CSS Grid and/or Flexbox for layout.
- Use clear class names and comments to separate meaningful CSS sections.
- Use accurate `alt` text for all informative images.
- Ensure links, buttons, hover states, and keyboard focus states are visible and usable.
