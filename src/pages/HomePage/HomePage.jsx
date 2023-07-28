import { CarouselHero } from "../../components/CarouselHero/CarouselHero"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Categories } from "../../components/Categories/Categories";
import { CarouselMovies } from "../../components/CarouselMovies/CarouselMovies";
import { useEffect, useState } from "react";
import { getDisneyMovies,getPixarMovies,getMarvelMovies } from "../../api/getData";
import { useCreateItemsMovies } from "../../hooks/useCreateItemsMovies";
import { Loader } from "../../components/Loader/Loader";
import { useLoaderContext } from "../../context/LoaderContext";
import { CardsMovies } from "../../components/Cards/CardsMovies";

export const HomePage = () => {
  const [MoviesDisney, setMoviesDisney] = useState([]);
  const [MoviesPixar, setMoviesPixar] = useState([]);
  const [MoviesMarvel, setMoviesMarvel] = useState([]);
  const { loadingStatus,isLoading } = useLoaderContext();

  useEffect(() => {
    loadingStatus(true);
    Promise.all([
      getDisneyMovies(),
      getPixarMovies(),
      getMarvelMovies()
    ]).then(([disneyMoviesData, pixarMoviesData, marvelMoviesData])=>{
      setMoviesDisney(disneyMoviesData.results);
      setMoviesPixar(pixarMoviesData.results);
      setMoviesMarvel(marvelMoviesData.results);
    }).catch((error) => {
      console.log(error);
    }).finally(()=>{
      loadingStatus(false);
    })
  }, []);

  if (isLoading) return <Loader/>
  
  return (
    <div className=" min-h-screen relative">
      <CarouselHero/>
      <Categories/>
      <section className="movies-container mt-6">
        <CarouselMovies data={MoviesDisney} title="Recomendaciones para ti">
          {useCreateItemsMovies(MoviesDisney)}
        </CarouselMovies>
        <CarouselMovies data={MoviesMarvel} title="Novedades en Disney+">
          {useCreateItemsMovies(MoviesMarvel)}
        </CarouselMovies>
        <CarouselMovies data={MoviesPixar} text="Peliculas iconicas">
          {MoviesPixar.map((movie) => (
            <CardsMovies key={movie.id} img={movie.poster_path} title={movie.title} movieId={movie.id}/>
          ))}
        </CarouselMovies>
        <CarouselMovies data={MoviesDisney} title="Novedades en Disney+">
          {useCreateItemsMovies(MoviesDisney)}
        </CarouselMovies>
      </section>
    </div>
  )
}
