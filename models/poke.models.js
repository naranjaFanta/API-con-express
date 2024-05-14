// const pokemons = async () => {
// const a = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=10")
// const b = await a.json()
// return b.results
// }

const getPokemons = async () => {
    const a = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    const b = await a.json()
    const result = [] 
    for (let i in b.results)
        result.push(b.results[i]);
    
    return result
}

const getPokemonsByName = async (name) => {
    const arr = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await arr.json()
}

export default {
    getPokemons,
    getPokemonsByName
}