import { request } from '../../request/request';
import { getSelectedProducts } from '../../pipes/products.pipes';

export default {
    SAVE_PPRODUCTS: 'SAVE_PPRODUCTS',
    SAVE_SELECTED_PPRODUCTS: 'SAVE_SELECTED_PPRODUCTS',
    SAVE_SELECTED_TYPE_PRODUCTS: 'SAVE_SELECTED_TYPE_PRODUCTS'
}

export const saveProducts = (products) => {
    return { type: 'SAVE_PPRODUCTS',  products };
}

export const saveSelectedProducts = (products) => {
    return { type: 'SAVE_SELECTED_PPRODUCTS',  products };
}

export const saveSelectedTypeProducts = (products) => {
    return { type: 'SAVE_SELECTED_TYPE_PRODUCTS',  products };
}

export const doSelectedProducts = (selectedType) => {
    return async (dispatch) => {
        let products = await request('products', 'GET');
        let selectedProducts = getSelectedProducts(selectedType, products);
        await dispatch(saveProducts(products))
        await dispatch(saveSelectedProducts(selectedProducts))
    }
} 

export const doProducts = () => {
    return async (dispatch) => {
        let products = await request('products', 'GET');
        await dispatch(saveProducts(products))
        await dispatch(saveSelectedProducts(products))
    }
}