import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export let tokenContext = createContext();
export default function TokenContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: ""
  });

 

  return (
    <tokenContext.Provider
      value={{ authToken, setAuthToken }}
    >
      {children}
    </tokenContext.Provider>
  );
}