import { sortArraysProducts, changeFavorite } from './products.pipes';
import { getFavoriteProducts } from './favorite.pipes';
import { getId } from './getId.pipe';
import { setItemStore, getItemStore } from './local.storage.pipes';

export { 
    sortArraysProducts, 
    getFavoriteProducts, 
    getId, 
    changeFavorite, 
    setItemStore, 
    getItemStore 
}