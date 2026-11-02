# Satyabrat Pandey — Premium Developer Portfolio Website

A production-quality, responsive personal developer portfolio engineered for **Satyabrat Pandey**, Computer Science Engineering student at **Lovely Professional University (LPU)**, aspiring Full Stack Developer, and AI enthusiast.

---

## 🎨 Design Philosophy & Color System

Designed with inspiration from top-tier developer platforms (Linear, Vercel, Apple developer portals):
- **Primary Background**: `#080B0A` (OLED Charcoal)
- **Secondary Surface**: `#101613` (Muted Slate Green)
- **Accent Color**: `#00D084` (Vibrant Emerald Mint)
- **Primary Text**: `#FFFFFF`
- **Secondary Text**: `#A1AAA5`
- **Borders & Grid**: Subtle dark green/grey `#1F2E25` / `rgba(0, 208, 132, 0.16)`

Zero heavy framework dependencies. Blazing fast sub-second load times, accessible HTML5 semantics, and smooth micro-interactions.

---

## 📁 File Structure

```text
satyabrat-portfolio/
├── index.html            # Semantic HTML5 with SEO metadata & accessibility
├── styles.css            # SaaS design system with exact color tokens
├── app.js                # Dynamic interactions (typewriter, CLI terminal, modal)
├── portfolio.config.js   # Centralized data file (Edit all content here!)
├── assets/
│   ├── favicon.svg       # Custom SP monogram brand favicon
│   ├── aarogya.jpg       # Aarogya Protect AI medical dashboard preview
│   ├── awas.svg          # Awas hotel & stay booking engine UI preview
│   ├── auth.svg          # Authentication & session system console preview
│   └── gallery.svg       # Interactive image gallery lightbox preview
└── README.md             # Documentation and deployment instructions
```

---

## ⚙️ How to Customize (Centralized Configuration)

All personal details, project descriptions, skills, social links, education, and credentials are configured in a single file:
👉 **[`portfolio.config.js`](./portfolio.config.js)**

### Updating Contact Information:
Open `portfolio.config.js` and edit the `personal` object:
```javascript
personal: {
  name: "Satyabrat Pandey",
  email: "your.real.email@gmail.com", // Replace with your personal email
  phone: "+91 98765 43210",          // Replace with your phone number
  socials: {
    github: "https://github.com/saty159",
    linkedin: "https://www.linkedin.com/in/satyabrat-pandey-660878313"
  }
}
```

---

## 🚀 Live Deployment Options

### Option 1: GitHub Pages (Recommended, Free)
1. Initialize git and push to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/saty159/portfolio.git
   git push -u origin main
   ```
2. In GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment**, choose `Deploy from a branch` and select `main / (root)`.
4. Your site will be live at `https://saty159.github.io/portfolio/`.

### Option 2: Vercel (1-Click)
1. Sign in to [Vercel](https://vercel.com).
2. Click **Add New > Project** and import your GitHub repository.
3. Keep default settings (Static HTML) and click **Deploy**.

### Option 3: Netlify
1. Drag and drop the `satyabrat-portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Instant global CDN deployment with SSL.

---

## 🌟 Built-in Features
- **Animated Role Typing**: Cycles through Full Stack Developer, AI Enthusiast, Software Engineer.
- **Interactive Developer CLI**: Press the `>_` terminal icon in the navbar or type `help` in the terminal drawer.
- **Blueprint QuickView Modals**: Deep-dive architectural popups for all 4 flagship projects.
- **Verified Resume Downloader**: Automatically generates and downloads `Satyabrat_Pandey_Resume.txt`.
- **Custom Desktop Cursor**: Ambient emerald cursor follower with link hover attraction.
- **Top Scroll Progress**: Real-time reading progress indicator bar.
- **Direct Mailto Dispatcher**: Validated contact form triggering email client with pre-filled message.
