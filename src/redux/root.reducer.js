import { combineReducers } from 'redux';
import { productsReducer } from './products/reducer.products';
import { curtReducer } from './cart/reducer.cart';

  

const rootReducer = combineReducers({
    products: productsReducer,
    cart: curtReducer
});
export default rootReducer; 