export const getFavoriteProducts = (products) => {
    const allArraysProducts = [];

    products.forEach(product => {
        if(product.isFavorite){
            allArraysProducts.push(product)
        }
    });

    return allArraysProducts
}