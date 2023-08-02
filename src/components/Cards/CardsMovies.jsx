import { Link } from 'react-router-dom';
import './CardsMovies.css';
import { getLogoMovies } from '../../api/getData';
import { useEffect, useState } from 'react';

export const CardsMovies = ({img,title, movieId}) => {
  const [logo, setLogo] = useState(); 
  useEffect(()=>{
    getLogoMovies(movieId)
      .then(logo => setLogo(logo))
      .catch(error => console.log("Error: No se ha podido encontrar niguna pelicula", error))
  },[]);

  return (
    <Link to={`/movie/${title}/${movieId}`} className="card-movie-container hover:scale-[1.05] 
      transition-transform duration-300 rounded-md flex items-center justify-center my-[15px] lg:my-[20px] md:mx-[4px]"
      >
      <div className="relative inline-block bg-gradient-to-b from-[#30323e] to-[#1e1f2a] m-[6px]
      rounded-xl cursor-pointer shadow-lg shadow-black">
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={title}
          className="relative top-0 z-20 object-cover object-center rounded-[4px] w-full"
        />
        <div className='absolute top-4 z-40 w-full flex justify-center items-center'>
          <img src={`https://image.tmdb.org/t/p/w500${logo}`} alt="" className='max-w-[100px] min-w-[50px]' />
        </div>
      </div>
    </Link>
  )
}
