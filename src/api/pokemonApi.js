import axios from 'axios';
//axios no necesita deserializar el json del data e respuesta
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})