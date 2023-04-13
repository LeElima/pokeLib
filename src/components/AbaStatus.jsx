const AbaStatus = (stats) =>{
    console.log(stats)
    return(
        <div>
            {stats.status.map(x=>{
                return(
                    <div>
                        <span>{`${x.stat.name} - ${x.base_stat}`}</span>
                        <br />
                    </div>
                    
                )
            })}
        </div>
    )
}
export default AbaStatus;