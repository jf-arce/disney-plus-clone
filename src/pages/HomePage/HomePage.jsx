import { CarouselHero } from "../../components/CarouselHero/CarouselHero"
import "slick-carousel/slick/slick.css"; 
import { Categories } from "../../components/Categories/Categories";
import { CarouselMovies } from "../../components/CarouselMovies/CarouselMovies";

export const HomePage = () => {
  return (
    <div className=" min-h-screen relative">
      <CarouselHero/>
      <div className="">
        <Categories/>
        <CarouselMovies/>
        <CarouselMovies/>
        <CarouselMovies/>
        <CarouselMovies/>
      </div>
      
    </div>
  )
}
