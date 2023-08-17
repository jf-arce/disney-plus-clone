import { useRef, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import './CustomProfile.css';
import { BsFillPencilFill } from "react-icons/bs";
import { PhotoUser } from "../../components/PhotoUser/PhotoUser";
import { Link } from "react-router-dom";

export const CustomProfile = () => {
    const { updateUserProfile,user } = useUserContext();
    const userName = user.displayName;
    const photoUser = user.photoURL;
    const [click, setclick] = useState(false)
    const imageUserRef = useRef();
    const newNameRef = useRef();

    const handleCustomPhoto = () =>{
        setclick(!click)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(newNameRef.current.value,imageUserRef.current.src);
        updateUserProfile(newNameRef.current.value, imageUserRef.current.src);
        setclick(false);
    }

  return (
    <section className="w-full h-[700px]">
        <div className="max-w-[800px] m-auto p-5 md:mt-52 flex gap-12 justify-center items-center relative flex-wrap">
            <div className="flex flex-col gap-4 flex-1">
                <h1 className="text-2xl text-white">Editar Perfil</h1>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input type='text' ref={newNameRef} name='name' className='text-slate-50 focus:outline-none p-3 bg-[#31343E] rounded-[4px]'placeholder="Nuevo nombre de usuario" required/>
                    <div className="flex gap-7">
                        <button type='submit' className='bg-[#0072d2] hover:bg-[#108cf8] text-[#f9f9f9] w-32 h-12 rounded-[4px] text-[17px] transition-colors duration-300 uppercase'>Listo</button>
                        <Link to="/home" className="bg-[#0072d2] hover:bg-[#108cf8] text-[#f9f9f9] flex justify-center items-center w-32 h-12 rounded-[4px] text-[17px] transition-colors duration-300 uppercase">Cancelar</Link>
                    </div>
                </form>
            </div>
            <div onClick={handleCustomPhoto} className="relative hover:scale-105 transition-all duration-300 animate-fade-down">
                <picture className="cursor-pointer user-img rounded-full">
                    <img src={photoUser} ref={imageUserRef} className="rounded-full h-[180px]" alt="" />
                    <div className="absolute bottom-0 right-0 bg-slate-50 rounded-full p-2 z-50">
                        <BsFillPencilFill/>
                    </div>
                </picture>
            </div>
            <div className={`${click ? "flex" : "hidden"} animate-fade-down duration-75 absolute rounded-md top-96 md:top-60 right-0 bg-[#1a1d29] p-6 justify-center items-center flex-wrap w-full gap-6`}>
                <PhotoUser url="/assets/img/groot.png" imageUserRef={imageUserRef}/>
                <PhotoUser url="/assets/img/jackjack.png"imageUserRef={imageUserRef}/>
                <PhotoUser url="/assets/img/ironman.png" imageUserRef={imageUserRef}/>
                <PhotoUser url="/assets/img/babyyoda.png" imageUserRef={imageUserRef}/>
                <PhotoUser url="/assets/img/mandalorian.png" imageUserRef={imageUserRef}/>
                <PhotoUser url="/assets/img/bu.png" imageUserRef={imageUserRef}/>
                <PhotoUser url="/assets/img/minnie.png" imageUserRef={imageUserRef}/>
                <PhotoUser url="/assets/img/sirenita.png" imageUserRef={imageUserRef}/>
            </div>
        </div>
    </section>
  )
}

