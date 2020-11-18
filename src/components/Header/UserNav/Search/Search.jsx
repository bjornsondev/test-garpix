import React, { useState } from 'react';
import s from './Search.module.scss';


function Search(props){
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <div className={s.search}>
      <button 
        className={s.searchOpenBtn} 
        onClick={() => setIsSearchActive(true)}
      ></button>
      
      {isSearchActive && 
      <div className={s.searchActive}>
        <div className={s.searchActiveOverlay}
             onClick={() => setIsSearchActive(false)}
        ></div>

        <div className={s.searchActiveField}>
          <input 
            type="search" 
            className={s.searchActiveInput} 
            placeholder="Поиск" 
            value={searchInputValue}
            onChange={ (e) => setSearchInputValue(e.currentTarget.value)}
            onBlur={() => setIsSearchActive(false)}
            autoFocus
          />

          <button 
            className={s.searchOpenBtn + " " + s.searchEnter}
          ></button>
        </div>
      </div>}

    </div>
  )
};

export default Search;