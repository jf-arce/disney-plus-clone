import { Route,Routes } from "react-router-dom"
import { useLoaderContext } from "../../context/LoaderContext"
import { ListContextProvider } from "../../context/ListContext";
import { NavBar } from "../../components/NavBar/NavBar";
import { HomePage } from "../HomePage/HomePage";
import { CategoriePage } from "../../components/CategoriePage/CategoriePage";
import { MovieDetail } from "../../components/MovieDetail/MovieDetail";
import { VideoMovie } from "../../components/VideoMovie/VideoMovie";
import { SearchPage } from "../SearchPage/SearchPage";
import { MyListPage } from "../MyListPage/MyListPage";
import { Footer } from "../../components/Footer/Footer";


export const DisneyApp = () => {
  const { isLoading } = useLoaderContext();

  return (
    <>
      <ListContextProvider>
          {isLoading || <NavBar/> }
          <div className="app-background"></div>
          <main className={`${isLoading || 'mt-[80px] animate-duration-200 min-h-[calc(100vh-250px)]'}`}>
            <Routes>
              <Route index element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/brand/:categorie" element={<CategoriePage/>}/>
              <Route path="/movie/:title/:movieId" element={<MovieDetail/>}/>
              <Route path="/movie/video/:videoId" element={<VideoMovie/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/mylist" element={<MyListPage/>}/>
              <Route path="*" element={<h1 className="text-white">Error: 404</h1>}/>
            </Routes> 
          </main>
          {isLoading || <Footer/> }
      </ListContextProvider>
    </>
  )
}

