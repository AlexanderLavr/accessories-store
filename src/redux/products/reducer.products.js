import typeProducts from './actions.products';

const initialState = {
    allArrayProducts: [],
    selectedProducts: [],
    selectedTypeProducts: []
}

export function productsReducer(state = initialState, action){
    switch (action.type){
       case typeProducts.SAVE_PPRODUCTS:
            return {
                ...state,
                allArrayProducts: action.products
            }
        case typeProducts.SAVE_SELECTED_PPRODUCTS:
            return {
                ...state,
                selectedProducts: action.products
            }
        case typeProducts.SAVE_SELECTED_TYPE_PRODUCTS:
            return {
                ...state,
                selectedTypeProducts: action.products
            }
        default:
          return state;
    }
}