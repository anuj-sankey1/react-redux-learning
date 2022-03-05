
import './App.css';
import InputProducts from './components/InputProducts';
import Product from './components/Product';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputProducts />
        <Product /> 
      </div>
    </Provider>
  );
}

export default App;
