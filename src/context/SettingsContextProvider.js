import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsContextProvider = ( {children} ) => { 

    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    const updateExecuting = (newTimer) => {
        setExecuting(newTimer)
    }

    const startTimer = () => {
        setStartAnimate(true)
    }
    const pauseTimer = () => {
        setStartAnimate(false)
    }

    return(
        <SettingsContext.Provider
            value={{
                updateExecuting,
                startAnimate,
                startTimer,
                pauseTimer
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
 }

 export const useSettingsContext = () => useContext(SettingsContext)