import {FiCheck} from 'react-icons/fi'
import {FaPlus} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import "./AddListButton.css"
import { useListContext } from '../../context/ListContext'

export const AddListButton = ({id, bg, title}) => {
    const [inlist, setinlist] = useState(false);
    const {addList,deleteMovieFromList, list} = useListContext();
    const [existInList, setExistInList] = useState(false);
    
    useEffect(()=>{
      setExistInList(
        list.some(movie => movie.id === id )
      );
      existInList && setinlist(false)
    },[list])

    const movieAddList = {
      id: id,
      backdrop_path: bg,
      title: title
    }

    const handleInList = () => {
      setinlist(!inlist);
      if(!inlist && !existInList) {
        addList(movieAddList)
      }else{
        deleteMovieFromList(movieAddList);
      }
    };
   
  return (
    <button 
        className={`${inlist && 'mylist'} rounded-full bg-black text-slate-50 text-lg w-11 h-11 flex justify-center items-center border-2 border-slate-50 hover:bg-slate-50 hover:text-black transition-colors`}
        onClick={handleInList}
    >
        {inlist || existInList ? <FiCheck className='text-[22px] font-bold text-blue-500'/> : <FaPlus/>}
    </button>
  )
}
