import { useState } from 'react';
import ExpensiveComponent from './expensiveCalculations';
import { useGlobalState } from '../../hooks/globalState';

/**
 * Cache the result of the calculation between re-renders
 * const cachedValue = useMemo(calculateValue, dependencies)
 * 
 */
const MemoHook = () => {
  const [valueA, setValueA] = useState(5);
  const [valueB, setValueB] = useState(10);
  const { state } = useGlobalState();

  return (
    <div>
      <h1>Memo Hook {state.count}</h1>
      <ExpensiveComponent a={valueA} b={valueB} />
      <button onClick={() => setValueA(valueA + 1)}>Increment A</button>
      <button onClick={() => setValueB(valueB + 1)}>Increment B</button>
    </div>
  );
}
export default MemoHook