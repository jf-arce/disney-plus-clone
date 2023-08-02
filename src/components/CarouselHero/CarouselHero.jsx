import Slider from "react-slick";
import "./CarouselHero.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getDisneyPlusMovies, getLogoMovies } from "../../api/getData";

export const CarouselHero = () => {
  const [active, setActive] = useState(true);
  const [disneyPlusMovies, setDisneyPlusMovies] = useState([]);
  const [logos, setLogos] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const movies = await getDisneyPlusMovies();
        setDisneyPlusMovies(movies);

        const movieIds = movies.map((movie) => movie.id);
        
        const logosPromises = movieIds.map((id) => getLogoMovies(id));

        const logosData = await Promise.all(logosPromises);
        setLogos(logosData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])
  const settings = {
    centerMode: true,
    centerPadding: "80px",
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: () => setActive(false),
    afterChange: () => setActive(true),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerPadding: "15px",
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          className: "center",
          centerPadding: "15px",
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="mt-0 mb-4 lg:mt-10 lg:mb-7">
      <Slider {...settings}>
        {/* {disneyPlusMovies.map((movie,index) =>(
          <SlideItem
            key={movie.id}
            slide={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            active={active}
            slideTitle={`https://image.tmdb.org/t/p/w500${logos[index]}`}
            alt={movie.title}
            text=""
            id={movie.id}
            name={movie.name}
          />
        ))} */}
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B338B14C62DD92AE6BA23119CBA3EDF22BBEBC042BB3943FB927A23E46B7BD5/scale?width=1440&aspectRatio=3.91&format=jpeg"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1F879C1A1279415A3F826E3F958E47C26C218F70CA0E9703DF82D69DEB03A25E/scale?width=1440&aspectRatio=3.91&format=png"
          alt="guardianes de la galaxia"
          text=""
          id={447365}
          name='guardians-of-the-galaxy-vol-3'
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A7DC0DC13E03EB11D2EB3630FD49A33A05588087DD912708612F6A69A9AF7BE3/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A2AD684E19E92013F370070D1C55937DD2A6500613C3DAED683EED7A08651F34/scale?width=1440&aspectRatio=3.91&format=png"
          alt="pinocho"
          text=""
          id={532639}
          name="pinocho"
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2F94575A2824C9CBE080F1CB6FC1A2F0142C1DAD7395E5DB9DCE0CA8DFF6E355/scale?width=1440&aspectRatio=3.91&format=jpeg"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9CEE73800586603D8C129EB5CC77AD7705E0DC92837C3D43A324AF08E51A138A/scale?width=1440&aspectRatio=3.91&format=png"
          alt="encanto"
          text=""
          id={568124}
          name='encanto'
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70B982FC249A92CE10CB111B4A2019AF3ADADF9C39DCD73FF4F5628877209815/scale?width=1440&aspectRatio=3.91&format=jpeg"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BD7CBF4D6EE3FE5D8DB0090B3A90545FB632B19082777F0397253F34FF8F1CD/scale?width=1440&aspectRatio=3.91&format=png"
          alt="avatar"
          text=''
          id={76600}
          name='avatar-the-way-of-water'
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D8221572EAB5E6341DB093D298C0D8CB48639C2FF6BC13BA1ADE0D0E1AA66F4/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/591A155F1D4E0C38B241F2227D3A67B2524CE111F942089924200D8A29E18CEA/scale?width=1440&aspectRatio=3.91&format=png"
          alt="Luca"
          text=''
          id={508943}
          name='luca'
        />
      </Slider>
    </div>
  );
};

function SlideItem({ slide, active, slideTitle, alt, text, id, name }) {
  return (
    <Link to={`/movie/${name}/${id}`}>
      <div className="slide-item focus:outline-none shadow-lg shadow-black lg:mt-[20px]">
          <img src={slide} alt="slide" className="rounded-[4px] w-full h-[190px] lg:h-auto object-cover object-center"/>
          <div className={`absolute top-0 z-20 flex flex-col w-full`}>
            <img
              className={`object-cover object-center opacity-0 ${active && "animate-fade-right"}`}
              src={slideTitle}
              alt={alt}
            />
            <h4 className={`text-white font-bold opacity-0 text-xl ml-16 ${active && "animate-fade-in"}`}><span>{text}</span></h4>
          </div>
      </div>
    </Link>
  );
}

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
