import { initialState } from './initialState';

const ValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return { value: action.payload };
        default:
            return state;
    }
};

export default ValueReducer;