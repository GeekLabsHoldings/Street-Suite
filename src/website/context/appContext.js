import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/cardsSlice";

export let tokenContext = createContext();
export default function TokenContextProvider({ children }) {

const userState = useSelector(state => state.login.loggedIn)
const dispatch = useDispatch();

  const [authToken, setAuthToken] = useState(localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: ""
  });

 
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      dispatch(signIn())
    }
    const handleStorageChange = () => {
      if (!localStorage.getItem("userToken")) {
        setAuthToken(null);
        navigate("/login");
      }
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
    
  }, []);

  return (
    <tokenContext.Provider
      value={{ authToken, setAuthToken }}
    >
      {children}
    </tokenContext.Provider>
  );
}