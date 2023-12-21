import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from '../../actions';

const InputValuePage = () => {
    const value = useSelector((state) => state.inputValue.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Value (Second Reducer): {value}</p>
            <input
                type="text"
                value={value}
                onChange={(e) => dispatch(updateValue(e.target.value))}
            />
        </div>
    );
};

export default InputValuePage;