# kathymlong.com

Kathy M. Long's personal website. This file is the operating manual for anyone (Claude included) making changes. It lives in the repo as `CLAUDE.md` so Claude Code reads it automatically, and a copy is the project instructions in the "kathymlong.com" project on claude.ai.

## What this site is

A static personal site for Kathy M. Long, founder and CEO of NixIt AI. Three audiences, in order: event organizers who might book her to speak, investors who want the NixIt deck, and press who need bios and photos. It is not a NixIt marketing site; NixIt lives at nixit.ai and nixitcoach.com and this site links out to them.

- Live site: https://kathymlong.com
- Fallback address: https://kloadept.github.io/kathymlong.com/ (redirects to the live site)
- Repo: https://github.com/Kloadept/kathymlong.com (GitHub account: Kloadept)
- Hosting: GitHub Pages, from the `main` branch, root folder. A push to `main` republishes in about a minute. There is no staging; preview locally or by screenshot before pushing.
- Domain: bought at GoDaddy, DNS managed at GoDaddy. Four A records on `@` point to GitHub Pages; `www` is a CNAME to `kloadept.github.io`. The `CNAME` file in the repo tells GitHub the domain. Do not delete it.
- Forms: Web3Forms. Submissions email kathy@nixit.ai. The access key is in the HTML and is meant to be public.
- Newsletter: signups go to the inbox through Web3Forms until a Substack publication exists. Kathy's Substack profile is https://substack.com/@kathylongnixit (a reader profile, not a publication yet).

## How Kathy works with Claude on this site

- One step per message. She asks for one thing, gets it back, then the next. No eight-item lists of instructions.
- Label every instruction either `CC:` (paste into Claude Code) or `You:` (click it herself in GitHub, GoDaddy, Web3Forms). Never mix the two in one block.
- Recon first, then write. Read the files and say what will change before changing it. Write only after she says go.
- Show, don't describe. For any layout or visual change, render a screenshot or preview before pushing. She is visual and does not want a wall of words about a design.
- Never push to `main` without her explicit go in the current conversation. A push is a publish.
- After pushing, verify on the live site in a private window (caches are aggressive).
- Asks for other people (Rich, Justin, anyone) accumulate into one list and get sent once, not piecemeal. Nothing on this site needs Rich; it is hers.
- If a term lands wrong, she asks, gets a one-sentence definition, and we keep moving.
- Commit messages are plain sentences describing what changed and why. No tickets, no jargon.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: portrait, one claim, three doors (investors, organizers, press), newsletter strip |
| `story.html` | Story prose, Why NixIt panel, short and long bios with copy buttons |
| `speaking.html` | Topics, formats, booking bar. Featured video and past talks sections exist but are hidden |
| `press.html` | Press kit: headshots, bios, fast facts, NixIt boilerplate. Coverage and zip downloads hidden |
| `contact.html` | Contact form routed by intent (Speaking, Podcast, Investing, Press, Other), newsletter, links |
| `thanks.html` | Landing page after a no-JavaScript form submit |
| `404.html` | Not found |
| `styles.css` | All styling. Design tokens are at the top in `:root`. Self-hosted `@font-face` rules above that |
| `site.js` | Links (`LINKS` at the top), mobile nav, copy buttons, contact form logic, newsletter routing |
| `assets/headshot.jpg` | Home page portrait, 4:5 crop |
| `assets/press/` | Downloadable press photos |
| `assets/og.jpg` | Social preview image, 1200 by 630. Regenerate if the headline or location changes |
| `assets/fonts/` | Big Shoulders Display (600, 700, 800) and Source Serif 4 (400, 600, 400 italic), OFL licensed |
| `favicon.svg` | Browser tab icon |
| `CNAME` | The custom domain. Do not remove |
| `.nojekyll` | Tells GitHub Pages to serve files as they are |
| `robots.txt`, `sitemap.xml` | Search engine housekeeping. Add new pages to the sitemap |

No build step, no framework, no package manager. Plain HTML, CSS, and a small amount of vanilla JavaScript. Keep it that way.

## Design system

Direction: "Editorial portrait." Photo-led, one bold claim, three doors. Spend boldness in one place (the headline) and keep everything else quiet.

Type
- Display: Big Shoulders Display, weights 600, 700, 800. Headlines, nav, buttons, labels, chips. A Chicago typeface; Chicago is where her career and her marriage started. Keep it even if the story copy changes.
- Reading: Source Serif 4, 18px base, line-height 1.55. Body copy, bios, form inputs.
- Sentence case everywhere. No all-caps labels, no letterspaced eyebrows.

Color tokens (in `styles.css` `:root`)
- `--paper` #F8F7F3 background, `--ink` #1A1A1A text and rules
- `--teal` #087A8F for the small kicker lines and link underlines
- `--orange` #ED8936 for the one primary action per page, always with black text (NixIt's action color)
- `--cyan` #05DBFC for focus rings, the NixIt nav pill, and the NixIt panel label
- `--panel` #1A1A1A dark panel used once, for the Why NixIt block
- The NixIt spectrum gradient appears once per page, as the 8px bar at the very bottom. Nowhere else.

Structure rules
- 2px ink rules carry the structure. No drop shadows, no card kit, no gradients as decoration.
- Border radius 3px on buttons and inputs only. Chips are pills.
- One primary (orange) button per screen. Secondary buttons are ink outline on paper.
- External links (NixIt, Substack, YouTube, LinkedIn) open in a new tab. Internal links do not.
- Mobile: single column, portrait on top, hamburger nav. Check at 390px wide.
- Motion: none on load. Only state changes (button pressed, copy confirmed) animate. `prefers-reduced-motion` is respected.
- Accessibility floor: visible cyan focus ring, labels on every input, skip link, alt text on photos, contrast at AA or better.

## Voice and copy rules

This is Kathy's voice, first person on the Story and home pages, third person in bios and the press kit.

- Full sentences. Direct, confident, warm. Specific over abstract. Observations land dry; the reader is trusted.
- No hedging, no apologizing, no "just," no "I'd love to," no AI-warm filler.
- No em dashes anywhere in the copy. Use a period, a comma, or a colon.
- Name the specific thing. "Thirty years making SaaS companies run on time," not "extensive experience."
- CTAs say what happens: "Book Kathy to speak," "Request the deck and one-pager," "Send."
- Short lines over long ones in headlines. The home headline is a claim, not a job title.

## Facts that must stay straight

- Name on the site: Kathy M. Long. Title: Founder and CEO, NixIt AI.
- Location: Broomfield, Colorado, outside Boulder. Not Westminster (an early draft had this wrong).
- Origin: born in Akron, Ohio. Adopted at two weeks. Grew up with an older sister in a very Italian family. First in her family to go to college. Graduated from The University of Toledo. Played soccer in high school and in college. NOT Chicago, and not the South Side (an early draft got this wrong from a wireframe placeholder).
- Chicago: moved there after college and met her husband there. Two weeks after the wedding they moved to Colorado, his dream, and both fell in love with the Boulder area.
- Husband: say "my husband" in first person copy. Do not name him on the site unless Kathy says to.
- Family: "four kids" or "mom of four." Never name the kids, never state a diagnosis or neurodivergence for any of them, never reference their schools. "A house full of brains that run a different OS" is as specific as the public site gets.
- Early career: "supported employers and their attorneys on leave and benefits programs." Never say she drafted contracts or policies. Never name individual attorneys anywhere.
- Career: roughly thirty years in SaaS, revenue operations and customer success. Created the Green-to-Growth Framework. General manager at Farmshare. Founded AdeptExec.
- Education: master's in organizational leadership, bachelor's in communication and public relations.
- Boards: advisory board, Women in AI Colorado.
- NixIt one-liner: SMS-first executive-function support for neurodivergent people, connecting the individual, their family circle, and their coach. Slogan allowed on the site: "We don't make you normal. We make you unbreakable."
- Addresses: never put a home address on the site. If a business address is ever needed, it is NixIt's, 300 Nickel St.
- Email shown publicly: none. Contact goes through the form. If press@kathymlong.com is ever set up (GoDaddy forwarding), it can replace the Press CTA.

## Needs Kathy's explicit yes before it goes live

- Any number or claim (talks given, press count, customers, revenue, pilots, programs).
- Any press logo, coverage item, or "as seen in" entry.
- Anything about her kids beyond "four kids."
- Any mention of NixIt customers, partners, or investors by name.
- The line "I'm five feet tall. I have never once been short." (she is deciding whether it stays).
- The 2GI Accelerator pitch win on the home page (confirm wording).

## Hidden sections and how to turn them on

Anything with `class="todo"` is in the HTML but not displayed. Fill in real content, then remove `todo` from the class list.

- Home: "As seen in" logo strip.
- Speaking: featured talk video (replace `VIDEO_ID` in the YouTube embed), past talks list.
- Press: coverage list, "Download all (.zip)" button, NixIt logo pack link.

## Recipes

Add a talk or podcast to Speaking
1. In `speaking.html`, find the `<ul class="talks">`. Add a `<li>` with year, title plus event or show name, and a tag (Keynote, Panel, Fireside, Podcast, Virtual). Newest first.
2. If the section still has `todo` in its class, remove it.

Add a featured talk video
1. In `speaking.html`, replace `VIDEO_ID` in the iframe `src` with the YouTube ID (the part after `v=`). The embed uses `youtube-nocookie.com`; keep that.
2. Remove `todo` from that section.

Add press coverage
1. In `press.html`, the `<ul class="coverage">`. One `<li>` per piece: outlet in bold, headline, link with the date as its text. Newest first.
2. Remove `todo`. If there are three or more pieces with logos, also fill the "As seen in" strip on the home page.

Swap or add a headshot
1. Home portrait: replace `assets/headshot.jpg` with a 4:5 crop, at least 800 by 1000. Update `width` and `height` on the `<img>` in `index.html`.
2. Press kit: add the full-size file to `assets/press/` and an `<a class="headshot">` tile in `press.html` (template is in a comment there).
3. Regenerate `assets/og.jpg` if the portrait changes.

Change copy
1. Edit the HTML directly. Bios appear in both `story.html` and `press.html`; change both.
2. Run the copy rules above before committing. Grep for em dashes: `grep -n "—" *.html`.

Switch the newsletter to Substack
1. Create the publication on Substack.
2. In `site.js`, set `LINKS.substackPublication` to the publication URL (for example `https://kathymlong.substack.com`). Signups then post to Substack directly. Nothing else changes.

Update a social link
1. In `site.js`, edit `LINKS`. An empty value hides that link everywhere.

Add a page
1. Copy `thanks.html` as a starting point: it has the header, footer, and script tags. Set `<title>`, description, canonical, and `aria-current="page"` on the right nav item.
2. Add it to `sitemap.xml`.

Change the contact form inbox
1. Create a new key at web3forms.com with the new email address.
2. Replace the `access_key` value in `contact.html` (twice: contact form and newsletter) and `index.html` (newsletter).

## Publishing checklist

Before `git push`:
- Screenshot or local preview at desktop and 390px mobile.
- No `—` in any HTML file.
- No placeholder text visible (search for "TODO", "REPLACE", "VIDEO_ID" outside of `todo` sections).
- New pages are in `sitemap.xml`.
- Kathy said go.

After `git push`:
- Wait about a minute. Check https://kathymlong.com in a private window.
- If a form changed, send a test submission and confirm it arrives at kathy@nixit.ai.

## Do not

- Add a framework, a build tool, a CSS library, or a package manager.
- Load fonts or scripts from third-party CDNs. Fonts are self-hosted on purpose.
- Add analytics or tracking scripts without asking Kathy first.
- Use NixIt's dark theme here. This is her site, not the product's.
- Remove `CNAME` or `.nojekyll`.
- Push without an explicit go.
