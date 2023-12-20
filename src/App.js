import './assets/App.css';
import CallBackHook from './pages/useCallback';
import { GlobalStateProvider } from './pages/useContext';
import LayoutEffectHook from './pages/useLayoutEffect';
import MemoHook from './pages/useMemo';
import ReducerHook from './pages/useReducer';

function App() {
  return (
    <GlobalStateProvider>
      <h3>CallBackHook</h3>
      <CallBackHook />
      <h3>MemoHook</h3>
      <MemoHook />
      <h3>LayoutEffectHook</h3>
      <LayoutEffectHook />
      <h3>Global State by using context and reducer hook </h3>
      <ReducerHook />
    </GlobalStateProvider>
  );
}

export default App;
