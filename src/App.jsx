import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { HomePage } from "./pages/HomePage/HomePage"
import { Footer } from "./components/Footer/Footer"
import { CategoriePage } from "./components/CategoriePage/CategoriePage"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <main className="mt-[80px]">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/brand/:categorie" element={<CategoriePage/>}/>
            <Route path="*" element={<h1 className="text-white">Error: 404</h1>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
