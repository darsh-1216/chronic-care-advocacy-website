# 🌿 Chronic Care Advocacy & Health Navigation Website

<div align="center">

  ![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.1-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

  <p align="center">
    <strong>A compassionate, high-conversion, modern health advocacy website built for patients, caregivers, and families navigating complex medical journeys.</strong>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-design-system">Design System</a>
  </p>

---

</div>

## 📌 About The Project

Navigating chronic illness, complex diagnoses, and fragmented healthcare systems can be overwhelming. The **Chronic Care Advocacy Website** is a dedicated web platform designed for health advocacy services. 

It provides an empathetic, trustworthy, and sleek user experience where patients and families can discover advocacy packages, understand the 3-step navigation process, learn about lived advocacy experience, and seamlessly book consultations.

---

## ✨ Key Features

- 🌿 **Empathetic & Premium Aesthetic**: Warm, welcoming color scheme (`#FAF7F2` cream background, `#4A1525` rich burgundy accent) engineered to build trust and calm anxiety.
- 🎯 **Dynamic Sticky Navbar**: Features smooth scroll detection, intelligent blur backdrop, responsive mobile menu drawer, and quick action buttons.
- 🚀 **Interactive Service Selection**: Service cards feature interactive *"Select Package"* buttons that smooth-scroll directly to the contact form and automatically pre-fill the service subject line!
- 🗺️ **3-Step Roadmap ("Getting Started")**: Clear, actionable path guiding users from initial intake to personalized advocacy planning and active care support.
- 💡 **Interactive FAQ Accordion**: Expandable Q&A accordion to answer common patient & caregiver inquiries.
- 📱 **100% Fully Responsive & Accessible**: Custom Tailwind CSS styling optimized across desktop, tablet, and mobile displays with accessible contrast ratios.
- ⚡ **Smooth Animations & Micro-Interactions**: Powered by Framer Motion for scroll-triggered fade-ins, card hover elevations, and liquid blur transitions.

---

## 🛠️ Tech Stack

| Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Modern UI library utilizing functional components and custom hooks |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) | Lightning-fast development server with instant HMR |
| **Styling Framework** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-gen utility-first CSS engine with Vite plugin integration |
| **Animation Engine** | [Framer Motion](https://www.framer.com/motion/) | Smooth scroll-based animations, layout transitions, and micro-interactions |
| **Iconography** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon system |
| **Utility Functions** | `clsx` & `tailwind-merge` | Conditional styling and clean class name merging |
| **Code Quality** | [Oxlint](https://oxc.rs/) | Fast JavaScript/JSX linter |

---

## 📁 Project Structure

```bash
chronic-care-advocacy-website/
├── public/
│   ├── favicon.svg             # Website tab favicon
│   ├── icons.svg               # SVG asset sprite
│   └── images/                 # Optimized visual photography assets
│       ├── hero_clarity.png
│       └── lived_experience.png
├── src/
│   ├── assets/                 # SVGs and graphics
│   ├── components/             # Modular React UI Components
│   │   ├── Navbar.jsx          # Sticky nav with scroll blur
│   │   ├── HeroSection.jsx     # High-impact advocacy hero banner
│   │   ├── IntroPullStatement.jsx # Emotional empathy intro
│   │   ├── WhoIWorkWith.jsx    # Patient & caregiver target groups
│   │   ├── GettingStarted.jsx  # 3-Step process guide
│   │   ├── WhyThisWork.jsx     # Lived experience & bio section
│   │   ├── ServicesSection.jsx # Advocacy packages with auto-fill CTA
│   │   ├── FaqSection.jsx      # Expandable FAQ accordion
│   │   ├── ContactSection.jsx  # Dynamic contact form with pre-select
│   │   └── Footer.jsx          # Brand footer with quick navigation
│   ├── hooks/
│   │   └── useScrollBlur.js    # Custom scroll state detection hook
│   ├── App.jsx                 # Main application layout & state routing
│   ├── main.jsx                # Application root entry point
│   └── index.css               # Global styles & custom scrollbars
├── index.html                  # HTML entry with Google Fonts
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v18.0 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/darsh-1216/chronic-care-advocacy-website.git
   cd chronic-care-advocacy-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser to view the live app!

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 🎨 Design System & Palette

- 📜 **Warm Canvas Background**: `#FAF7F2`
- 🍷 **Primary Accent (Burgundy/Wine)**: `#4A1525`
- 🌿 **Secondary Warm Sage / Olive**: `#6B705C`
- ✒️ **Dark Slate Typography**: `#23201D`
- ✨ **Glassmorphism**: `rgba(250, 247, 242, 0.85)` with `backdrop-filter: blur(12px)`

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Crafted with ❤️ for patients & health advocates everywhere.</sub>
</div>

