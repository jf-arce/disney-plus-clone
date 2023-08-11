import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  getDisneyMovies,
  getPixarMovies,
  getMarvelMovies,
  getStarWarsMovies,
  getNationalGeographicMovies,
} from "../../api/getData";
import { CarouselMovies } from "../CarouselMovies/CarouselMovies";
import { useCreateItemsMovies } from "../../hooks/useCreateItemsMovies";
import { useHandleOpacity } from "../../hooks/useHandleOpacity";
import { useLoaderContext } from "../../context/LoaderContext";
import { Loader } from "../Loader/Loader";
import "./CategoriePage.css";

export const CategoriePage = () => {
  const { categorie } = useParams();
  const [movies, setMovies] = useState([]);
  const [brandCategorie, setbrandCategorie] = useState({});
  const videoRef = useRef(null);
  const imgRef = useRef(null);
  const opacity = useHandleOpacity(imgRef);
  const { loadingStatus, isLoading } = useLoaderContext();

  const brands = {
    disney: {
      name: "disney",
      video: "/assets/videos/disney.mp4",
      hero: "/assets/img/disney-hero.jpeg",
    },
    pixar: {
      name: "pixar",
      video: "/assets/videos/pixar.mp4",
      hero: "/assets/img/pixar-hero.jpeg",
    },
    marvel: {
      name: "marvel",
      video: "/assets/videos/marvel.mp4",
      hero: "/assets/img/marvel-hero.jpeg",
    },
    "star-wars": {
      name: "marvel",
      video: "/assets/videos/star-wars.mp4",
      hero: "/assets/img/star-wars-hero.jpeg",
    },
    "national-geographic": {
      name: "marvel",
      video: "/assets/videos/national-geographic.mp4",
      hero: "/assets/img/national-geographic-hero.jpeg",
    },
  };

  const categoryMap = {
    disney: {
      getMovies: getDisneyMovies,
      brand: brands.disney,
    },
    pixar: {
      getMovies: getPixarMovies,
      brand: brands.pixar,
    },
    marvel: {
      getMovies: getMarvelMovies,
      brand: brands.marvel,
    },
    "star-wars": {
      getMovies: getStarWarsMovies,
      brand: brands["star-wars"],
    },
    "national-geographic": {
      getMovies: getNationalGeographicMovies,
      brand: brands["national-geographic"],
    },
  };

  useEffect(() => {
    const { getMovies, brand } = categoryMap[categorie] || {};
    if (getMovies && brand) {
      loadingStatus(true)
      getMovies().then((data) => {
        setMovies(data || []);
        setbrandCategorie(brand);
      }).catch((e) => {
        console.log(e);
      }).finally(() => {
        loadingStatus(false)
      });
    } else {
      console.log("NO EXISTE LA CATEGORIA");
    }
  }, [categorie]);

  const itemsMovies = useCreateItemsMovies(movies);

  const handleOpacityTransition = () => {
    videoRef.current.style.opacity = 0;
    setTimeout(()=>{
      imgRef.current.style.opacity = opacity;
    },200)
  };

  useEffect(()=>{
    if (videoRef.current && videoRef.current.style && videoRef.current.style.opacity != 0) {
      videoRef.current.style.opacity = opacity;
    }
  },[opacity])

  if (isLoading) return <Loader/>;

  return (
    <div className="text-white relative bg-[#1a1d29]">
      <div className="relative">
        <div className="fixed top-0 shadow-inset">
          <video
            src={brandCategorie.video}
            autoPlay
            muted
            playsInline
            onEnded={handleOpacityTransition}
            ref={videoRef}
            type="video/mp4"
            className="opacity-duration-video"
            style={{ opacity: 1 }}
          />
        </div>
        <div className="fixed top-0 w-full">
          <img
            className="w-full opacity-duration-img"
            src={brandCategorie.hero}
            alt={brandCategorie.name}
            ref={imgRef}
            style={{ opacity: 0 }}
          />
          <div className="bg-opacity"></div>
        </div>
      </div>
      <div>
        <img className="h-[30vw]" src="/assets/img/scale.png" />
      </div>
      <div className="relative z-30">
        <CarouselMovies data={movies} title="Principales">
          {itemsMovies}
        </CarouselMovies>
        <CarouselMovies data={movies} title="Peliculas">
          {itemsMovies}
        </CarouselMovies>
        <CarouselMovies data={movies} title="Series">
          {itemsMovies}
        </CarouselMovies>
        <CarouselMovies data={movies} title="Series">
          {itemsMovies}
        </CarouselMovies>
      </div>
    </div>
  );
};
