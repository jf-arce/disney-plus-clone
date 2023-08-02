import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieById,
  getRecommendedMovies,
  getVideoMovies,
  getImageMovies,
  getLogoMovies,
} from "../../api/getData";
import { CarouselMovies } from "../CarouselMovies/CarouselMovies";
import { useCreateItemsMovies } from "../../hooks/useCreateItemsMovies";
import { VideoButtons } from "../VideoButtons/VideoButtons";
import { MovieDetailNav } from "../MovieDetailNav/MovieDetailNav";
import { Loader } from "../Loader/Loader";
import { useLoaderContext } from "../../context/LoaderContext";
import "./MovieDetail.css";
import { useHandleOpacity } from "../../hooks/useHandleOpacity";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [videoMovie, setVideoMovie] = useState([]);
  const [image, setImage] = useState([]);
  const [logo, setLogo] = useState([]);
  const imgRef = useRef();
  const opacity = useHandleOpacity(imgRef);
  const { loadingStatus, isLoading } = useLoaderContext();

  useEffect(() => {
    loadingStatus(true);
    Promise.all([
      getMovieById(movieId),
      getRecommendedMovies(movieId),
      getVideoMovies(movieId),
      getImageMovies(movieId),
      getLogoMovies(movieId),
    ]).then(([movieData, recommendedMoviesData, videoData, imageData, logoData]) => {
      setMovie(movieData);
      setRecommendedMovies(recommendedMoviesData);
      setVideoMovie(videoData);
      setImage(imageData.backdrops[1].file_path);
      setLogo(logoData);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      loadingStatus(false);
    });
  }, [movieId]);
  
  if (isLoading) return <Loader/>

  return (
    <div className="text-white relative h-full flex flex-col justify-evenlys overflow-x-hidden animate-fade">
      <div className="fixed h-full w-full -z-10 top-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={movie.title}
          className="w-full object-cover object-center"
          ref={imgRef}
          style={{opacity: opacity , transition: "opacity 200ms linear 0s"}}
        />
        <div className="bg-decoration"></div>
      </div>
      <article className="relative px-[calc(3.5vw+24px)] flex flex-col gap-7 justify-center">
        <div className="mt-20 mb-8 max-w-[500px] min-w-[280px] lg:max-w-[341px] lg:min-w-[100px] w-[35vw]">
          <img
            src={`https://image.tmdb.org/t/p/w500${logo}`}
            alt={movie.title}
          />
        </div>
        <div className="flex items-center gap-2">
          <img src="/assets/img/cc.png" alt="cc" className="w-7" />
          <span className="text-xs">
            {movie.release_date && movie.release_date.split("-")[0]} •{" "}
            {convertMinutesToHours(movie.runtime)}
          </span>
        </div>
        <div className="flex gap-3 text-xs">
          {movie.genres &&
            movie.genres.map((genero) => <p key={genero.id}>{genero.name}</p>)}
        </div>
        <VideoButtons videoMovie={videoMovie} />
        <div className="max-w-3xl">
          <p className="text-xl">{movie.overview}</p>
        </div>
        <MovieDetailNav />
      </article>
      <div className="mt-3 h-full">
        {
          <CarouselMovies data={recommendedMovies}>
            {useCreateItemsMovies(recommendedMovies)}
          </CarouselMovies>
        }
      </div>
    </div>
  );
};

function convertMinutesToHours(minutes) {
  const hour = Math.floor(minutes / 60);
  const minutesRemaining = minutes % 60;

  const totalHour = `${hour} h ${minutesRemaining} min`;
  return totalHour;
}
