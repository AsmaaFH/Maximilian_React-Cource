import { Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import ProductsDeatails from './pages/ProductsDeatails';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Header />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route>
        <ProductsDeatails path="product-detail:/productId" />
      </Route>
    </div>
  );
}

export default App;
