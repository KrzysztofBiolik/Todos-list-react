import { useState, useEffect } from "react";

export const useLocalStorageData = (keyName, initialValue ) => {
    const getInitialData = () => {
      const localStorageTasks = localStorage.getItem(keyName);
      return localStorageTasks
        ? JSON.parse(localStorageTasks)
        : initialValue
    };
  
    const [data, setData] = useState(getInitialData);
  
    useEffect((keyName) => {
      localStorage.setItem(keyName, JSON.stringify(data));
    }, [data]);
  
    return [data, setData];
  };