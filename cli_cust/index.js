#!/usr/bin/env node

console.log(process.argv)

const printMoves = async (pokemonName) => {
    const response = await fetch(
        `https://pokeapi.com/api/v2/pokemon/${pokemonName}`
    );
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({ move })=> move.name);
    console.log(moves.slice(0, 5));
};

printMoves("pikachu");