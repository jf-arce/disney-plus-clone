import { Navigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { Loader } from "../Loader/Loader";

export const ProtectedRoute = ({ children }) => {
    const { user,loading } = useUserContext();

    if (loading) return <Loader/>

    if (!user) return  <Navigate to="/"/> 
   
    return(<>{children} </>);
};
