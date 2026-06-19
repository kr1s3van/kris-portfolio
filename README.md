# Kris-Evan Portfolio Arcade

**Live Demo:** [https://kris-portfolio-rho.vercel.app/](https://kris-portfolio-rho.vercel.app/)

An interactive, gamified portfolio inspired by the classic retro arcade era. Instead of a traditional static resume, this project features a custom-built game engine where users explore my background, technical skills, and software projects by navigating through a neon-lit maze.

---

## Project Architecture

This project follows a modular architecture designed to separate game logic, UI rendering, and data management, ensuring high maintainability.

```text
kris-portfolio/
├── public/
│   └── assets/             # Static files (Resume PDF, Project screenshots)
├── src/
│   ├── components/
│   │   ├── arcade/         # Core game engine logic
│   │   │   └── Maze.jsx    # Grid rendering, AI patrol, and player controller
│   │   ├── ui/             # Interactive UI elements
│   │   │   └── Modal.jsx   # Arcade-style project showcases (Modals)
│   │   └── classic/        # Alternative non-gamified view (Coming Soon)
│   ├── data/
│   │   ├── mapConfig.js    # Multi-dimensional matrix for maze layout
│   │   └── projects.js     # Centralized resume data (JSON format)
│   ├── App.jsx             # Global state manager & component router
│   ├── App.css             # Arcade Design System & Global Animations
│   └── main.jsx            # React entry point
├── docs/                   # Technical documentation & algorithm deep-dives
└── package.json            # Dependencies and build scripts
```

---

## 🧠 Technical Challenges & Engineering Solutions

Building a functional game engine within a web browser using React required solving complex DOM reconciliation and graphical rendering issues.

1. The Layering Solution (Solving the "Teleportation" Bug) 🚀

This was the most complex architectural challenge of the project.

The Problem: Initially, entities (the player and ghosts) were rendered inside the CSS grid cells. In React, moving an entity from Cell A to Cell B meant physically destroying the element in one location and recreating it in another.

Consequence: The browser could not "animate" an object that was being destroyed. This resulted in a choppy "teleportation" effect, making smooth movement impossible.

The Solution: I implemented a Layered Architecture:
- Background Layer: A static grid responsible only for walls and decorative dots.
- Entity Layer: A transparent overlay where characters are positioned using Absolute Positioning.

The Engineering Trick: I developed a coordinate-to-pixel conversion algorithm that translates matrix indices (x,y) into actual pixel values (x×25px,y×25px) in real-time. This allowed the use of the CSS transition: transform property, enabling buttery-smooth 60fps movement.

2. Resolving "Transform" Property Conflicts (Wrapping Pattern) ⚔️

The Problem: The ghosts required two simultaneous movements: a constant vertical "floating" animation (CSS-based) and a horizontal/vertical patrol movement (JS-based). In CSS, applying a new transform property completely overwrites the previous one. Therefore, the patrol logic was constantly cancelling out the floating animation.

The Solution: I applied the Wrapping Pattern. Each ghost is encapsulated in a parent container. The parent handles the spatial movement across the map (translate(x, y) via React state), while the child element handles the decorative floating effect (translateY via CSS keyframes). Separating these concerns allowed both transforms to stack seamlessly.

3. Dynamic Collision Detection & Wandering AI 👻

Wandering AI: I designed a constrained "Wandering AI" for the ghosts. Every second, the algorithm:
- Selects a random direction (Up, Down, Left, Right).
- Validates the target cell (checks if it's a path or a wall).
- Manhattan Distance Constraint: To keep ghosts from wandering too far, the system calculates their distance from their "home" coordinates. If they exceed a 2-cell radius, the AI forces a return vector to pull them back.

Dynamic Collision: Unlike a static maze, ghosts are moving targets. I implemented a real-time collision engine that compares the player's current (x,y) state with the changing coordinates of the ghost entity objects to trigger project modals.

## Technical Stack

- React.js: Advanced state management (Hooks) for the game loop.
- CSS3: Keyframe animations, Grid/Flexbox, and Hardware Acceleration (GPU) for fluid rendering.
- Vite: Ultra-fast build tool for optimized performance.
- Logic Matrix: Data-driven level design using multi-dimensional arrays.
- Responsive Design: Custom CSS scaling for mobile accessibility and D-Pad touch controls.

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/kr1s3van/kris-arcade-portfolio.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```
