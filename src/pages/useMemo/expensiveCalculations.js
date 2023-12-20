import { useMemo } from 'react';

const ExpensiveComponent = ({ a, b }) => {
    const expensiveValue = useMemo(() => {
        return a * b;
    }, [a, b]);

    return (
        <div>
            <p>Expensive Value: {expensiveValue}</p>
        </div>
    );
};

export default ExpensiveComponent