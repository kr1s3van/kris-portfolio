import React, { useState, useEffect } from 'react';
import { MAZE_GRID } from '../../data/mapConfig';
import Modal from '../ui/Modal'; // Importation de la future fenêtre projet
import '../../App.css';

const Maze = () => {
  // --- 1. TROUVER LA POSITION DE DÉPART 'P' ---
  const findStartPosition = () => {
    for (let y = 0; y < MAZE_GRID.length; y++) {
      for (let x = 0; x < MAZE_GRID[y].length; x++) {
        if (MAZE_GRID[y][x] === 'P') return { x, y };
      }
    }
    return { x: 1, y: 1 }; // Position de secours si 'P' n'est pas trouvé
  };

  // --- 2. ÉTATS (STATES) ---
  const [playerPos, setPlayerPos] = useState(findStartPosition());
  const [direction, setDirection] = useState(0); // Angle de rotation du sprite
  const [selectedProject, setSelectedProject] = useState(null); // État pour la Modal

  // --- 3. LOGIQUE DE MOUVEMENT ET COLLISIONS  ---
  const handleMove = (dir) => {
    if (selectedProject) return; // Empêche de bouger si une Modal est ouverte

    let newX = playerPos.x;
    let newY = playerPos.y;
    let newDir = direction;

    if (dir === 'up') { newY--; newDir = 270; }
    else if (dir === 'down') { newY++; newDir = 90; }
    else if (dir === 'left') { newX--; newDir = 180; }
    else if (dir === 'right') { newX++; newDir = 0; }

    // Vérifier si la nouvelle case est dans la grille et n'est pas un mur (1)
    if (
      newY >= 0 && newY < MAZE_GRID.length &&
      newX >= 0 && newX < MAZE_GRID[0].length &&
      MAZE_GRID[newY][newX] !== 1
    ) {
      setPlayerPos({ x: newX, y: newY });
      setDirection(newDir);

      // --- DÉTECTION DE PROJET ---
      const cellContent = MAZE_GRID[newY][newX];
      if (typeof cellContent === 'string' && cellContent !== 'P') {
        // Petit délai pour laisser le sprite se déplacer visuellement avant d'ouvrir la Modal
        setTimeout(() => {
          setSelectedProject(cellContent);
        }, 100);
      }
    }
  };

  // ÉCOUTEUR DE CLAVIER
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'arrowup' || key === 'z' || key === 'w') handleMove('up');
      else if (key === 'arrowdown' || key === 's') handleMove('down');
      else if (key === 'arrowleft' || key === 'q' || key === 'a') handleMove('left');
      else if (key === 'arrowright' || key === 'd') handleMove('right');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerPos, direction, selectedProject]);

  // --- 4. UTILITAIRE POUR LES MURS LISSES ---
  const isWall = (x, y) => {
    if (y < 0 || y >= MAZE_GRID.length || x < 0 || x >= MAZE_GRID[0].length) return false;
    return MAZE_GRID[y][x] === 1;
  };

  return (
    <>
      <div className="maze-grid" style={{
        gridTemplateColumns: `repeat(${MAZE_GRID[0].length}, 25px)`,
        gridTemplateRows: `repeat(${MAZE_GRID.length}, 25px)`,
        gap: '0',
        margin: '20px auto'
      }}>
        {MAZE_GRID.map((row, y) => 
          row.map((cell, x) => {
            let content = null;
            let wallStyle = {};
            const isPlayerHere = playerPos.x === x && playerPos.y === y;

            // A. Logique des Murs
            if (cell === 1) {
              wallStyle = {
                borderTop: isWall(x, y - 1) ? 'none' : '2px solid #2196f3',
                borderBottom: isWall(x, y + 1) ? 'none' : '2px solid #2196f3',
                borderLeft: isWall(x - 1, y) ? 'none' : '2px solid #2196f3',
                borderRight: isWall(x + 1, y) ? 'none' : '2px solid #2196f3',
              };
            } 
            // B. Logique des Points (Chemin)
            else if (cell === 0 || cell === 'P') {
              content = <div className="dot" />;
            } 
            // C. Logique des Stations Projets
            else if (typeof cell === 'string' && cell !== 'P') {
              content = <span className="station">{cell}</span>;
            }

            return (
              <div 
                key={`${x}-${y}`} 
                className={`cell ${cell === 1 ? 'wall-block' : ''}`}
                style={{
                  ...wallStyle,
                  width: '25px',
                  height: '25px'
                }}
              >
                {/* Priorité d'affichage : Joueur > Station > Point */}
                {isPlayerHere ? (
                  <div 
                    className="player-sprite" 
                    style={{ transform: `rotate(${direction}deg)` }}
                  >
                    <div className="pacman-mouth"></div>
                  </div>
                ) : (
                  content
                )}
              </div>
            );
          })
        )}
      </div>

      {/* --- 5. CONTRÔLES MOBILES (TACTILE) --- */}
      <div className="mobile-controls">
        <button className="ctrl-btn up" onClick={() => handleMove('up')}>▲</button>
        <div className="side-btns">
          <button className="ctrl-btn left" onClick={() => handleMove('left')}>◀</button>
          <button className="ctrl-btn down" onClick={() => handleMove('down')}>▼</button>
          <button className="ctrl-btn right" onClick={() => handleMove('right')}>▶</button>
        </div>
      </div>

      {/* --- 6. AFFICHAGE DE LA MODAL PROJET --- */}
      {selectedProject && (
        <Modal 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Maze;