import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsContextProvider = ( {children} ) => { 

  
    const [executing, setExecuting] = useState({})

    const updateExecuting = (newTimer) => {
        setExecuting(newTimer)
    }

    return(
        <SettingsContext.Provider
            value={{
                updateExecuting
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
 }

 export const useSettingsContext = () => useContext(SettingsContext)