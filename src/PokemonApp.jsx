import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { pokemons, page, isLoading } = useSelector((state) => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());
    }, [])


    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>Loading: {isLoading ? "true" : "false"}</span>
            <ul>
                {
                    pokemons.map((pokemon) => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))
                }
            </ul>

            <button disabled={isLoading || page <= 1 ? true : false} onClick={() => dispatch(getPokemons(page - 2))}>Prev</button>
            <button disabled={isLoading ? true : false} onClick={() => dispatch(getPokemons(page))}>Next</button>
        </>
    )
}
