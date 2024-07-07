import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let tokenContext = createContext();
export default function TokenContextProvider({ children }) {



  const [authToken, setAuthToken] = useState(localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: ""
  });

 
  const navigate = useNavigate()
  useEffect(() => {
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