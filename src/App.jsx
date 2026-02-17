import React from 'react'
import Maze from './components/arcade/Maze'
import './App.css'

function App() {
  return (
    <div className="app-main-container">
      <header className="game-header">
        <h1>KRIS-EVAN PORTFOLIO</h1> 
      </header>
      
      <main className="game-body">
        <Maze />
      </main>

      <footer className="game-footer">
        <p>© 2026 Kris-Evan N'GUESSANT • Software Engineering Student</p>
      </footer>
    </div>
  )
}

export default App