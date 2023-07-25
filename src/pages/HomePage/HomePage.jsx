import { CarouselHero } from "../../components/CarouselHero/CarouselHero"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Categories } from "../../components/Categories/Categories";
import { CarouselMovies } from "../../components/CarouselMovies/CarouselMovies";
import { useEffect, useState } from "react";
import { getDisneyMovies,getPixarMovies,getMarvelMovies } from "../../api/getData";
import { useCreateItemsMovies } from "../../hooks/useCreateItemsMovies";

export const HomePage = () => {
  const [MoviesDisney, setMoviesDisney] = useState([]);
  const [MoviesPixar, setMoviesPixar] = useState([]);
  const [MoviesMarvel, setMoviesMarvel] = useState([]);

  useEffect(() => {
    getDisneyMovies().then((data) => {
      setMoviesDisney(data.results);
    });
    getPixarMovies().then((data) => {
      setMoviesPixar(data.results);
    });
    getMarvelMovies().then((data) => {
      setMoviesMarvel(data.results);
    });
  }, []);

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
          {useCreateItemsMovies(MoviesPixar)}
        </CarouselMovies>
      </section>
    </div>
  )
}
