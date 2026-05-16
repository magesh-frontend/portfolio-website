# 🚀 My Portfolio — React + Dark Minimal Theme

A clean, professional portfolio built with React. Designed to impress interviewers with a dark minimal aesthetic.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Skills.js / Skills.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Experience.js / Experience.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── App.js
│   ├── data.js         ← UPDATE YOUR DETAILS HERE
│   ├── index.js
│   └── index.css
└── package.json
```

## ✏️ Update Your Details

Open `src/data.js` and fill in your info:
- Name, role, email, GitHub, LinkedIn
- Skills list
- Projects (title, description, tech stack, links)
- Work experience

That's it! Everything else updates automatically.

## 🛠️ Setup & Run

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Deploy

### Netlify (easiest)
1. Run `npm run build`
2. Drag the `build/` folder to [netlify.com/drop](https://netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

## 🎨 Customize Theme

Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #e8ff47;  /* Change accent color */
  --bg: #0a0a0a;      /* Change background */
}
```

## 📦 Tech Stack
- React 18
- CSS Modules (no extra dependencies)
- Google Fonts (Syne + DM Mono + DM Sans)
