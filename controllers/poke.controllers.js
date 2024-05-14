import service from '../services/poke.services.js'

const getPokemons = async (req,res) => {
    const pokemons = await service.getPokemons()
    res.send(pokemons)
}

const getPokemonsByName = async (req,res) => {
    const {name} = req.params
    const pokemon = await service.getPokemonsByName(name)
    res.send(pokemon)
}

export default {
    getPokemons,
    getPokemonsByName
}