export default function ({fill}) {
  
  let tileStyle = {}
  
  if(fill == 1)
    tileStyle = {
      background: 'url("../../public/1-piece.png")',
      backgroundSize: 'cover',
    }
  else if(fill == 2)
    tileStyle = {
      background: 'url("../../public/2-piece.png")',
      backgroundSize: 'cover',
    }

  
  return (
    <div style={tileStyle} className="tile"></div>
  )
}