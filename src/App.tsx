import { Provider } from 'react-redux';
import './App.css';
import { Content } from './layout';
import configureStore from './store';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
