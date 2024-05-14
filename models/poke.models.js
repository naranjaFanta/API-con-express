
const getPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    const data = await result.json()
    return data.results
}

const getPokemonsByName = async (name) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await result.json()
    return data
}

export default {
    getPokemons,
    getPokemonsByName
}