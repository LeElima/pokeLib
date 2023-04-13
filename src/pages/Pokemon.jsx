import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './Pokemon.css';

const Pokemon = () =>{
    const { id } = useParams();
    const[infos, setInfos] = useState(null);
    const[nav, setNav] = useState('Stats')
     function openAbs(cityName){
        var i;
        var x = document.getElementsByClassName("option");
        console.log(x)
        for (i = 0; i < x.length; i++) {
        //   x[i].style.display = "none";  
        }
        // document.getElementById(cityName).style.display = "block";  
      }
    const getInfos = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setInfos(data);
      };

      useEffect(() => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        getInfos(pokemonUrl);
      }, []);
      console.log(infos)
    return(
        <div>
            
            <div>
            {infos && (
                <>
                    <div className="linha">
                        <div className="esquerda quadrado">
                            <div className="fundoImagem">
                                <img src={infos.sprites.front_default} alt="" />
                            </div>
                            <div className="nomePokemon">
                                <h3>{infos.name}</h3>
                                
                            </div>
                            <div className="type">
                                    {infos.types.map((x)=>{
                                        return(
                                            <div className={`pokemon-type ${x.type.name}`}>
                                                <span >{x.type.name}</span>
                                            </div>
                                            
                                        )
                                    })}
                                </div>
                        </div>
                        <div className="direita quadrado" >
                            <div className="stats">
                                <div className="title">Status</div>
                                <div className="linhaStatus">
                                    {infos.stats.map((x)=>{
                                        return (
                                            <div>
                                            <h3>{`${x.stat.name} - ${x.base_stat}`}</h3>
                                            {/* <h3>{x.stat.name}</h3><p>{x.base_stat}</p> */}
                                            
                                            </div>  

                                        )
                                    })}
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className="aba-navegacao">
                        <button onClick={openAbs('Stats')}>Stats</button>
                        <button onClick={openAbs('Moves')}>Moves</button>
                    </div>
                    <div id="Stats" className="option">
                    <h2>London</h2>
                    <p>London is the capital city of England.</p>
                    </div>

                    <div id="Moves" className="option" style={{display: "none"}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital of France.</p> 
                    </div>
                    
                    <div className="moves">
                        <div className="title">Moves</div>
                        <div className="list">
                            {infos.moves.map(x=>{
                                return <p>{x.move.name}</p>
                            })}
                        </div>
                    </div>
                </>
                
            ) }
           
            </div>
        </div>
    )
}
export default Pokemon;