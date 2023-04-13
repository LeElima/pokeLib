import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './PokemonCard.css';
const PokemonCard =(pokemon) =>{
    return(
        <div className="poke-card">
            <div className="number">
                <h2>Nº{pokemon.pokemon.id}</h2>
            </div>
            <div className="poke-sprite">
                <img loading="lazy" src={pokemon.pokemon.sprites.front_default} alt="" />
            </div>
            <div className="poke-name">
                <Link to={`/Pokemon/${pokemon.pokemon.id}`} >{pokemon.pokemon.name}</Link>
            </div>  
            <div className="poke-type">
                {pokemon.pokemon.types.map((type)=>{
                    return(
                        <div className={`pokemon-type ${type.type.name}`}>
                            <span>{type.type.name}</span>
                        </div>
                    )
                })}
            </div>
                
                
        </div>      
    )
}
export default PokemonCard