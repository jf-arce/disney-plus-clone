import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { getDisneyMovies,getPixarMovies,getMarvelMovies } from "../../api/getData";
import { CarouselMovies } from "../CarouselMovies/CarouselMovies";
import { CardsMovies } from "../Cards/CardsMovies";

export const CategoriePage = () => {
    const { categorie } = useParams();
    const [movies, setMovies] = useState([]);
    const [brandCategorie, setbrandCategorie] = useState({});
    const [opacityVideo, setOpacityVideo] = useState({opacity: 1})
    const [opacityImg, setOpacityImg] = useState({opacity: 0})
    const [opacityScroll, setOpacityScroll] = useState({})
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
        const handleOpacityScroll = () => {
            const scrollY = window.scrollY
            const heightVideo = videoRef.current.clientHeight
            console.log("scrolly:", scrollY);
            console.log("HeightVideo:",heightVideo);
            
            let opacityScroll = 1 - ((scrollY * 1.1) / heightVideo)
            opacityScroll = Math.max(0.2, opacityScroll); // Asegura que el valor no sea menor que 0.2
        
            console.log("Opacidad:",opacityScroll);
    
            setOpacityScroll({
                opacity: opacityScroll,
                // transition: "opacity 300ms linear"
            })
        }
        window.addEventListener('scroll', handleOpacityScroll)

        return () => {
            window.removeEventListener('scroll', handleOpacityScroll);
        };
    },[])

  return (
    <main className="text-white relative">
        <div className="transition-all duration-300" style={opacityScroll}>
            <div className="fixed top-0 z-20">
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

