import { createContext, useState } from "react";

export let courseContext = createContext();
export default function CourseContextProvider({ children }) {
  const [currentCourse, setCurrentCourse] = useState([]);
  const [currentModule, setCurrentModule] = useState([]);

  return (
    <courseContext.Provider
      value={{
        currentCourse,
        setCurrentCourse,
        currentModule,
        setCurrentModule,
      }}
    >
      {children}
    </courseContext.Provider>
  );
}
