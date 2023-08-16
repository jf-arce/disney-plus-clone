import { NavSection } from "./NavSection";
import {AiFillHome,AiOutlineSearch,AiOutlinePlus,AiFillStar} from "react-icons/ai";
import {SlOptionsVertical} from 'react-icons/sl'
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { UserNav } from "../UserNav/UserNav";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './NavBar.css';
import { useUserContext } from "../../context/UserContext";

export const NavBar = () => {
  const [hoverUser, setHoverUser] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();
  const [hoverUserMenu, setHoverUserMenu] = useState(false);
  const { user } = useUserContext();
  const currentUser = user.displayName;

  useEffect(() => {
    scrollTo(0,0);
  }, [location]);
 
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
  
  const handleHoverUserMenu = (status) =>{
    setHoverUserMenu(status);
  }
  return (
    <header className={`bg-nav-decoration h-20 fixed top-0 w-full z-[100] transition-all duration-300 ${isScroll ? "bg-[#08070a]" : "bg-transparent"}`}>
      <div className="h-full px-[20px] md:px-[36px] flex justify-between">
        <nav className="flex items-center justify-start h-full gap-8">
          <Link to="/home" className="bg-[url('/assets/img/logo.svg')] min-h-[40px] min-w-[69px] sm:min-h-[48px] sm:min-w-[79px] bg-no-repeat bg-cover bg-center"></Link>
          <ul className="flex text-[#F9F9F9] text-[20px] font-black gap-6 xl:hidden">
            <li>
              <Link to="/home">
                <AiFillHome/>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <AiOutlineSearch/>
              </Link>
            </li>
            <li>
              <Link to="/mylist">
                <AiOutlinePlus/>
              </Link>
            </li>
            <li>
              <Link>
                <SlOptionsVertical/>
              </Link>
            </li>
          </ul>
          <ul className="xl:flex text-[#F9F9F9] text-[13px] font-black hidden">
            <NavSection icon={<AiFillHome className="text-base"/>} url="/home">
              Inicio
            </NavSection>
            <NavSection icon={<AiOutlineSearch className="text-lg"/>} url="/search">
              Búsqueda
            </NavSection>
            <NavSection icon={<AiOutlinePlus className="text-base"/>} url="/mylist">
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
          className="text-white flex items-center justify-end gap-4 md:min-w-[200px] z-40 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className={`text-[15px] uppercase xl:block ${hoverUser || hoverUserMenu ? 'block absolute right-16' : 'hidden'}`}>{currentUser}</h3>
          <div className="bg-[url('/assets/img/jackjack.png')] bg-no-repeat bg-cover bg-center min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]"></div>
        </div>
        <UserNav hoverUser={hoverUser} handleHoverUserMenu={handleHoverUserMenu} />
      </div>
    </header>
  );
};
