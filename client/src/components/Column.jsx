import { useEffect, useState } from "react"
import Tile from "./Tile"

export default function({onMouseEnter, clickCol, id, col, colSize, reset, setReset, turn}) {
  const [style, setStyle] = useState({background : 'white'})
  const [iconStyle, setIconStyle] = useState({background: `url('../../public/${turn}-piece.png')`, backgroundSize: 'cover'})
  const [icon, setIcon] = useState(false)
  const [pos, setPos] = useState(colSize)
  
  useEffect(() => {
    setPos(colSize)
    setReset(false)
  },[reset])

  useEffect(() => {

    console.log('turned', turn)
  },[turn])



  const mouseClicked = () => {
    clickCol(id, pos)
    setPos(pos - 1)
    setIconStyle({
      background: `url('../../public/${turn}-piece.png')`,
      backgroundSize: 'cover',
    })
  }
  
  const mouseEnter = () => {
    setStyle({background: 'gray',})
    onMouseEnter(id)
    setIcon(true)
    console.log('here')
  }

  const mouseLeave = () => {
    setStyle({background: 'white'})
    setIcon(false)
  }


  return (
    <div>
      <div>{icon ? <div style={iconStyle}><Tile /></div> :<div> <Tile /></div>}</div>
      <div className="col" style={style} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseUp={mouseClicked} >
        {col.map((tile, i) => <Tile key={i} fill={tile}/>)}
      </div>
    </div>

  )
}