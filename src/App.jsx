import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { HomePage } from "./pages/HomePage/HomePage"
import { Footer } from "./components/Footer/Footer"
import { CategoriePage } from "./components/CategoriePage/CategoriePage"
import { MovieDetail } from "./components/MovieDetail/MovieDetail"
import { VideoMovie } from "./components/VideoMovie/VideoMovie"
import { useLoaderContext } from "./context/LoaderContext"
import { SearchPage } from "./pages/SearchPage/SearchPage"
import { MyListPage } from "./pages/MyListPage/MyListPage"
import { ListContextProvider } from "./context/ListContext"

function App() {
  const { isLoading } = useLoaderContext();

  return (
    <div className="App">
      <ListContextProvider>
        <BrowserRouter>
          {isLoading || <NavBar/> }
          <main className={`${isLoading || 'mt-[80px] animate-duration-200'}`}>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/brand/:categorie" element={<CategoriePage/>}/>
              <Route path="/movie/:title/:movieId" element={<MovieDetail/>}/>
              <Route path="/movie/video/:videoId" element={<VideoMovie/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/mylist" element={<MyListPage/>}/>
              <Route path="*" element={<h1 className="text-white">Error: 404</h1>}/>
            </Routes>
          </main>
          {isLoading || <Footer/> }
        </BrowserRouter>
      </ListContextProvider>
    </div>
  )
}

export default App
