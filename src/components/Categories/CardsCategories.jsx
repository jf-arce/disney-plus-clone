import { useState } from "react";
import './CardsCategories.css'
import { Link  } from "react-router-dom";

export const CardsCategories = ({img,video,categorie}) => {
  const [hover, sethover] = useState(false);

  const handleHoverEnter=()=>{
    sethover(true);
  }
  const handleHoverLeave=()=>{
    sethover(false);
  }

  return (
    <Link className="card-show-container md:w-[calc(20%-7px)] hover:scale-[1.05] 
      transition-transform duration-300 h-full flex items-center justify-center flex-wrap"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      to={`/brand/${categorie}`}
      >
      <div className="relative inline-block bg-gradient-to-b from-[#30323e] to-[#1e1f2a] md:m-[6px] m-[3px]
      rounded-[5px] md:rounded-[10px] cursor-pointer shadow-xl shadow-black h-full">
        <img
          src={img}
          alt={categorie}
          className="relative top-0 z-20 object-cover object-center"
        />
        <video src={video}
          autoPlay 
          loop
          muted
          className={`absolute top-0 ${hover? 'opacity-100' : 'opacity-0'} rounded-xl w-full h-full`}
        ></video>
      </div>
    </Link>
    
  );
};
