import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './Pokemon.css';

const Pokemon = () =>{
    const { id } = useParams();
    const[infos, setInfos] = useState(null);
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
                                
                                {/* {Object.values(infos.types).map((x)=>{
                                    <p key={x.type}>{x.type}</p>
                                })} */}
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