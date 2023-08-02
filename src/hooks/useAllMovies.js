import { useEffect, useState } from "react"
import { getDisneyMovies, getDisneyPlusMovies, getMarvelMovies, getNationalGeographicMovies, getPixarMovies, getStarWarsMovies } from "../api/getData"

export const useAllMovies = () =>{
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() =>{
        Promise.all([
            getDisneyMovies(),
            getPixarMovies(),
            getMarvelMovies(),
            getStarWarsMovies(),
            getNationalGeographicMovies(),
            getDisneyPlusMovies()
        ]).then(([disneyMovies,pixarMovies,marvelMovies,starWarsMovies,geographicMovies,disneyPlusMovies])=>{
            const moviesCategories = [...disneyMovies,...pixarMovies,...marvelMovies,...starWarsMovies,...geographicMovies,...disneyPlusMovies];
            const filterMoviesRepeat = moviesCategories.filter((movie, index, self) => {
                return index === self.findIndex((m) => m.id === movie.id);
            })
            setAllMovies(filterMoviesRepeat)
        })
    },[])

    return allMovies
}
