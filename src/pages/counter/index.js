import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';

const CounterPage = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count (Counter Page): {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default CounterPage;