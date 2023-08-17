import { useState } from "react";
import "./UserNav.css";
import {AiOutlinePlus} from "react-icons/ai"
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export const UserNav = ({ hoverUser,handleHoverUserMenu }) => {
  const [hoverUserMenu, setHoverUserMenu] = useState(false);
  const { logOut } = useUserContext(); 

  const handleMouseEnter = () => {
    setHoverUserMenu(true);
    handleHoverUserMenu(true);
  };
  const handleMouseLeave = () => {
    setHoverUserMenu(false);
    handleHoverUserMenu(false);
  };
  const handleLogOut= async ()=>{
    await logOut();
    localStorage.setItem('isLogged', false);
  }
  
  return (
    <div
      className={`${hoverUser || hoverUserMenu ? "flex menu-animation" : "hidden"} 
      bg-[#131313] fixed h-[370px] w-[240px] top-0 right-0 z-20 text-[#d9d9d9d2] 
      border-[1px] border-[#cacaca23] rounded-sm shadow-lg
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`mt-20 w-[80%] m-auto border-t-[1px] border-[#cacaca23] opacity-0 ${hoverUser || hoverUserMenu ? "menu-opacity" : "opacity-0"}`}>
        <div className="flex items-center gap-4 pt-4 cursor-pointer">
          <div className="bg-[#99999943] rounded-[100%] p-3 hover:bg-[#99999965] hover:transition-colors">
            <AiOutlinePlus className="text-white text-2xl"/>
          </div>
          <h4 className="text-[15px]">Crear perfil</h4>
        </div>
        <ul className={`flex flex-col gap-4 mt-5 text-[15px] `}>
          <li>
            <Link to="/custom-profile" className="hover:text-[#e8e8e8]">Editar perfiles</Link>
          </li>
          <li>
            <Link className="hover:text-[#e8e8e8]">Ajustes de la aplicación</Link>
          </li>
          <li>
            <Link className="hover:text-[#e8e8e8]">Cuenta</Link>
          </li>
          <li>
            <Link className="hover:text-[#e8e8e8]">Ayuda</Link>
          </li>
          <li>
            <Link className="hover:text-[#e8e8e8]" onClick={handleLogOut} to="/es-ar">Cerrar sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
