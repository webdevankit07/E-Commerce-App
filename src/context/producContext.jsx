import { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{ myName: 'Ankit' }}>{children}</AppContext.Provider>;
};

const useProductContext = () => useContext(AppContext);

export { AppProvider, useProductContext };
