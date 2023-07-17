import { CarouselHero } from "../../components/CarouselHero/CarouselHero"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Categories } from "../../components/Categories/Categories";
import { CarouselMovies } from "../../components/CarouselMovies/CarouselMovies";
import { useEffect, useState } from "react";
import { getDisneyMovies,getPixarMovies,getMarvelMovies, getDisneyPlusMovies } from "../../api/getData";
import { CardsMovies } from "../../components/Cards/CardsMovies";


export const HomePage = () => {
  const [MoviesDisney, setMoviesDisney] = useState([]);
  const [MoviesPixar, setMoviesPixar] = useState([]);
  const [MoviesMarvel, setMoviesMarvel] = useState([]);
  const [MoviesDisneyPlus, setMoviesDisneyPlus] = useState([]);

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
    getDisneyPlusMovies().then((data) => {
      setMoviesDisneyPlus(data.results);
      console.log(MoviesDisneyPlus);
    });

  }, []);

  return (
    <div className=" min-h-screen relative">
      <CarouselHero/>
      <Categories/>
      <section className="movies-container mt-6">
        <CarouselMovies data={MoviesDisney} title="Recomendaciones para ti">
          {MoviesDisney.map((movie) => 
            <CardsMovies 
              key={movie.id}
              img={movie.backdrop_path}
              title={movie.title} 
            />
          )}
        </CarouselMovies>
        <CarouselMovies data={MoviesMarvel} title="Novedades en Disney+">
          {MoviesMarvel.map((movie) => 
            <CardsMovies 
              key={movie.id}
              img={movie.backdrop_path}
              title={movie.title} 
            />
          )}
        </CarouselMovies>
        <CarouselMovies data={MoviesPixar} text="Peliculas iconicas">
          {MoviesPixar.map((movie) => 
            <CardsMovies 
              key={movie.id}
              img={movie.poster_path}
              title={movie.title} 
            />
          )}
        </CarouselMovies>
      </section>
    </div>
  )
}
