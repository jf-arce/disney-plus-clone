import { Link } from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'
import { AddListButton } from '../AddListButton/AddListButton'
import {HiUserGroup} from 'react-icons/hi'

export const VideoButtons = ({videoMovie, id, bg, title}) => {

  return (
    <div className="flex gap-6 items-center text-[15px] flex-wrap">
      <Link
      to=""
      className="flex justify-center items-center gap-4 bg-[#f4f4f4] hover:bg-[#f9f9f999] text-black font-bold h-[56px] px-4 md:px-[24px] rounded-[3px] uppercase transition-colors"
      >
      <FaPlay className='text-lg'/> Ver Ahora
      </Link>
      <Link
      to={`/movie/video/${videoMovie}`}
      className="bg-[#000000] hover:bg-[#f4f4f4] text-[#f4f4f4] hover:text-[#000000] font-bold h-[56px] px-6 md:px-[24px] rounded-[3px] border-[1px] border-[#f4f4f4] uppercase transition-colors flex justify-center items-center"
      >
      Tráiler
      </Link>
      <AddListButton id={id} bg={bg} title={title}/>
      <div className='cursor-pointer rounded-full bg-black text-slate-50 text-xl w-11 h-11 flex justify-center items-center border-2 border-slate-50 hover:bg-slate-50 hover:text-black transition-colors'>
        <HiUserGroup/>
      </div>
    </div>
  )
}
