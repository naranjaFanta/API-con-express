const getPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    const data = await result.json()
    return data.results
}

const getPokemonsByName = async (name) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (result.status === 200) {
        const data = await result.json();
        return data
    }else{
        throw new Error(`No se encontro un pokemon con el nombre ${name}`)
    }
}

export default {
    getPokemons,
    getPokemonsByName
}