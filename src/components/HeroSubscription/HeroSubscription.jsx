import { Link } from "react-router-dom"
import { ButtonPrimary } from "../Buttons/ButtonPrimary"

export const HeroSubscription = () => {
  return (
    <section className='p-[5.6vw] flex bg-bg-inicio min-h-screen bg-no-repeat bg-cover bg-top'> 
      <div className='flex flex-col justify-start items-start w-full md:w-[38%] gap-5 mt-9'>
        <picture className='max-w-xs inline-block'>
          <img src="/assets/img/logo.svg" alt="Disney+ Logo" width="200" height="569" className=''/>
        </picture>
        <h3 className='font-black text-[44px] text-start'>Tus historias favoritas, todas en un mismo lugar.</h3>
        <div className='flex gap-6 w-full h-16'>
          <ButtonPrimary text="CONTRATÁ LA OFERTA COMBO+" className="bg-[#6421ff] hover:bg-[#7539ff]"/>
        </div>
        <Link className="underline text-lg">Suscribirme solo a Disney+</Link>
      </div>
    </section>
  )
}
