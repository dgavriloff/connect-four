const checkVertical = (grid, x, y, winNum, inSeq, turn) => {
  if(inSeq === winNum)
    return turn
  if(x === -1)
    return 0

  if(grid[x][y] === turn)
    return checkVertical(grid, x, y-1, winNum, inSeq + 1, turn)
  else if(y === -1)
    return checkVertical(grid, x - 1, grid[x].length - 1, winNum, 0, turn)
  else
    return checkVertical(grid, x, y-1, winNum, 0, turn)
}

const checkHorizontal = (grid, x, y, winNum, inSeq, turn) => {
  if(inSeq === winNum)
    return turn
  if(y === -1)
    return 0

  if(x === -1)
    return checkHorizontal(grid, grid.length -1, y - 1, winNum, 0, turn)
  else if(grid[x][y] === turn)
    return checkHorizontal(grid, x-1, y, winNum, inSeq + 1, turn)
  else
    return checkHorizontal(grid, x-1, y, winNum, 0, turn)
}

const checkLeftDiag = (grid, x, y, start, winNum, inSeq, turn, down) => {
  if(inSeq === winNum)
    return turn
  if(x === grid.length-1 && y < winNum-1)
    return 0


  if(start === grid.length -1){ 
    return checkLeftDiag(grid, x, y, start - 1, winNum, 0, turn, true)
  }

  if((y === -1 || x === -1) && down)
    return checkLeftDiag(grid, grid.length -1, start - 1, start - 1, winNum, 0, turn, true)
  else if((y === -1 || x === -1) && !down)
    return checkLeftDiag(grid, start + 1, grid[0].length -1, start + 1, winNum, 0, turn, false)
  else if(grid[x][y] === turn){
    return checkLeftDiag(grid, x-1, y-1, start, winNum, inSeq + 1, turn, down)
  }

  else
    return checkLeftDiag(grid, x-1, y-1, start, winNum, 0, turn, down)

}

const checkRightDiag = (grid, x, y, start, winNum, inSeq, turn, down) => {
  if(inSeq === winNum)
    return turn
  if(x === 0 && y < winNum-1)
    return 0
  if(start === 0){ 
    return checkRightDiag(grid, x, grid[0].length-1, grid[0].length-1, winNum, 0, turn, true)
  }

  if((y === -1 || x === grid.length) && down)
    return checkRightDiag(grid, 0, start - 1, start - 1, winNum, 0, turn, true)
  else if((y === -1 || x === grid.length) && !down)
    return checkRightDiag(grid, start - 1, grid[0].length-1, start - 1, winNum, 0, turn, false)
  else if(grid[x][y] === turn){
    return checkRightDiag(grid, x+1, y-1, start, winNum, inSeq + 1, turn, down)
  }

  else
    return checkRightDiag(grid, x+1, y-1, start, winNum, 0, turn, down)

}

const checkBoard = (grid, winNum, turn) => {
  const x = grid.length-1
  const y = grid[0].length-1
  
  return checkVertical(grid, x, y, winNum, 0, turn) 
            || checkHorizontal(grid, x, y, winNum, 0, turn) 
            || checkRightDiag(grid, x-winNum+1, y, x-winNum+1, winNum, 0, turn, false)
            || checkLeftDiag(grid, winNum-1, y, winNum-1, winNum, 0, turn, false)
}

export default checkBoard