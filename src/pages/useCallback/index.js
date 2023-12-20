import { useCallback, useState } from 'react';

/**
 * Skipping the function creations and persist the rerendering 
 * how to cache the function?
 * by using the useCallback hook we can cache the functions
 * const cachedFn = useCallback(fn, dependencies)
 * 
 * For Example we have two handler function one deal with the useCallBack hook and one without that
 * here is difference
 * WITHCALLBACK function is memorized then function definition or cache the definition.... will only recreate on case when user change the dependence
 * But WITHOUTCALLBACK function will recreate the on every render. 
 * 
 * Advantages
 *  
 * updating the state from a memoized callback
 * Preventing an effect from firing too often
 *  Sometimes, you might want to call a functions from inside the useEffects
 *  PROBLEM:
 *  Every reactive value must be declared as dependency of your effect
 *  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }
   useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // Problem  This dependency changes on every render

  Solution is CallBack:
  wrap the createOptions with callback it will only render when with dependency change.

   const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Only changes when roomId changes

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Only changes when createOptions changes

 * optimizing the custom hook
  function useRouter() {
  const { dispatch } = useContext(RouterStateContext);

  const navigate = useCallback((url) => {
    dispatch({ type: 'navigate', url });
  }, [dispatch]);

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return {
    navigate,
    goBack,
  };
}

 */
const CallBackHook = () => {
    const [count, setCount] = useState(0);

    // Without useCallback
    const handleClickWithoutCallback = () => {
        console.log('Button clicked!');
        setCount(count + 1);
    };

    // With useCallback
    const handleClickWithCallback = useCallback(() => {
        console.log('Button clicked!');
        setCount(count + 1);
    }, [count]); // The dependencies array includes 'count'

    return (
        <div>
            <h1>CallBack Hook</h1>
            <p>Count: {count}</p>
            <button onClick={handleClickWithoutCallback}>
                Click without useCallback
            </button>
            <button onClick={handleClickWithCallback}>
                Click with useCallback
            </button>
        </div>
    );
}
export default CallBackHook