import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductsDeatails from './pages/ProductsDeatails';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Header />

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:productId">
        <ProductsDeatails />
      </Route>
    </div>
  );
}

export default App;
