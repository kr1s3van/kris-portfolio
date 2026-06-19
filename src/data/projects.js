export const PORTFOLIO_DATA = {
  Me: {
    title: "WHO IS KRIS?",
    color: "#ff0000", 
    image: "public/assets/Moi3.jpeg", 
    description: [
      "My journey as a developer began with a Nintendo controller in hand. As a lifelong gamer; growing up on Zelda, Smash Bros, and Splatoon (#NintendoForLife); I’ve always been captivated by how digital worlds are built. That curiosity evolved into a passion for software engineering. What I love most about coding is the power to bring my own ideas to life. I thrive on the challenge of materializing a concept and solving the complex puzzles that come with it (even when the bugs get a little frustrating!).",
      "Currently, I am a Software Engineering student @ uOttawa and an Admission Scholarship recipient. I specialize in building robust applications where high-level code meets mathematical logic. By combining engineering rigor with a musician’s mindset, I am driven to develop innovative solutions in AI and Digital Signal Processing (DSP) that are both performant and accessible.",
      "Beyond the terminal, music is my second language. I play the flute traversière, a hobby that has shaped my discipline and attention to detail."
    ],
  },
  PRJ: {
    title: "MY PROJECTS",
    color: "#ffb8ff", 
    projects: [
      
      { name: "UTASTE",
        links: [
          { label: "CHECK IT OUT", url: "https://screenrec.com/share/9UTD25xJlA" },
       ],
        images: ["/assets/Utaste1.png", "/assets/Utaste2.png"], 
        desc: "UTaste is a robust, multi-role Android terminal engineered with Java to streamline restaurant operations between Admins, Chefs, and Waiters. My primary focus was high reliability and system stability; I took full ownership of the software verification lifecycle by authoring comprehensive JUnit test suites for business logic and Espresso scripts for end-to-end UI automation. To ensure a seamless user experience even in unstable network conditions, I utilized SQLite for local data persistence and integrated the Volley API to fetch real-time nutritional data from OpenFoodFacts. This project stands as a testament to my 'quality-first' engineering mindset, delivering a centralized and failure-resilient tool for real-world business coordination.", 
      },
      
      { name: "SIFFLO",
        links: [
          { label: "CHECK IT OUT", url: "https://github.com/kr1s3van/sifflo" },
       ],
        images: ["/assets/Sifflo1.jpeg", "/assets/Sifflo2.jpeg"], 
        desc: "Sifflo is an intelligent web application designed to bridge the gap between musical inspiration and formal notation. Built for musicians, Sifflo captures live audio input, such as whistling or humming, and converts it into professional sheet music in real-time. The core of the application lies in its Digital Signal Processing (DSP) capabilities, featuring a high-performance FastAPI (Python) backend that utilizes Librosa and NumPy for advanced pitch detection and frequency-to-note analysis. The frontend, developed with React.js, integrates VexFlow for dynamic musical engraving and real-time visualization. This project demonstrates my ability to handle low-latency data processing, implement complex mathematical algorithms, and deliver a seamless, full-stack software solution for creative problem-solving." },

      { name: "CARTE CANADIENNE",
        links: [
          { label: "CHECK IT OUT", url: "https://github.com/kr1s3van/CarteCanadienne" },
       ],
        images: ["/assets/CarteCanadienne3.png","/assets/CarteCanadienne5.png", "/assets/CarteCanadienne2.jpeg", "/assets/CarteCanadienne6.png"],
        desc: "Carte Canadienne is an inclusive digital platform developed to streamline accessibility services and support for individuals with disabilities. Built using Next.js and TypeScript, this collaborative project leverages modern web technologies to deliver a high-performance, secure, and accessible user experience. My contributions focused on the application’s infrastructure and security, specifically engineering a robust Admin Authentication module and configuring AWS S3 for scalable cloud storage of platform assets. By implementing Server-Side Rendering (SSR) for optimized performance and Tailwind CSS for a fully responsive design, I helped build a reliable solution that addresses real-world accessibility challenges through a modern and secure tech stack." },

      { name: "UOBUDDY",
        links: [
          { label: "CHECK IT OUT", url: "https://github.com/Tahe-clark/hackaton8" },
       ],
        images: ["/assets/UoBuddy4.png", "/assets/UoBuddy3.png", "/assets/UoBuddy1.jpeg", "/assets/UoBuddy2.png"], 
        desc: "UoBuddy is an intelligent career and community matching platform co-developed during Hackathon 8 to connect uOttawa students with tailored opportunities. I architected a complex multi-agent AI system powered by Google Gemini, designed to analyze student profiles and provide real-time, contextual recommendations. To handle high-volume data streams without bottlenecks, I engineered an event-driven communication layer using the Solace Event Bus, which allowed our backend agents to process data asynchronously and update the UI instantly. Successfully delivering this functional full-stack solution, integrated with Supabase for real-time persistence, within a high-pressure 24-hour deadline demonstrated my ability to design decoupled, scalable architectures and leverage generative AI to solve real-world community challenges." }
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
        images: ["/assets/Hackhaton8-2.jpeg", "/assets/Hackhaton8-4.jpeg", "/assets/Hackhaton8-3.jpeg", "/assets/Hackhaton8-1.jpeg"], 
        desc: "Entering Hackathon 8, I honestly had no idea what to expect. It turned out to be one of the most intense and rewarding experiences of my life (even if I barely slept a wink! Hahaha). It was pure fun and a massive learning curve packed into a single day.This experience gave me a much clearer vision of what it really means to work in a technical team. We definitely had our 'growing pains', navigating Git merge and push conflicts in the middle of the night is an adventure of its own! While we didn't walk away with a trophy, I am incredibly proud of what my amazing team and I accomplished for my first-ever hackathon. In just 24 hours, we brought UoBuddy to life: an AI-powered engine designed to intelligently match students with opportunities. For me, it wasn’t about the prize; it was about the growth, the adrenaline, and the pride of seeing a complex idea materialize from scratch in 24 hours." 
      },
      { 
        name: "DESIGN DAY 2025", 
        images: ["/assets/DesignDay2.jpeg", "/assets/DesignDay3.jpeg", "/assets/DesignDay4.jpeg", "/assets/DesignDay1.jpeg"], 
        desc: "My incredible teammates and I spent an entire semester pouring our hearts and passion into Carte Canadienne, a secure accessibility platform designed to help students with disabilities request academic accommodations. While I was deeply confident in the quality of our product, I was secretly dreading Design Day. I struggle with social anxiety, and the thought of presenting our work to a live audience and a panel of professional judges was terrifying. I was convinced I would freeze or embarrass myself. But when the day finally came, I decided to face my fear. I stood there and proudly presented every feature we had built with so much care. We went in with no expectations other than to show our best work, so we were absolutely blown away when we were announced as the winners of Design Day. It was a massive surprise for the team, but for me, it was something more: it was a victory over my own anxiety. Surmounting that fear to represent my team’s hard work remains one of my proudest moments in my journey as an engineer." 
      }
    ]
  },
  RES: {
    title: "MY RESUME",
    color: "#2ed573", 
    pdfPath: "/assets/Kris-Evan_CV.pdf",
    link: "/assets/Kris-Evan_CV.pdf",
    description: ["Review my full technical background below."]
  },
  CON: {
    title: "CONTACT ME",
    color: "#a020f0",
    links: [ 
      { label: "EMAIL ME", url: "mailto:bnque079@uottawa.ca" },
      { label: "LINKEDIN", url: "https://www.linkedin.com/in/kris-evan-n%E2%80%99gu%C3%A9ssant-b0124b336/" },
      { label: "GITHUB", url: "https://github.com/kr1s3van" }
    ],
    description: ["Feel free to reach out for collaborations, questions, or just to say hi! :3"],
  }
};