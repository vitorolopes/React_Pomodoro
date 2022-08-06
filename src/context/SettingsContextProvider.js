import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsContextProvider = ( {children} ) => { 

    const dummyValue = "This is a dummy value"

    const [executing, setExecuting] = useState({})

    const updateExecuting = (newTimer) => {
        setExecuting(newTimer)
    }

    return(
        <SettingsContext.Provider
            value={{
                dummyValue,
                updateExecuting
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
 }

 export const useSettingsContext = () => useContext(SettingsContext)