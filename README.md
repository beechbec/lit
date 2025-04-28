# The School for Good and Evil - Interactive Website

This is an interactive web experience inspired by "The School for Good and Evil." Built with Next.js, it features quizzes, character pages, and immersive visuals and audio.

## Features
- **Landing Page:** Hero section, intro, and navigation to all main features.
- **Quiz:** Test your fate with a 10-question quiz to discover if you belong to the School for Good or Evil. Includes background music and a mute/unmute button.
- **Results:** See your school and key traits, with themed visuals and music.
- **Soman's Story:** Learn about the author and his featured works.
- **Legend Unfolds:** Explore the story themes and book highlights.
- **Heroes & Villains:** Browse characters from both schools.
- **Responsive Design:** Optimized for laptop and desktop screens.

## Routing / Pages
- `/` — Home/Landing page
- `/navbar-pages/test-your-fate` — Quiz intro and start
- `/navbar-pages/test-your-fate/quiz` — Interactive quiz
- `/navbar-pages/test-your-fate/results` — Quiz results
- `/navbar-pages/somans-story` — Author and books
- `/navbar-pages/legend-unfolds` — Story themes and book section
- `/navbar-pages/heroes-villains` — Character browser

## Prerequisites
- **Node.js** (v18 or later recommended) must be installed on your system.
  - Download from: https://nodejs.org/
- After installing Node.js, you will have access to the `npm` command.

## Setup & Development
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Assets
- Place custom images and audio in the `/public` directory (e.g., `/public/music-note.svg`, `/public/going-home.mp3`).

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---
Feel free to explore, customize, and expand the magical world!
