import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { HomePage } from "./pages/HomePage/HomePage"
import { Footer } from "./components/Footer/Footer"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <main className="mt-[80px]">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
