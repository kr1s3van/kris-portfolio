import React, { useState, useEffect } from 'react';
import Maze from './components/arcade/Maze';
import ClassicView from './components/classic/ClassicView';
import './App.css';

function App() {
  const [isArcadeMode, setIsArcadeMode] = useState(true);

  // Empêcher le scroll uniquement en mode Arcade
  useEffect(() => {
    if (isArcadeMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isArcadeMode]);

  return (
    <div className={`app-main-container ${!isArcadeMode ? 'classic-bg' : ''}`}>
      <button 
        className="view-switch-btn"
        onClick={() => setIsArcadeMode(!isArcadeMode)}
      >
        {isArcadeMode ? "[ CLEAN VIEW ]" : "[ BACK TO GAME ]"}
      </button>
      
      <main className={isArcadeMode ? "game-body" : "classic-body"}>
        {isArcadeMode ? <Maze /> : <ClassicView />}
      </main>

      <footer className="game-footer">
        <p>© 2026 KRIS-EVAN • SOFTWARE ENGINEERING STUDENT</p>
      </footer>
    </div>
  );
}

export default App;