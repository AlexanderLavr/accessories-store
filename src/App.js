import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import Nav from './components/nav/nav.component';
import Products from './components/products/products';
import Cart from './components/cart/cart.component';
import Favorite from './components/favorite/favorite.component';

const store = configureStore();


function App(){
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={ Nav } />
        <Route exact path="/" component={ Products } />
        <Route exact path="/favorite" component={ Favorite } />
        <Route path="/cart" component={ Cart } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
