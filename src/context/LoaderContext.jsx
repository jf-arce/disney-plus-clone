import { createContext,useContext,useState } from "react";


const LoaderContext = createContext();

export const useLoaderContext = () => useContext(LoaderContext);

export const LoaderContextProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false);

    const loadingStatus = (status) => {
        setIsLoading(status)
    }

    return (
        <LoaderContext.Provider value={{isLoading,loadingStatus}}>
            {children}
        </LoaderContext.Provider>
    )
}