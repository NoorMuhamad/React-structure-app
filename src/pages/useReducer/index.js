import { useGlobalState } from '../../hooks/globalState';



const ReducerHook = () => {
  const { state, dispatch } = useGlobalState();
  return (
    <div>
      <button onClick={() => {
        dispatch({ type: 'count' })
      }}>
        Increment Count
      </button>
      <p>Hello! You are {state.count}.</p>
    </div>
  );
}

export default ReducerHook