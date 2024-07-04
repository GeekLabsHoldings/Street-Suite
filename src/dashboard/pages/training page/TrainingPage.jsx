import React from "react";

import { Outlet } from "react-router-dom";
import CourseContextProvider from "./context/coursesContext";

function TrainingPage() {
  return (
    <div className="w-full p-3 md:p-8 mx-auto">
      <div className="trading-wrapper">
        <CourseContextProvider>
          {/* all children pages will appear here */}
          <Outlet />
        </CourseContextProvider>
      </div>
    </div>
  );
}

export default TrainingPage;
