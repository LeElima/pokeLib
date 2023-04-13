const AbaMoves = (moves) =>{
    return(
        <div>
            {moves.moves.map(x=>{
                return(
                    <div>
                        <span>{x.move.name}</span>
                        <br />  
                    </div>

                )
            })}
        </div>
    )
}
export default AbaMoves;