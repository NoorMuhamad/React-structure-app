import ValueReducer from './valueReducer';
import CounterReducer from './counterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    inputValue: ValueReducer,
    counter: CounterReducer,
});

export default rootReducer