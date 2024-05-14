import express from 'express'
import controller from '../controllers/poke.controllers.js'

const route = express.Router()

route.get("/pokemons",controller.getPokemons)
route.get("/pokemons/:name",controller.getPokemonsByName)

export default route