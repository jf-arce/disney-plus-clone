import { CarouselHero } from "../../components/CarouselHero/CarouselHero"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Categories } from "../../components/Categories/Categories";
import { CarouselMovies } from "../../components/CarouselMovies/CarouselMovies";
import { useEffect, useState } from "react";
import { getDisneyMovies,getPixarMovies,getMarvelMovies } from "../../api/getData";
import { CardsMovies } from "../../components/Cards/CardsMovies";


export const HomePage = () => {
  const [MoviesDisney, setMoviesDisney] = useState([]);
  const [MoviesPixar, setDataMoviesPixar] = useState([]);
  const [MoviesMarvel, setDataMoviesMarvel] = useState([]);

  useEffect(() => {
    const dataDiney= getDisneyMovies();
    const dataPixar = getPixarMovies();
    const dataMarvel = getMarvelMovies();

    dataDiney.then((data) => {
      setMoviesDisney(data.results);
    });
    dataPixar.then((data) => {
      setDataMoviesPixar(data.results);
    });
    dataMarvel.then((data) => {
      setDataMoviesMarvel(data.results);
    });

  }, []);

  return (
    <div className=" min-h-screen relative">
      <CarouselHero/>
      <Categories/>
      <section className="movies-container mt-6">
        <CarouselMovies data={MoviesDisney}>
          {MoviesDisney.map((movie) => 
            <CardsMovies 
              key={movie.id}
              img={movie.backdrop_path}
              title={movie.title} 
            />
          )}
        </CarouselMovies>
        <CarouselMovies data={MoviesMarvel}>
          {MoviesMarvel.map((movie) => 
            <CardsMovies 
              key={movie.id}
              img={movie.backdrop_path}
              title={movie.title} 
            />
          )}
        </CarouselMovies>
        <CarouselMovies data={MoviesPixar}>
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
