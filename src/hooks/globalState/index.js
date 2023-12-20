import { useContext } from 'react';
import { CountContext } from '../../pages/useContext';

export const useGlobalState = () => {
    const context = useContext(CountContext);
    if (!context) {
        throw new Error('Context must be used within a CountProvider');
    }
    return context;
};