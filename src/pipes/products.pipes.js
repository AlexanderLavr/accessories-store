import { request } from '../request/request';

export const sortArraysProducts = (products, selectType = []) => {
    const allArraysProducts = [];
    if(selectType.length){
        selectType.forEach(el=>{
            products.forEach(product => {
                if(el === product.type){
                    allArraysProducts.push(product)
                }
            });
        })
        return allArraysProducts 
    }else{
        return products 
    }
}

const changeFavorireState = (product) => {
    product = { ...product, isFavorite: !product.isFavorite}
    return product
}


export const changeFavorite = async (id) => {
    let product = await request(`products/${id}`, 'GET');
    let newStateProduct = changeFavorireState(product);
    let changeProduct = await request(`products/${id}`, 'PUT', newStateProduct);
    return changeProduct
}


export const getSelectedProducts = (selectedType, products) => {
    const selectedProducts = [];
    if(!selectedType.length){
        return products
    }
    selectedType.forEach(type => {
        products.forEach(element => {
            if(element.type === type){
                selectedProducts.push(element) 
            }
        });
    });
    return selectedProducts
}