import Slider from "react-slick";
import "./CarouselHero.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CarouselHero = () => {
  const [active, setActive] = useState(null);

  const settings = {
    centerMode: true,
    centerPadding: "80px",
    // dots: true,
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
  };

  return (
    <div className="my-10">
      <Slider {...settings}>
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A7DC0DC13E03EB11D2EB3630FD49A33A05588087DD912708612F6A69A9AF7BE3/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A2AD684E19E92013F370070D1C55937DD2A6500613C3DAED683EED7A08651F34/scale?width=1440&aspectRatio=3.91&format=png"
          alt="pinocho"
          text=""
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2F94575A2824C9CBE080F1CB6FC1A2F0142C1DAD7395E5DB9DCE0CA8DFF6E355/scale?width=1440&aspectRatio=3.91&format=jpeg"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9CEE73800586603D8C129EB5CC77AD7705E0DC92837C3D43A324AF08E51A138A/scale?width=1440&aspectRatio=3.91&format=png"
          alt="encanto"
          text=""
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6601E6C91C71C781E6C73043CEA69B6A37CE120471E9442FA6502A4EDBB21BAA/scale?width=1440&aspectRatio=3.91&format=jpeg"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5243B8071ABDDE0F25CE3CEA72006204D44930D99A60A9BBF5ACBB451733E67C/scale?width=1440&aspectRatio=3.91&format=png"
          alt="cars"
          text="asdasdasd"
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70B982FC249A92CE10CB111B4A2019AF3ADADF9C39DCD73FF4F5628877209815/scale?width=1440&aspectRatio=3.91&format=jpeg"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BD7CBF4D6EE3FE5D8DB0090B3A90545FB632B19082777F0397253F34FF8F1CD/scale?width=1440&aspectRatio=3.91&format=png"
          alt="avatar"
          text=''
        />
        <SlideItem
          slide="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D8221572EAB5E6341DB093D298C0D8CB48639C2FF6BC13BA1ADE0D0E1AA66F4/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391"
          active={active}
          slideTitle="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/591A155F1D4E0C38B241F2227D3A67B2524CE111F942089924200D8A29E18CEA/scale?width=1440&aspectRatio=3.91&format=png"
          alt="Luca"
          text=''
        />
      </Slider>
    </div>
  );
};

function SlideItem({ slide, active, slideTitle, alt, text }) {
  return (
    <div className="slide-item focus:outline-none shadow-lg shadow-black my-[20px]">
      <Link>
        <img src={slide} alt="slide" className="rounded-[4px] w-full"/>
        <div className={`absolute top-0 z-20 flex flex-col`}>
          <img
            className={`object-cover object-center opacity-0 ${active && "animate-fade-right"}`}
            src={slideTitle}
            alt={alt}
          />
          <h4 className={`text-white font-bold opacity-0 text-xl ml-16 ${active && "animate-fade-in"}`}><span>{text}</span></h4>
        </div>
      </Link>
    </div>
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
