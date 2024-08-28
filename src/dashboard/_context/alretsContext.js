import { createContext, useState } from "react";

export let alertsContext = createContext();
export default function AlertsContextProvider({ children }) {
  const [newAlerts, setNewAlerts] = useState([]);

  return (
    <alertsContext.Provider
      value={{
        newAlerts,
        setNewAlerts,
      }}
    >
      {children}
    </alertsContext.Provider>
  );
}
