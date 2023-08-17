import { Route, Routes } from "react-router-dom";
import { DisneySubscriptionPage } from "./pages/DisneySubscriptionPage/DisneySubscriptionPage";
import { DisneyApp } from "./pages/DisneyApp/DisneyApp";
import { Login } from "./components/Login/Login";
import { UserContextProvider } from "./context/UserContext";
import { Register } from "./components/Register/Register";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route index element={<DisneySubscriptionPage />} />
          <Route path="/es-ar" element={<DisneySubscriptionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/*" element={
            <ProtectedRoute>
              <DisneyApp/>
            </ProtectedRoute>
          }/>
          <Route path="*" element={<h1 className="text-white">Error: 404</h1>}/>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
