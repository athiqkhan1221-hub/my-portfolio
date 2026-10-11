# M. Athiq Khan — Personal Developer Portfolio

> **“I turn ideas into digital experiences.”**  
> A bespoke, dark editorial developer portfolio engineered with **Next.js (App Router)**, **React.js**, and modern web design principles. Designed for **M. Athiq Khan**, an AIML engineering student at Dhaanish Ahmed Chennai College of Engineering.

---

## ✦ Overview of Implementation

- **Visual Aesthetic:** Premium dark editorial design (`#111311` base, `#1B1E1B` secondary, `#202420` cards, `#C2F970` restrained lime accent, `#F4F3ED` primary text).
- **Typography:** Google Fonts `Manrope` (Headings), `Inter` (Body), and `JetBrains Mono` (Technical specs/labels).
- **Core Sections:**
  1. **Navbar:** Monogram `AK.`, smooth section jumping, responsive mobile overlay drawer, active status indicator, and accessible focus states.
  2. **Hero:** Large editorial typography, tagline, supporting bio, interactive code/terminal/specs switcher (`athiq.js`, `env.sh`, `ai.spec`), and location line (*Chennai, India · AIML Engineering Student*).
  3. **Selected Work (Projects):** 5 categorized projects with editorial cards, status pills (*Active*, *In Progress*, *Experiment*, *Proposed*), tag filters, and an interactive **Project Deep-Dive Modal** detailing Problem, Solution, Process, Challenges, and Lessons Learned.
  4. **Dedicated Dynamic Project Pages:** Full static route support at `/projects/[slug]` with previous/next pagination.
  5. **About Section:** Verified biography, educational foundation at Dhaanish Ahmed Chennai College of Engineering, and editorial typographic portrait mark.
  6. **My Toolkit (Skills):** Categorized groups (Frontend, Programming, AI & Exploration, Creative Production, Full-Stack) without arbitrary percentages or fake progress bars.
  7. **Creative Playground (Beyond The Code):** Visual experiment gallery for AI video generation, vertical 9:16 commercials, 16:9 cinematic tests, and prompt engineering matrices, complete with interactive prompt inspection modal.
  8. **Currently Learning:** 4 active milestone goals presented in a lightweight, easily maintainable structure.
  9. **Contact Section:** Direct contact cards with one-click copy, validated contact form with real-time feedback, and native mail client fallback.
  10. **Footer:** Minimalist `AK.` branding, navigation links, and programmatic dynamic current year (`new Date().getFullYear()`).

---

## ✦ Project Structure

```
portfolio/
├── app/
│   ├── globals.css              # Custom design system tokens & editorial styling
│   ├── layout.js                # Root layout with Google Fonts, OpenGraph & SEO tags
│   ├── page.js                  # Homepage assembling all sections
│   └── projects/
│       └── [slug]/
│           └── page.js          # Dedicated dynamic deep-dive project pages
├── components/
│   ├── About.jsx                # About section with verified bio & core foundations
│   ├── Contact.jsx              # Validating contact form & direct reach-out options
│   ├── Footer.jsx               # Minimal footer with AK monogram & dynamic year
│   ├── Hero.jsx                 # Editorial hero with interactive code terminal
│   ├── Icons.jsx                # Crisp SVG brand & utility icons (GitHub, LinkedIn, etc.)
│   ├── LearningJourney.jsx      # Currently Learning roadmap section
│   ├── Navbar.jsx               # Responsive navigation & mobile drawer
│   ├── Playground.jsx           # Creative Playground experiment gallery
│   ├── PlaygroundModal.jsx      # Experiment & prompt inspection modal
│   ├── ProjectCard.jsx          # Reusable project card component
│   ├── ProjectModal.jsx         # Accessible deep-dive project modal
│   ├── Projects.jsx             # Selected Work section with category filters
│   └── Skills.jsx               # Grouped skills toolkit
├── data/
│   ├── learning.js              # Active learning goals & focus areas
│   ├── playground.js            # Creative Playground items & prompts
│   ├── projects.js              # Full project details, solutions, and specs
│   ├── skills.js                # Verified skill groupings & descriptions
│   └── socials.js               # Personal info, contact details & URLs
└── public/
    └── images/                  # High-fidelity SVG assets & UI illustrations
        ├── athiq-portrait-editorial.svg
        ├── project-portfolio.svg
        ├── project-course.svg
        ├── project-video.svg
        ├── project-screentime.svg
        ├── project-prompt.svg
        ├── playground-scifi.svg
        ├── playground-product.svg
        ├── playground-transit.svg
        ├── playground-editing.svg
        ├── playground-prompt.svg
        └── playground-splash.svg
```

---

## ✦ How to Run Locally

### Prerequisites
- Node.js (v18.18 or higher recommended)
- npm, yarn, or pnpm

### Commands

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Run the production build locally:**
   ```bash
   npm run start
   ```

---

## ✦ How to Personalize Your Portfolio

### 1. Update Contact Details & Social Links
Open `data/socials.js`:
```javascript
export const contactDetails = {
  name: "M. Athiq Khan",
  displayName: "Athiq Khan",
  email: "your-actual-email@gmail.com",     // <-- Update here
  github: "https://github.com/your-username", // <-- Update here
  linkedin: "https://linkedin.com/in/your-username", // <-- Update here
  instagram: "https://instagram.com/your-username", // <-- Update here
  statusActive: true,                        // <-- Set to false to hide "Open to Internships" badge
};
```

### 2. Add or Edit Projects
Open `data/projects.js`. Simply modify or append project objects in the `projects` array. You can set:
- `title`, `category`, `status`, `summary`
- `technologies`: Array of tech tags
- `demoUrl`: Live deployment link (or `null` if pending)
- `githubUrl`: Repository URL (or `null` if private)
- `problem`, `solution`, `process`, `challenges`, `lessonsLearned`

### 3. Add Your Real Photos and Video Assets
- **Portrait Photo:** Place your photo in `public/images/athiq-portrait.jpg` and update the `src` attribute in `components/About.jsx` (currently points to `athiq-portrait-editorial.svg`).
- **Playground Videos:** Drop your MP4/WebM video clips in `public/videos/` and set `videoUrl: "/videos/your-clip.mp4"` in `data/playground.js`.
- **Project Screenshots:** Drop real PNG/JPG screenshots in `public/images/` and update `projects.js`.

### 4. Update What You Are Currently Learning
Open `data/learning.js` to add, update, or remove learning milestones as your engineering coursework progresses.

---

## ✦ How to Deploy

### Option 1: Vercel (Recommended for Next.js)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Athiq Khan portfolio"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Next.js App Router will be detected automatically. Click **Deploy**.

### Option 2: Netlify
1. Go to [Netlify](https://www.netlify.com/) and connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Click **Deploy Site**.

---

## ✦ Checklist of Details to Fill When Ready

- [ ] Real email address in `data/socials.js`
- [ ] Active GitHub profile link in `data/socials.js`
- [ ] Active LinkedIn profile link in `data/socials.js`
- [ ] Active Instagram handle in `data/socials.js`
- [ ] Optional: Add your resume PDF to `public/resume.pdf`
- [ ] Optional: Drop real portrait photo in `public/images/`
- [ ] Optional: Drop real project screenshots or demo URLs into `data/projects.js`
- [ ] Optional: Drop AI video clips into `public/videos/` and link in `data/playground.js`
