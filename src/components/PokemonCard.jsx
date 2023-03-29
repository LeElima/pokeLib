import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../pages/Pokemon.css';
const PokemonCard =(pokemon) =>{
    return(
        <div className="poke-card">
            <div className="number">
                <h2>Nº{pokemon.pokemon.id}</h2>
            </div>
                <img loading="lazy" src={pokemon.pokemon.sprites.front_default} alt="" />
                <Link to={`/Pokemon/${pokemon.pokemon.id}`} >{pokemon.pokemon.name}</Link>
        </div>      
    )
}
export default PokemonCard