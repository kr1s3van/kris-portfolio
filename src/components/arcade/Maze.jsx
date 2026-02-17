import React from 'react';
import { MAZE_GRID } from '../../data/mapConfig';
import '../../App.css'; // style

const Maze = () => {
  // Fonction pour vérifier si une case est un mur
  const isWall = (x, y) => {
    if (y < 0 || y >= MAZE_GRID.length || x < 0 || x >= MAZE_GRID[0].length) return false;
    return MAZE_GRID[y][x] === 1;
  };

  return (
    <div className="maze-grid" style={{
      gridTemplateColumns: `repeat(${MAZE_GRID[0].length}, 25px)`,
      gap: '0', // 0 GAP POUR QUE LES MURS SE TOUCHENT
      margin: '0 auto'
    }}>
      {MAZE_GRID.map((row, y) => 
        row.map((cell, x) => {
          let content = null;
          let wallStyle = {};

          if (cell === 1) {
            // DÉTECTION DES VOISINS pour masquer les bordures internes
            wallStyle = {
              borderTop: isWall(x, y - 1) ? 'none' : '2px solid #2196f3',
              borderBottom: isWall(x, y + 1) ? 'none' : '2px solid #2196f3',
              borderLeft: isWall(x - 1, y) ? 'none' : '2px solid #2196f3',
              borderRight: isWall(x + 1, y) ? 'none' : '2px solid #2196f3',
            };
          } else if (cell === 0) {
            content = <div className="dot" />;
          } else if (typeof cell === 'string' && cell !== 'P') {
            content = <span className="station">{cell}</span>;
          }

          return (
            <div 
              key={`${x}-${y}`} 
              className={`cell ${cell === 1 ? 'wall-block' : ''}`}
              style={cell === 1 ? wallStyle : {}}
            >
              {content}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Maze;