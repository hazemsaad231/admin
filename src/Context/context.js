'use client'

import React from 'react';
import { createContext } from 'react'
import { useState, useCallback, useEffect } from 'react';
import Data from '@/data/data';


export const Context = createContext(null);

export const ContextProvider = (props) => {
 const [isDarkMode, setIsDarkMode] = useState(false);

const [data, setData] = useState([]);

    useEffect(() => {
setData(Data);
    }, []);

    
  const [search, setSearch] = useState("");
  
 const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

    const toggleMode = useCallback(() => {
    document.body.style.transition = "background-color 0.7s ease, color 0.7s ease";
    document.body.style.backgroundColor = isDarkMode ? "#F5F5F5" : "#1F2937";
    document.body.style.color = isDarkMode ? "black" : "white";
    setIsDarkMode((prev) => !prev);
  }, [isDarkMode]);
    console.log("data saved")


    return(
        <>
        <Context.Provider value={{isDarkMode, toggleMode, filteredData, search, setSearch}}>{props.children}</Context.Provider>
        </>
    )
}