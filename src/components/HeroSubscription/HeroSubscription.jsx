import { ButtonPrimary } from "../Buttons/ButtonPrimary"

export const HeroSubscription = () => {
  return (
    <section className='p-[5.6vw] flex bg-bg-mobile md:bg-bg-inicio min-h-screen bg-no-repeat bg-cover bg-top items-center md:items-start'> 
      <div className='flex flex-col justify-start items-center md:items-start w-full md:w-[38%] gap-8 mt-9'>
        {/* <div className="bg-bg-mobile bg-no-repeat bg-center bg-cover w-full h-32">

        </div> */}
        <picture className='max-w-xs inline-block'>
          <img src="/assets/img/logo.svg" alt="Disney+ Logo" className="w-[150px] md:w-[200px]"/>
        </picture>
        <h3 className='font-black text-[25px] md:text-[44px] text-center md:text-start'>Tus historias favoritas, todas en un mismo lugar.</h3>
        <div className='flex gap-6 w-full h-16'>
          <ButtonPrimary text="Login" url="/login" className="bg-[#6421ff] hover:bg-[#7539ff]"/>
        </div>
      </div>
    </section>
  )
}
