import service from '../services/poke.services.js'

const getPokemons = async (req,res) => {
    const pokemons = await service.getPokemons()
    res.send(pokemons)
}

const getPokemonsByName = async (req,res) => {
    try {
        const {name} = req.params
        const pokemon = await service.getPokemonsByName(name)
        res.send(pokemon)
    } catch (error) {
        console.log("error :"+error);
        res.send({statuscode:401, message:"No se encontro al pokemon buscado."})
    }
  
}

export default {
    getPokemons,
    getPokemonsByName
}