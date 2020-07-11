import React from 'react';
import { useLocalStore } from 'mobx-react';
import { createTodosStore } from './appStore';

const AppContext = React.createContext(null);

export const ContextProvider = ({children}) => {
    const store = useLocalStore(createTodosStore)

    return <AppContext.Provider value={store}>
        { children }
    </AppContext.Provider>
}

export const useAppContext = () => React.useContext(AppContext);