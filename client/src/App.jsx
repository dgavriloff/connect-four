import { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [winner, setWinner] = useState(0)
  const [resetBoard, setResetBoard] = useState(false)
  const [currGrid, setCurrGrid] = useState(undefined)

  const onWin = (winner) => {
    setWinner(winner)
  }
  const newGame = (setGrid) => {
    setWinner(0)
    setResetBoard(true)
  }

  const getGrid = (grid) => {
    setCurrGrid(grid)
  }

  return (
    <div className='main'>
      {winner === 0? '' : <div><h1>Winner is {winner}</h1><button onClick={newGame}>Play Again</button></div>}
      <div className='body'>
        <Board rows={6} cols={9} winNum={4} onWin={onWin} reset ={resetBoard} setReset={setResetBoard} getGrid={getGrid}/>
      </div>
    </div>
  )
}

export default App
