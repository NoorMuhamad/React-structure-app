import { createContext, useReducer } from 'react';
import reducer from '../useReducer/reducer';
import { initialState } from '../useReducer/initialState';

export const CountContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ state, dispatch }}>
            {children}
        </CountContext.Provider>
    );
};