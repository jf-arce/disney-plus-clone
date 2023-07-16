import { CarouselHero } from "../../components/CarouselHero/CarouselHero"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Categories } from "../../components/Categories/Categories";
import { CarouselMovies } from "../../components/CarouselMovies/CarouselMovies";

export const HomePage = () => {
  return (
    <div className=" min-h-screen relative">
      <CarouselHero/>
      <div className="">
        <Categories/>
        <section className="mt-6">
          <CarouselMovies/>
          <CarouselMovies/>
        </section>
       

      </div>
      
    </div>
  )
}
