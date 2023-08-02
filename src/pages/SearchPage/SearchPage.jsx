import { useEffect, useRef, useState } from "react";
import { useCreateItemsMovies } from "../../hooks/useCreateItemsMovies";
import { useAllMovies } from "../../hooks/useAllMovies";

export const SearchPage = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const [moviesSearch, setMoviesSearch] = useState([]);
  const allMovies = useAllMovies();

  //funcion de busqueda
  const handleSearch = () => {
    const writing = inputRef.current.value.trim();
    setTimeout(() => {
      setSearch(writing);
    }, 300);
  };

  useEffect(() => {
    const lowercaseSearch = search.toLowerCase().replace(/\s/g, ""); // Remove spaces from the search
    const moviesFilter = allMovies.filter((movie) => {
      const lowercaseTitle = movie.title.toLowerCase().replace(/\s/g, ""); // Remove spaces from the title
      return (
        lowercaseTitle.startsWith(lowercaseSearch) ||
        lowercaseTitle.includes(lowercaseSearch)
      );
    });
    setMoviesSearch(moviesFilter);
    search.length === 0 && setMoviesSearch(allMovies.slice(0, 20)); // mostrar peliculas ni bien entras a la parte de busqueda
  }, [search, allMovies]);

  const showMovies = () => {
    if (moviesSearch.length === 0) {
      return (
        <div className="h-[500px] flex flex-col items-center pt-32 gap-6 text-[#f9f9f9]">
          <h3 className="font-bold text-xl">
            No se encontraron resultado para "{search}".
          </h3>
          <p className="flex text-[12px]">
            <span>Tu perfil está configurado en </span>
            <img
              className="h-[20px] px-1"
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/8775493319563D9A68A3001387B709C39A510D9A5A139D8D7301EB21BB6BEBBC/scale?"
              alt=""
            />
            <span>
              . Los títulos con clasificación superior no aparecerán. Actualiza
              la clasificación por edades en los ajustes de perfil.
            </span>
          </p>
        </div>
      );
    } else {
      return (
        <div className="px-[calc(3.5vw+24px)] mt-[180px] sm:mt-[230px] text-[#f9f9f9]">
          <h4 className="font-bold text-xl ml-4">Explorar</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 animate-fade">
            {useCreateItemsMovies(moviesSearch)}
          </div>
          <p className="flex w-full justify-center py-[70px] text-center flex-wrap">
            <span className="text-center">Tu perfil está configurado en </span>
            <img
              className="h-[20px] px-1"
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/8775493319563D9A68A3001387B709C39A510D9A5A139D8D7301EB21BB6BEBBC/scale?"
              alt=""
            />
            <span>
              . Los títulos con clasificación superior no aparecerán. Actualiza
              la clasificación por edades en los ajustes de perfil.
            </span>
          </p>
        </div>
      );
    }
  };
  return (
    <div>
      <form className="fixed z-50 w-full top-20">
        <div>
          <input
            type="text"
            ref={inputRef}
            onChange={handleSearch}
            className="w-full pl-5 sm:pl-24 py-5 text-[26px] sm:text-[44px] text-[#a8a9ad] focus:outline-none placeholder:pl-2 font-semibold bg-[#4B4E5A]"
            placeholder="Título, personaje o género"
          />
        </div>
      </form>
      {showMovies()}
    </div>
  );
};
