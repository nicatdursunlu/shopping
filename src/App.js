import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CartContextProvider } from './context/cart';
import { ThemeContextProvider } from './context/theme';
import { ProductsContextProvider } from './context/products';
import { FavoriteContextProvider } from './context/favorites';
import {
  Homepage,
  Cart,
  Favorites
} from './pages';

function App() {
  return (
    <Router>
      <ProductsContextProvider>
        <ThemeContextProvider>
          <CartContextProvider>
            <FavoriteContextProvider>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/products" component={Homepage} />
                <Route path="/cart" component={Cart} />
                <Route path="/favorites" component={Favorites} />
              </Switch>
            </FavoriteContextProvider>
          </CartContextProvider>
        </ThemeContextProvider>
      </ProductsContextProvider>
    </Router>
  );
}


export default App;