import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { getDisneyMovies,getPixarMovies,getMarvelMovies } from "../../api/getData";
import { CarouselMovies } from "../CarouselMovies/CarouselMovies";
import { CardsMovies } from "../Cards/CardsMovies";
import './CategoriePage.css';

export const CategoriePage = () => {
    const { categorie } = useParams();
    const [movies, setMovies] = useState([]);
    const [brandCategorie, setbrandCategorie] = useState({});
    const [opacityVideo, setOpacityVideo] = useState({opacity: 1})
    const [opacityImg, setOpacityImg] = useState({opacity: 0})
    const [opacityScroll, setOpacityScroll] = useState(1)
    const videoRef = useRef(null);
    
    const brands = {
        disney:{
            name: 'disney',
            video:'/assets/videos/disney.mp4', 
            hero:'/assets/img/disney-hero.jpeg',
        },
        pixar:{
            name: 'pixar',
            video:'/assets/videos/pixar.mp4', 
            hero:'/assets/img/pixar-hero.jpeg',
        },
        marvel:{
            name: 'marvel',
            video:'/assets/videos/marvel.mp4', 
            hero:'/assets/img/marvel-hero.jpeg',
        }            
    }

    useEffect(() => {
        switch (categorie){
            case 'disney': 
                getDisneyMovies().then((data) => {
                    setMovies(data.results);
                });
                setbrandCategorie(brands.disney);
                break;
            case 'pixar':
                getPixarMovies().then((data) => {
                    setMovies(data.results);
                });
                setbrandCategorie(brands.pixar);
                break;
            case 'marvel':
                getMarvelMovies().then((data) => {
                    setMovies(data.results);
                });
                setbrandCategorie(brands.marvel);
                break;
            default: 
                console.log('NO EXISTE LA CATEGORIA');
        }

    }, [categorie]);

    const handleOpacity = () => {
        setOpacityVideo({
            opacity: 0,
            transition: "opacity 1s ease"
        })
        setOpacityImg({
            opacity: 1,
            transition: "opacity 1s ease"
        })
    }

    useEffect(() => {
        const heightVideo = videoRef.current.clientHeight

        const handleOpacityScroll = () => {
            const scrollY = window.scrollY
            let opacity = 1 - (scrollY * 1.5 / heightVideo)

            opacity = Math.max(0.2, opacity); // Asegura que el valor no sea menor que 0.2
            console.log("scrolly:", scrollY);
            console.log("HeightVideo:",heightVideo);
            console.log("Opacidad:",opacity);
    
            setOpacityScroll(opacity)
        }
        const throttledHandleScroll = throttle(handleOpacityScroll, 100); // Throttle to limit function calls
        window.addEventListener('scroll', throttledHandleScroll);

        return () => {
            window.removeEventListener('scroll', handleOpacityScroll);
        };
    },[])

  return (
    <main className="text-white relative bg-[#1a1d29]">
        <div className="transition-opacity relative" style={{opacity: opacityScroll}}>
            <div className="fixed top-0 z-20 shadow-inset">
                <video src={brandCategorie.video} autoPlay playsInline onEnded={handleOpacity} style={opacityVideo} ref={videoRef} type="video/mp4"/>
            </div>
            <div className="fixed top-0 z-10 w-full">
                <img className="w-full" src={brandCategorie.hero} alt={brandCategorie.name} style={opacityImg} />
            </div>
        </div>
        <div>
            <img className="h-[30vw]" src="/assets/img/scale.png" />
        </div>
        <div className="relative z-30">
            <CarouselMovies data={movies} title="Principales">
                {movies.map((movie) => 
                    <CardsMovies 
                        key={movie.id}
                        img={movie.backdrop_path}
                        title={movie.title} 
                    />
                )}
            </CarouselMovies>
            <CarouselMovies data={movies} title="Peliculas">
                {movies.map((movie) => 
                    <CardsMovies 
                        key={movie.id}
                        img={movie.backdrop_path}
                        title={movie.title} 
                    />
                )}
            </CarouselMovies>
            <CarouselMovies data={movies} title="Series">
                {movies.map((movie) => 
                    <CardsMovies 
                        key={movie.id}
                        img={movie.backdrop_path}
                        title={movie.title} 
                    />
                )}
            </CarouselMovies>
            <CarouselMovies data={movies} title="Series">
                {movies.map((movie) => 
                    <CardsMovies 
                        key={movie.id}
                        img={movie.backdrop_path}
                        title={movie.title} 
                    />
                )}
            </CarouselMovies>
            <CarouselMovies data={movies} title="Series">
                {movies.map((movie) => 
                    <CardsMovies 
                        key={movie.id}
                        img={movie.backdrop_path}
                        title={movie.title} 
                    />
                )}
            </CarouselMovies>
        </div>
    </main>
  )
}

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
}