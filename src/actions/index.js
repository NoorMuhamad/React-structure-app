// Counter reducer actions
export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});

// Input reducer actions
export const updateValue = (value) => ({
    type: 'UPDATE_VALUE',
    payload: value,
});