import { useNavigate } from 'react-router-dom'
import { HeroSubscription } from '../../components/HeroSubscription/HeroSubscription'
import './DisneySubscriptionPage.css'
import { useEffect } from 'react'

export const DisneySubscriptionPage = () => {
  const isLogged = localStorage.getItem("isLogged");
  const navigate = useNavigate();

  useEffect(() => {
    isLogged === 'true' && navigate('/home');
  },[])
  
  return (
    <main className='bg-[#040714]'>
      <HeroSubscription/>
    </main>
  )
}
