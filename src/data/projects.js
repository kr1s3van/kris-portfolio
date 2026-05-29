export const PORTFOLIO_DATA = {
  Me: {
    title: "WHO IS KRIS?",
    color: "#ff0000", 
    image: "/assets/kris-portrait.png",
    description: [
      "Étudiant en Software Engineering @ uOttawa",
      "Passionné par le code et la musique."
    ],
  },
  PRJ: {
    title: "MY PROJECTS",
    color: "#ffb8ff", 
    projects: [
      { name: "UTASTE",
        links: [
          { label: "CHECK IT OUT", url: "" },
       ],
        images: ["/assets/UTASTE-1.png", "/assets/UTASTE-2.png"], 
        desc: "Android terminal for restaurants" },
      { name: "SIFFLO",
        links: [
          { label: "CHECK IT OUT", url: "" },
       ],
        images: ["/assets/sifflo-1.png", "/assets/sifflo-2.png"], 
        desc: "Sifflo is an intelligent web application designed to bridge the gap between musical inspiration and formal notation. Built for musicians, Sifflo captures live audio input, such as whistling or humming, and converts it into professional sheet music in real-time. The core of the application lies in its Digital Signal Processing (DSP) capabilities, featuring a high-performance FastAPI (Python) backend that utilizes Librosa and NumPy for advanced pitch detection and frequency-to-note analysis. The frontend, developed with React.js, integrates VexFlow for dynamic musical engraving and real-time visualization. This project demonstrates my ability to handle low-latency data processing, implement complex mathematical algorithms, and deliver a seamless, full-stack software solution for creative problem-solving." },
      { name: "CARTE CANADIENNE",
        links: [
          { label: "CHECK IT OUT", url: "" },
       ],
        images: ["/assets/carte-canadienne-1.png", "/assets/carte-canadienne-2.png"],
        desc: "Carte Canadienne is an inclusive digital platform developed to streamline accessibility services and support for individuals with disabilities. Built using Next.js and TypeScript, this collaborative project leverages modern web technologies to deliver a high-performance, secure, and accessible user experience. My contributions focused on the application’s infrastructure and security, specifically engineering a robust Admin Authentication module and configuring AWS S3 for scalable cloud storage of platform assets. By implementing Server-Side Rendering (SSR) for optimized performance and Tailwind CSS for a fully responsive design, I helped build a reliable solution that addresses real-world accessibility challenges through a modern and secure tech stack." },
      { name: "UOBUDDY",
        links: [
          { label: "CHECK IT OUT", url: "" },
       ],
        images: ["/assets/uobuddy-1.png", "/assets/uobuddy-2.png"], 
        desc: "AI Matching engine" }
    ]
  },
  SKL: {
    title: "SKILLS & TECHS",
    color: "#00ffff", 
    badges: [
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white",
      "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
      "https://img.shields.io/badge/sql-%2307405e.svg?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
      "https://img.shields.io/badge/oracle-%23F80000.svg?style=for-the-badge&logo=oracle&logoColor=white",
      "https://img.shields.io/badge/xml-%235E97D0.svg?style=for-the-badge&logo=xml&logoColor=white)",
      "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
      "https://img.shields.io/badge/Librosa-Audio-orange?style=for-the-badge",
      "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
      "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
      "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
      "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"

    ] 
  },
  EXP: {
    title: "EXPERIENCES & ADVENTURES",
    color: "#ffb852", 
    experiences: [
      { 
        name: "HACKATHON 8 - uOTTAWA",
        images: ["/assets/hackathon-team.png", "/assets/hackathon-code.png"], 
        desc: "An intense 24-hour sprint. We spent the night coding, pivoting our architecture, and presenting a multi-agent AI engine using Google Gemini." 
      },
      { 
        name: "DESIGN DAY 2025", 
        images: ["/assets/design-day-1.png", "/assets/design-day-2.png"], 
        desc: "I presented our mobile accessibility platform to industry professionals. Great networking and technical feedback." 
      }
    ]
  },
  RES: {
    title: "MY RESUME",
    color: "#2ed573", 
    pdfPath: "/assets/CV_Kris-Evan.pdf",
    link: "/assets/CV_Kris-Evan.pdf",
    description: ["Review my full technical background below."]
  },
  CON: {
    title: "CONTACT ME",
    color: "#a020f0",
    links: [
      { label: "EMAIL ME", url: "mailto:bnque079@uottawa.ca" },
      { label: "LINKEDIN", url: "https://www.linkedin.com/in/kris-evan-n%E2%80%99gu%C3%A9ssant-b0124b336/" }
    ],
    description: ["Feel free to reach out for collaborations, questions, or just to say hi! :3"],
  }
};

/*note a moi meme(IDÉES FUTURES):
Ajouter le curseur intuitif
custom les fantomes  

Documentation : Système de Patrouille des Fantômes
1. Objectif
Rendre le labyrinthe dynamique en permettant aux fantômes (représentant les sections du CV) de patrouiller de manière autonome dans le labyrinthe, tout en restant interactifs.

2. Défis Techniques & Problèmes rencontrés
A. Le conflit des "Transforms" (CSS War)
Problème : Initialement, les fantômes avaient une animation CSS de "flottement" (translateY). Lorsque nous avons essayé d'ajouter le mouvement de patrouille via React (translate(x, y)), l'animation CSS écrasait le mouvement JS. En CSS, on ne peut pas appliquer deux propriétés transform indépendantes sur un même élément sans qu'elles ne se battent.
Solution : Utilisation du "Wrapping Pattern". Nous avons créé une div parente (le container d'entité) qui gère le déplacement sur la grille, et une div enfant (le sprite) qui gère l'animation de flottement.
B. L'effet de "Téléportation" (Mouvement saccadé)
Problème : En rendant les fantômes à l'intérieur des cellules de la grille (MAZE_GRID.map), le fantôme était supprimé du DOM à la case A et recréé à la case B. Cela rendait toute transition CSS impossible.
Solution : Implémentation d'une Architecture par Couches (Layering).
Une couche de fond pour la grille (statique).
Une couche supérieure pour les entités (Joueur et Fantômes) positionnées en absolute.
Conversion des coordonnées logiques(x,y) en pixels (x×25px,y×25px) pour permettre l'utilisation de transition: transform.
C. Le déphasage Collision/Visuel
Problème : Au début, la collision était détectée sur la MAZE_GRID fixe. Si un fantôme bougeait visuellement, sa "hitbox" restait sur sa case de départ.
Solution : Passage à une Collision Dynamique. Le moteur de jeu compare maintenant en temps réel la position (x,y)
 du joueur avec l'état ghosts (qui stocke les positions actuelles des fantômes) au lieu de lire le tableau de la carte.

 3. Algorithme de Patrouille (Wandering AI)
L'IA des fantômes suit une logique de "marche aléatoire contrainte" :
Intervalle : Chaque seconde, un calcul est lancé pour chaque fantôme.
Choix de direction : Une direction aléatoire (Haut, Bas, Gauche, Droite) est choisie.
Validation :
Le mouvement est autorisé uniquement si la case cible est un chemin (0).
Contrainte de zone : Le fantôme ne peut pas s'éloigner de plus de 2 cases de sa "maison" (coordonnées d'origine).
Retour au bercail : Si le fantôme est bloqué ou hors zone, l'algorithme calcule un vecteur vers sa position d'origine pour le ramener.

4. Stack technique utilisée
React hooks (useState, useEffect) pour la boucle de jeu.
CSS Hardware Acceleration (transform: translate) pour des mouvements fluides à 60fps.
JavaScript Timers pour la gestion de l'IA asynchrone.
*/