import { createContext, useContext, useState } from "react";

const ListContext = createContext();

export const useListContext = ()=>useContext(ListContext)

export const ListContextProvider = ({children}) =>{

    const [list, setlist ] = useState([]);

    const addList =(movie)=>{
        const movieRepeat = list.find(movielist => movielist.id === movie.id);
        if(!movieRepeat){
            const newList = [...list,movie];
            setlist(newList)
        }
    }

    const deleteMovieFromList = (movie) =>{
        const movieFinded = list.find(movielist => movielist.id === movie.id);
        const newList = list.filter(movielist => movielist.id !== movieFinded.id);
        setlist(newList)
    }
    return (
        <ListContext.Provider value={{addList,list, deleteMovieFromList}}>
            {children}
        </ListContext.Provider>
    )
}