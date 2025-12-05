# Abdelrahman Waleed CV Portfolio - Project Setup Instructions

## Important Note About Running the Project

This is a **React.js** project that requires **Node.js** and **npm** to run. It cannot be run with Python.

## Prerequisites

You need to install Node.js on your system:

1. Download Node.js from: https://nodejs.org/
2. Install the LTS (Long Term Support) version
3. Verify installation by opening PowerShell and running:
   ```
   node --version
   npm --version
   ```

## Installation Steps

Once Node.js is installed, follow these steps:

1. Open PowerShell and navigate to the project directory:
   ```
   cd c:\Users\Administrator\Desktop\CV
   ```

2. Install all dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. The application will open at `http://localhost:5173`

5. To view in Brave browser specifically:
   - Open Brave browser
   - Navigate to `http://localhost:5173`

## Build for Production

To create a production build:
```
npm run build
```

To preview the production build:
```
npm run preview
```

## Project Structure

```
CV/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── Navigation.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillBar.jsx
│   │   └── SectionTitle.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── experience.js
│   │   └── skills.js
│   ├── utils/
│   │   ├── animations.js
│   │   └── smoothScroll.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features Implemented

✅ Custom animated cursor
✅ Interactive particle background
✅ Smooth scroll navigation
✅ Hero section with typing animation
✅ About section with skills
✅ Experience timeline
✅ 8 portfolio projects showcase
✅ Contact section with WhatsApp integration
✅ Fully responsive design
✅ Dark mode aesthetic
✅ Extensive animations

## Contact Information

- WhatsApp: 01123153529
- GitHub: https://github.com/abdelrahmanw372-cpu
