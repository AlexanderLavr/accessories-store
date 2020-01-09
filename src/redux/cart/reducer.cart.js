import typeCart from './actions.cart';

const initialState = {
    count: 0
}

export function curtReducer(state = initialState, action){
    switch (action.type){
        case typeCart.CHANGE_COUNT:            
            return {
                ...state,
                count: action.count
            }
        default:
          return state;
    }
}