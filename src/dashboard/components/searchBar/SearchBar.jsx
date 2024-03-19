import React from "react";
import styles from "./SearchBar.module.css";


function SearchBar({children}) {
  return (
    <div className={styles.SearchBar}>
      {children}
    </div>
  );
}

export default SearchBar;
