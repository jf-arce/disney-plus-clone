import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { useUserContext } from '../../context/UserContext';

export const Login = () => {

  const { logIn } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    logIn(email.value, password.value);
  };

  return (
    <div className='text-[#f9f9f9]'>
      <nav className='h-[80px] border-b-[1px] border-[#ffffff39] px-6 flex items-center'>
        <Link to="/">
          <img src="/assets/img/logo.svg" className='h-[40px] w-[69px] sm:h-[48px] sm:w-[79px]' alt="" />
        </Link>
      </nav>
      <div className='flex flex-col items-center animate-fade-right duration-100 mt-8 min-h-[700px] gap-6'>
        <form action="" className='w-96 flex flex-col gap-5 m-0 p-6 md:p-0' onSubmit={handleSubmit}>
          <h2 className='font-bold text-[24px]'>Inicia sesión con tu correo y contraseña</h2>
          <p>Debes usar este correo electrónico y contraseña para iniciar sesión en tu cuenta de Disney+ y ver tus series y películas favoritas.</p>
          <input type="email" name='email' className='w-full focus:outline-none p-3 bg-[#31343E] rounded-[4px]'placeholder="Correo Electrónico" required/>
          <input type='password' name='password' className='w-full focus:outline-none p-3 bg-[#31343E] rounded-[4px]'placeholder="Contraseña" required/>
          <button type='submit' className='bg-[#0072d2] hover:bg-[#108cf8] text-[#f9f9f9] h-12 rounded-[4px] text-[17px] transition-colors duration-300 uppercase'>Iniciar Sesión</button>
        </form>
        <Link to="/register">¿No tienes cuenta? <span className='underline'>Registrate aquí</span></Link>
      </div>
      <Footer/>
    </div>

  )
}

