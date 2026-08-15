# Portofolio — Data Engineer

My personal portfolio website, built with Vite and deployed to GitHub Pages.

## Live site

https://xmen1412.github.io/portofolio-website/

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # build production site to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── index.html      # page markup
├── css/style.css   # styles (dark/light themes via CSS variables)
├── js/main.js      # renders content into the page
├── js/theme.js     # dark/light theme toggle
├── data/content.js # all site content (edit this)
└── assets/images/  # put images here
```

## Deploy

Push to `master` — GitHub Actions builds and deploys `dist/` to GitHub Pages automatically.

## Contact

- Email: akbar382043@gmail.com
