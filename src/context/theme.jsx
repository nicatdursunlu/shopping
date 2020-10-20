import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [view, setView] = useState('grid');
    const changeView = (viewType) => setView(viewType);

    return (
        <ThemeContext.Provider value={{
            view,
            changeView
        }}>
            { children}
        </ThemeContext.Provider>
    )
}