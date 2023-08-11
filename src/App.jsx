import { Route, Routes, useNavigate } from "react-router-dom";
import { DisneySubscriptionPage } from "./pages/DisneySubscriptionPage/DisneySubscriptionPage";
import { DisneyApp } from "./pages/DisneyApp/DisneyApp";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/es-ar");
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<DisneySubscriptionPage />} />
        <Route path="/es-ar" element={<DisneySubscriptionPage />} />
        <Route path="/*" element={<DisneyApp />} />
        <Route path="*" element={<h1 className="text-white">Error: 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
