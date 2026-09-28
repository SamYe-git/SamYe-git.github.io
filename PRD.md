# Personal Website PRD

## Product overview

**Product:** Sam Ye personal website
**Purpose:** Present Sam Ye through a polished personal website that communicates his professional identity, strengths, and work.
**Primary audience:** Classmates, instructors, recruiters, collaborators, and professional contacts.
**Primary action:** A visitor should be able to understand Sam's background and explore his work or contact information.

## Problem to solve

A basic personal webpage can show information, but it should also communicate a clear professional identity and be easy to use on a phone. This site should turn Sam's existing content into a cohesive portfolio rather than a single page with a photo and a few paragraphs.

## Goals

- Make a strong first impression in the first five seconds.
- Clearly introduce Sam Ye's professional background and strengths.
- Present real work, skills, and contact details when they are available.
- Keep navigation consistent across pages.
- Make every page readable and usable on phones, tablets, and desktops.

## Non-goals

- No invented biography, work history, school details, technical skills, contact information, or social links.
- No login, online store, database, or complex interactive features.
- No heavy animations, frameworks, or unnecessary JavaScript.

## Site structure

### 1. Home (`index.html`)

**Visitor need:** Quickly understand whose site this is and where to go next.

**Content and features:**

- A clear site title using Sam Ye's name.
- A concise professional introduction.
- A featured image or clean visual detail from existing assets, if appropriate.
- A call-to-action that leads to the About or Work page.
- A short preview of skills, coursework, projects, or areas of focus that already exist in the site's content.

### 2. About Me (`about-me.html`)

**Visitor need:** Learn more about Sam's background and professional direction.

**Content and features:**

- A professional portrait or existing appropriate image, if available.
- A concise first-person or third-person introduction.
- Real information about Sam's education, experience, strengths, and goals. Do not add details that have not been provided.

### 3. Work and Skills (`interests.html` or renamed equivalent)

**Visitor need:** Understand Sam's relevant skills, coursework, projects, or professional interests.

**Content and features:**

- Project, coursework, skill, or focus-area cards using only real information.
- Each card should include a short description and a relevant link only when one already exists.
- Clear sections that are easy to scan.

## Functional requirements

- Every page must share the same header, navigation, and footer.
- Navigation must include Home, About, and Work or Skills.
- All navigation links must work and identify the current page when appropriate.
- Images must include useful alternative text.
- The layout must be built with semantic HTML and an external CSS stylesheet.
- Use CSS Flexbox and/or Grid for layout.
- The website must work without JavaScript.

## Visual direction

The visual style should feel professional, confident, and minimal: an editorial layout with generous whitespace, readable text, and a restrained forest-green, cream, and charcoal palette. A muted accent color may be used sparingly. The design should feel custom and credible, not like a generic template. Avoid gradients, neon colors, stock imagery, and excessive animation.

## Responsive and accessibility requirements

- Design mobile-first.
- At small phone widths, content must use a single column and images must never overflow.
- Navigation must remain usable on small screens, using an accessible menu button if links cannot fit.
- At tablet and desktop sizes, content may use two-column layouts when it improves readability.
- There must be no horizontal page scrolling at 375 px, 768 px, or 1440 px widths.
- Text must have sufficient contrast against its background.
- Interactive elements must have visible keyboard focus states.
- Headings must follow a logical order.

## Success criteria

The project is successful when:

- A visitor can identify the site owner and purpose immediately.
- A visitor can reach every page through working navigation.
- The About and Work/Skills pages use accurate professional content.
- The site looks intentional and consistent across all pages.
- Testing in the browser Device Toolbar at 375 x 812, 768 x 1024, and 1440 px wide shows no overflow, overlap, distorted images, or unusable navigation.

## Acceptance checklist

- [ ] `index.html`, `about-me.html`, and a Work/Skills page are complete.
- [ ] One shared external CSS file is linked from every page.
- [ ] Header, navigation, main content, and footer use semantic HTML.
- [ ] All images include accurate `alt` text.
- [ ] All internal links work.
- [ ] Mobile, tablet, and desktop layouts have been checked in DevTools Device Toolbar.
