# AggiePromise Project website

A static Jekyll site for GitHub Pages. It uses no plugins or remote theme, so GitHub Pages builds it as-is.

## Publish on GitHub Pages

1. Create a new GitHub repository (e.g. `aggiepromise`) and upload the contents of this folder to it. Upload the files themselves, not the enclosing folder.
2. In `_config.yml`, set `baseurl`:
   - Site at `https://USERNAME.github.io/aggiepromise/` → `baseurl: "/aggiepromise"`
   - Site at `https://USERNAME.github.io/` or a custom domain → `baseurl: ""`
3. In the repository, go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, and select `main` and `/ (root)`. The site goes live in a minute or two.
4. Optional: for a custom domain, add it under Settings → Pages and follow GitHub's DNS instructions.

## Where content lives

| Tab | Edit this |
|---|---|
| Home | `index.html` |
| About | `about.md`, team in `_data/team.yml`, project facts in `_config.yml` (`project:`) |
| What We Have Learned | Add one file per finding in `_findings/` (copy `_findings/_example-finding.md`) |
| For NC Youth and Families | VR guide text in `nc-youth-and-families.html`; resource listings in `_data/resources.yml` |
| Publications and Working Papers | Journal articles in `_data/publications.yml`; working papers as files in `_working_papers/`; briefs in `_data/briefs.yml` (PDFs in `files/briefs/`); infographics in `_data/infographics.yml` (images in `assets/img/infographics/`) |
| Stories | Add one file per story in `_stories/` (copy `_stories/_example-story.md`); photos in `assets/img/stories/` |
| Menu | `_data/navigation.yml` |
| Footer and NIDILRR funding statement | `_includes/footer.html` |
| Colors and fonts | `assets/css/site.css` (top of file) |

Files that start with `_` inside `_findings/` and `_stories/` are templates and never appear on the site.

## Resource directory

Each listing in `_data/resources.yml` has a `category`, an optional `subcategory`, `region`, `audience`, `description`, `url`, and an optional `logo`. The page groups listings automatically and adds search and category filters.

## Preview locally (optional)

Requires Ruby. Run `bundle install`, then `bundle exec jekyll serve`, then open http://localhost:4000.

## Accessibility notes

- Body text uses Atkinson Hyperlegible, a typeface designed for readers with low vision.
- Includes a skip link, visible keyboard focus, semantic landmarks, and a menu that works without JavaScript. It also supports dark mode and prints cleanly.
- Add `alt` text for every image (story photos use `image_alt`).
