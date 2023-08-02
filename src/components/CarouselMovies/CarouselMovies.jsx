import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const CarouselMovies = ({data,children,title}) => {

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "15px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerPadding: "15px",
        }
      }
    ]
  };
  return (
    <div className="animate-duration-1000">
      <h4 className="text-white sm:ml-[90px] font-bold sm:text-xl text-lg text-center sm:text-start">{title}</h4>
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