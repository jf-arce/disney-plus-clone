import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { HomePage } from "./pages/HomePage/HomePage"
import { Footer } from "./components/Footer/Footer"
import { CategoriePage } from "./components/CategoriePage/CategoriePage"
import { MovieDetail } from "./components/MovieDetail/MovieDetail"
import { VideoMovie } from "./components/VideoMovie/VideoMovie"
import { useLoaderContext } from "./context/LoaderContext"
import { SearchPage } from "./pages/SearchPage/SearchPage"

function App() {
  const { isLoading } = useLoaderContext();

  return (
    <div className="App">
      <BrowserRouter>
        {isLoading || <NavBar/> }
        <main className={`${isLoading || 'mt-[80px] mb-8'}`}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/brand/:categorie" element={<CategoriePage/>}/>
            <Route path="/movie/:title/:movieId" element={<MovieDetail/>}/>
            <Route path="/movie/video/:videoId" element={<VideoMovie/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="*" element={<h1 className="text-white">Error: 404</h1>}/>
          </Routes>
        </main>
        {isLoading || <Footer/> }
      </BrowserRouter>
      
    </div>
  )
}

export default App
