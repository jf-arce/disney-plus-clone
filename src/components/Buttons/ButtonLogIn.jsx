import { Link } from "react-router-dom"

export const ButtonLogIn = () => {
  return (
    <Link to="/login" className='bg-black border-[1px] text-[#f9f9f9] border-[#f9f9f9ac] w-44 py-[10px] rounded-[4px] flex justify-center items-center
      hover:bg-[#F9F9F9] hover:text-black transition-colors duration-300 text-lg'>
        INICIAR SESIÓN
    </Link>
  )
}