
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';



export default function configStore(initialState){
  const enhancer = composeWithDevTools(applyMiddleware(thunk))
  const store = createStore(rootReducer, initialState, enhancer);
  return store
}
