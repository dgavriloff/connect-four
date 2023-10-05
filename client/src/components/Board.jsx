import { useState, useEffect } from 'react'
import checkBoard from '../scripts/checkBoard'
import Column from './Column'


import './Board.css'


export default function( {rows, cols, winNum, onWin, reset, setReset}) {
  const [selected, setSelected] = useState(0)
  const [turn, setTurn] = useState(1)
  const [grid, setGrid] = useState(new Array(cols).fill(new Array(rows).fill(0))) // r1, r2, r3
  const [winner, setWinner] = useState(0)
  const [resetCol, setResetCol] = useState(false)


  useEffect(() => {
    setGrid(new Array(cols).fill(new Array(rows).fill(0)))
    setTurn(1)
    setWinner(0)
    setResetCol(reset)
    setReset(false)
  },[reset])
  
  useEffect(() => {
    const won = checkBoard(grid, winNum, turn)
    
    if(won !== 0){
      onWin(won)
      setWinner(won)
    }
    turn === 1 ? setTurn(turn + 1) : setTurn(turn - 1)
  }, [grid])


  const enterCol = (id) => {
    setSelected(id)
  }
  const clickCol = (id, pos) => {
    if(pos < 0 || winner !== 0)
      return
    setGrid(grid.map((col, i) => i != id ? col : col.map((tile, j) => j != pos ? tile : tile + turn)))
  }

  return (
        <div className='board'>
          
          {grid.map((col, i) =>  
            <Column onMouseEnter={enterCol} key={i} id={i} col={grid[i]} 
            clickCol={clickCol} colSize = {rows-1} reset={resetCol} setReset={setResetCol} turn={turn}/>)}
          
        </div>
    
  )
}