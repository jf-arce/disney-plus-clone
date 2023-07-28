import { Link } from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'

export const VideoButtons = ({videoMovie}) => {
  return (
    <div className="flex gap-3 items-center">
        <Link
        to=""
        className="flex justify-center items-center gap-4 bg-[#f4f4f4] hover:bg-[#f9f9f999] text-black font-bold py-4 px-8 rounded-[3px] uppercase transition-colors"
        >
        <FaPlay className="text-xl"/> Ver Ahora
        </Link>
        <Link
        to={`/movie/video/${videoMovie}`}
        className="bg-[#000000] hover:bg-[#f4f4f4] text-[#f4f4f4] hover:text-[#000000] font-bold py-4 px-6 rounded-[3px] border-[1px] border-[#f4f4f4] uppercase transition-colors"
        >
        Tráiler
        </Link>
    </div>
  )
}
