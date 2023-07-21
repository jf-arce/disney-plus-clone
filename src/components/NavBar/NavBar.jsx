import { NavSection } from "./NavSection";
import {AiFillHome,AiOutlineSearch,AiOutlinePlus,AiFillStar} from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { UserNav } from "../UserNav/UserNav";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [hoverUser, setHoverUser] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
 
  const handleMouseEnter = () => {
    setHoverUser(true);
  };
  const handleMouseLeave = () => {
    setHoverUser(false);
  };
  
  useEffect(() => {
    const handleScroll = () =>{
      const scrollPositionY = window.scrollY;
      scrollPositionY === 0 ? setIsScroll(false) : setIsScroll(true);
    }
    
    window.addEventListener('scroll', handleScroll);
  }, [isScroll]);
    
  return (
    <header className={`h-20 fixed top-0 w-full z-[100] transition-all duration-300 ${isScroll ? "bg-[#08070a]" : "bg-transparent"}`}>
      <div className="h-full px-[36px] flex justify-between">
        <nav className="flex items-center justify-start h-full">
          <Link to="/" className="bg-[url('/assets/img/logo.svg')] min-h-[48px] min-w-[79px] bg-no-repeat bg-cover bg-center"></Link>
          <ul className="flex text-[#F9F9F9] text-[13px] font-black ml-8">
            <NavSection icon={<AiFillHome className="text-base" />}>
              Inicio
            </NavSection>
            <NavSection icon={<AiOutlineSearch className="text-lg" />}>
              Búsqueda
            </NavSection>
            <NavSection icon={<AiOutlinePlus className="text-base" />}>
              Mi lista
            </NavSection>
            <NavSection icon={<AiFillStar className="text-base" />}>
              Originales
            </NavSection>
            <NavSection icon={<RiMovie2Fill className="text-base" />}>
              Peliculas
            </NavSection>
            <NavSection icon={<PiTelevisionSimpleFill className="text-base" />}>
              Series
            </NavSection>
          </ul>
        </nav>
        <div
          className="text-white flex items-center justify-end gap-4 min-w-[240px] z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="text-[15px]">Nombre</h3>
          <div className="bg-[url('/assets/img/jackjack.png')] bg-no-repeat bg-cover bg-center min-w-[48px] min-h-[48px]"></div>
        </div>
        <UserNav hoverUser={hoverUser} />
      </div>
    </header>
  );
};
