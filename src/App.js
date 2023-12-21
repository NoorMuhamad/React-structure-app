import { Provider } from 'react-redux';
import './assets/App.css';
import store from './store';
import CounterPage from './pages/counter';
import InputValuePage from './pages/inputValues';

function App() {
  return (
    <Provider store={store}>
      <>
        <CounterPage />
        <InputValuePage />
      </>
    </Provider>

  );
}

export default App;
