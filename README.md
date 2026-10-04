# kathymlong.com

Kathy M. Long's personal site. Plain HTML, CSS, and a little JavaScript. No build step: edit a file, push, GitHub Pages republishes in about a minute.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home: portrait, one claim, three doors (investors, organizers, press), newsletter |
| `story.html` | Story, Why NixIt panel, bios |
| `speaking.html` | Topics, formats, booking |
| `press.html` | Press kit: bios, fast facts, NixIt boilerplate |
| `contact.html` | Contact form routed by intent, newsletter |
| `thanks.html` | Shown after a no-JavaScript form submit |
| `404.html` | Not found |

Shared: `styles.css` (all design tokens live at the top), `site.js` (nav, copy buttons, form), `favicon.svg`.

## Things to set once

- `site.js`, top of file: `LINKS.linkedin` and `LINKS.substack`. Until set, those links are hidden and the Subscribe box has nowhere to post.
- `contact.html`: replace `WEB3FORMS_ACCESS_KEY` with the key from web3forms.com (sent to the inbox that should receive submissions).
- Headshot: drop `assets/headshot.jpg` (4:5, at least 800 by 1000) and swap the placeholder in `index.html` as the comment there shows.
- Social preview image: `assets/og.jpg` (1200 by 630).

## Sections hidden until there is real content

Anything with `class="todo"` is in the page but not shown: the "As seen in" strip, featured talk video, past talks list, headshots grid, coverage list, press-kit zip, logo pack. Fill the content and remove the `todo` class.

## Hosting

GitHub Pages from the `main` branch root. `CNAME` points the custom domain at it; DNS is managed at GoDaddy.
