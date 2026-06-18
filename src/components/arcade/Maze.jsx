import React, { useState, useEffect } from 'react';
import { MAZE_GRID } from '../../data/mapConfig';
import { PORTFOLIO_DATA } from '../../data/projects'; 
import '../../App.css';
import Modal from '../ui/Modal'; 

const Maze = () => {
  const CELL_SIZE = 25;

  const findInitialPositions = () => {
    let player = { x: 1, y: 1 };
    let ghostStates = {};
    MAZE_GRID.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 'P') player = { x, y };
        else if (typeof cell === 'string') {
          ghostStates[cell] = { x, y, homeX: x, homeY: y };
        }
      });
    });
    return { player, ghostStates };
  };

  const [setup] = useState(findInitialPositions());
  const [playerPos, setPlayerPos] = useState(setup.player);
  const [ghosts, setGhosts] = useState(setup.ghostStates);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [unlockedSections, setUnlockedSections] = useState(new Set()); 
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [eatenDots, setEatenDots] = useState(new Set());

  useEffect(() => {
    if (selectedProject) return;
    const moveInterval = setInterval(() => {
      setGhosts(prev => {
        const next = { ...prev };
        const dirs = [{x:0, y:-1}, {x:0, y:1}, {x:-1, y:0}, {x:1, y:0}];
        for (const id in next) {
          const g = next[id];
          const randomDir = dirs[Math.floor(Math.random() * dirs.length)];
          const nX = g.x + randomDir.x;
          const nY = g.y + randomDir.y;
          const dist = Math.abs(nX - g.homeX) + Math.abs(nY - g.homeY);
          if (MAZE_GRID[nY] && MAZE_GRID[nY][nX] === 0 && dist <= 2) {
            next[id] = { ...g, x: nX, y: nY };
          } else {
            const diffX = g.homeX - g.x;
            const diffY = g.homeY - g.y;
            next[id] = { ...g, x: g.x + (diffX !== 0 ? Math.sign(diffX) : 0), y: g.y + (diffY !== 0 ? Math.sign(diffY) : 0)};
          }
        }
        return next;
      });
    }, 1000); 
    return () => clearInterval(moveInterval);
  }, [selectedProject]);

  const handleMove = (dir) => {
    if (selectedProject) return;
    let nX = playerPos.x;
    let nY = playerPos.y;
    let nDir = direction;
    if (dir === 'up') { nY--; nDir = 270; }
    else if (dir === 'down') { nY++; nDir = 90; }
    else if (dir === 'left') { nX--; nDir = 180; }
    else if (dir === 'right') { nX++; nDir = 0; }

    if (MAZE_GRID[nY] && MAZE_GRID[nY][nX] !== 1) {
      setPlayerPos({ x: nX, y: nY });
      setDirection(nDir);

      // --- LOGIQUE POUR MANGER LE POINT ---
      const dotKey = `${nX}-${nY}`;
      if (!eatenDots.has(dotKey)) {
        setEatenDots(prev => new Set(prev).add(dotKey));
      }

      const hit = Object.keys(ghosts).find(id => ghosts[id].x === nX && ghosts[id].y === nY);
      if (hit) {
        setUnlockedSections(prev => new Set(prev).add(hit)); 
        setTimeout(() => setSelectedProject(hit), 100);
      }
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      const k = e.key.toLowerCase();
      if (k === 'arrowup' || k === 'z' || k === 'w') handleMove('up');
      if (k === 'arrowdown' || k === 's') handleMove('down');
      if (k === 'arrowleft' || k === 'q' || k === 'a') handleMove('left');
      if (k === 'arrowright' || k === 'd') handleMove('right');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [playerPos, ghosts, selectedProject, eatenDots]); // Ajout de eatenDots ici

  const isWall = (x, y) => {
    if (y < 0 || y >= MAZE_GRID.length || x < 0 || x >= MAZE_GRID[0].length) return false;
    return MAZE_GRID[y][x] === 1;
  };

  return (
    <div className="game-layout">
      <button className="mission-toggle-btn" onClick={() => setIsMissionOpen(true)}>GOALS</button>
      
      <div className="game-wrapper" style={{ position: 'relative' }}>
        <div className="maze-grid" style={{
          display: 'grid', 
          gridTemplateColumns: `repeat(${MAZE_GRID[0].length}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${MAZE_GRID.length}, ${CELL_SIZE}px)`,
          width: `${MAZE_GRID[0].length * CELL_SIZE}px`,
          gap: '0', 
          position: 'relative'
        }}>
          {MAZE_GRID.map((row, y) => 
            row.map((cell, x) => {
              const wallStyle = cell === 1 ? {
                  borderTop: isWall(x, y - 1) ? 'none' : '2px solid #2196f3',
                  borderBottom: isWall(x, y + 1) ? 'none' : '2px solid #2196f3',
                  borderLeft: isWall(x - 1, y) ? 'none' : '2px solid #2196f3',
                  borderRight: isWall(x + 1, y) ? 'none' : '2px solid #2196f3',
              } : {};

              // --- VÉRIFIER SI LE POINT A ÉTÉ MANGÉ ---
              const isEaten = eatenDots.has(`${x}-${y}`);

              return (
                <div key={`${x}-${y}`} className={`cell ${cell === 1 ? 'wall-block' : ''}`} style={wallStyle}>
                  {(cell === 0 || cell === 'P' || typeof cell === 'string') && !isEaten && <div className="dot" />}
                </div>
              );
            })
          )}

          <div className="entity-container" style={{
            transform: `translate(${playerPos.x * CELL_SIZE}px, ${playerPos.y * CELL_SIZE}px)`,
            transition: 'transform 0.15s linear'
          }}>
            <div className="player-sprite" style={{ transform: `rotate(${direction}deg)` }}>
              <div className="pacman-mouth"></div>
            </div>
          </div>

          {Object.entries(ghosts).map(([id, pos]) => (
            <div key={id} className="entity-container" style={{
              transform: `translate(${pos.x * CELL_SIZE}px, ${pos.y * CELL_SIZE}px)`,
              transition: 'transform 0.6s ease-in-out'
            }}>
              <div className="ghost" style={{ 
                backgroundColor: PORTFOLIO_DATA[id].color, 
                boxShadow: id === 'Me' ? `0 0 25px #ff0000` : `0 0 15px ${PORTFOLIO_DATA[id].color}` 
              }}>
                {id === 'Me' && (
                  <div className="ghost-glasses">
                    <div className="lens"></div>
                    <div className="bridge"></div>
                    <div className="lens"></div>
                  </div>
                )}
                <div className="ghost-eyes"><div className="eye"></div><div className="eye"></div></div>
                <div className="ghost-skirt" style={{ backgroundColor: PORTFOLIO_DATA[id].color }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mobile-controls">
          <button className="ctrl-btn up" onClick={() => handleMove('up')}>▲</button>
          <div className="side-btns">
            <button className="ctrl-btn left" onClick={() => handleMove('left')}>◀</button>
            <button className="ctrl-btn down" onClick={() => handleMove('down')}>▼</button>
            <button className="ctrl-btn right" onClick={() => handleMove('right')}>▶</button>
          </div>
        </div>
      </div>

      <div className={`mission-sidebar ${isMissionOpen ? 'open' : ''}`}>
        <h3>MISSIONS</h3>
        <ul>
          {Object.keys(PORTFOLIO_DATA).map(id => (
            <li key={id} style={{ color: unlockedSections.has(id) ? PORTFOLIO_DATA[id].color : '#444' }}>
              {unlockedSections.has(id) ? '[X]' : '[ ]'} {PORTFOLIO_DATA[id].title}
            </li>
          ))}
        </ul>
        
        {/* DOT SCORE POUR LE FUN */}
        <div style={{ marginTop: '20px', color: '#facc15', fontSize: '10px', textAlign: 'center' }}>
          DOTS: {eatenDots.size}
        </div>

        <button className="mobile-close-btn" onClick={() => setIsMissionOpen(false)}>BACK TO GAME</button>
      </div>

      {selectedProject && <Modal projectId={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default Maze;