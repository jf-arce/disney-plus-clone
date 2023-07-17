import { CardsMovies } from "../Cards/CardsMovies";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const CarouselMovies = ({data,children}) => {

  data.forEach((movie) => {
    console.log(movie);
  });

  console.log(data.length);
  if (data.length == 0) {
      return <div>Cargando datos...</div>;
  }

  const settings = {
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    initialSlide: 0,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    focusOnSelect: true,
  };
  return (
    <div>
      <h4 className="text-white ml-[90px] font-bold text-xl">Recomendaciones para ti</h4>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="arrow right-0" onClick={onClick}>
        <BsChevronRight />
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="arrow left-0" onClick={onClick}>
        <BsChevronLeft />
      </button>
    );
  }