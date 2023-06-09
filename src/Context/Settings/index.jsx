import React, { useState, useEffect } from "react";

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [pageItems, setDisplayCount] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const saveLocalStorage = () => {
    localStorage.setItem('pageItems', JSON.stringify(+pageItems));
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    localStorage.setItem('sort', JSON.stringify(sort));
  };

  const values = {pageItems, showCompleted, sort, setSort, setDisplayCount, setShowCompleted, saveLocalStorage};

  useEffect(() => {
    const localPageItems = localStorage.getItem('pageItems');
    const localShowCompleted = localStorage.getItem('showCompleted');
    const localSort = localStorage.getItem('sort');
    if (localPageItems) {
      setDisplayCount(JSON.parse(localPageItems));
    }
    if (localShowCompleted) {
      setShowCompleted(JSON.parse(localShowCompleted));
    }
    if (localSort) {
      setSort(JSON.parse(localSort));
    }
  }, []);

  return (
    <SettingsContext.Provider value={values}>
      { children }
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;