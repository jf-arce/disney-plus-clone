import { Link, useNavigate } from 'react-router-dom'
import { HeroSubscription } from '../../components/HeroSubscription/HeroSubscription'
import './DisneySubscriptionPage.css'
import { ButtonPrimary } from '../../components/Buttons/ButtonPrimary'
import { ButtonLogIn } from '../../components/Buttons/ButtonLogIn'
import { useEffect } from 'react'

export const DisneySubscriptionPage = () => {
  const isLogged = localStorage.getItem("isLogged");
  const navigate = useNavigate();

  useEffect(() => {
    isLogged === 'true' && navigate('/home');
  },[])
  
  return (
    <div className='bg-[#040714] '>
      <header className={`h-20 fixed top-0 w-full px-[36px]`}>
        <nav className='h-full flex items-center'>
          <Link to="/home" className="hidden bg-[url('/assets/img/logo.svg')] min-h-[40px] min-w-[69px] sm:min-h-[48px] sm:min-w-[79px] bg-no-repeat bg-cover bg-center"></Link>
          <ul className='h-full flex items-center justify-end w-full gap-4'>
            <li className='hidden'>
              <ButtonPrimary text="SUSCRIBITE AHORA"/>
            </li>
            <li>
              <ButtonLogIn/>
            </li>
          </ul>
        </nav>
      </header>
      <main className=''>
        <HeroSubscription/>
      </main>
      
    </div>
  )
}
