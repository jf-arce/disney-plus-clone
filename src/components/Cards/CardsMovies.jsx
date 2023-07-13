import './CardsMovies.css';


export const CardsMovies = ({img,title}) => {
  return (
    <div className="card-show-container hover:scale-[1.05] 
      transition-transform duration-300 rounded-md h-full flex items-center justify-center m-[4px]"
      >
      <div className="relative inline-block bg-gradient-to-b from-[#30323e] to-[#1e1f2a] m-[6px]
      rounded-xl cursor-pointer shadow-xl shadow-black h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={title}
          className="relative top-0 z-20 object-cover object-center rounded-xl"
        />
      </div>
    </div>
  )
}
