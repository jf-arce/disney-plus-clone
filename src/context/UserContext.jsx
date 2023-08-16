import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../dataBase/firebase";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useUserContext = () => (useContext(UserContext))

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);

    const signUp = async (email,password,userName) =>{
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            await updateProfile(user,{
                displayName: userName
            });
            setIsLogged(!isLogged);
            localStorage.setItem('isLogged', !isLogged);
            navigate('/home');
        }catch(error){
            console.log(error.message);
        }
    }

    const logIn = async (email,password) =>{
        try{
            await signInWithEmailAndPassword(auth,email,password);
            setIsLogged(!isLogged);
            localStorage.setItem('isLogged', !isLogged);
            navigate('/home');
        }catch(error){
            console.log(error.message);
        }
    }

    const logOut = () => signOut(auth)

    useEffect(() =>{
        onAuthStateChanged(auth, userLogged =>{
            setUser(userLogged)
            setLoading(false)
        })
    },[]);

    return(
        <UserContext.Provider value={{signUp,logIn,logOut,user,loading}}>
            {children}
        </UserContext.Provider>
    )
}