import model from '../models/poke.models.js '

const getPokemons = async () => {
    const pokemons = await model.getPokemons()
    return pokemons
}

const getPokemonsByName = async (name) => {
    const pokemon = await model.getPokemonsByName(name)
    return pokemon
}

export default {
    getPokemons,
    getPokemonsByName
}