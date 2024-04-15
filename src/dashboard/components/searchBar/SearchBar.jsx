import React from "react";
import styles from "./SearchBar.module.css";


function SearchBar({children}) {
  
  return (

    // search bar component
    <div className={styles.SearchBar}>
      {children}
    </div>
  );
}

export default SearchBar;
