import { setItemStore, getItemStore } from './';

export const initialStore = () => {
    let initialCart = getItemStore('cart');
    if(!initialCart){
        setItemStore('cart', [])
        setItemStore('count', 0)
        return
    }
    return
}

export const addToCard = (id, allProducts) => {
    let productsCart = getItemStore('cart');
    let countProduct = getItemStore('count');
    let selectedElement = {};
    for(let i of allProducts){
        if(i.id === id){
            selectedElement = {...i};
            break
        }
    }
    if(!productsCart.length){
        selectedElement.count = 1;
        productsCart.push(selectedElement)
        addToLocalStore(productsCart, ++countProduct)
        return countProduct
    }else{
        for(let j of productsCart){
            if(j.id === id){
                if(j.count < j.amount){
                    j.count += 1;
                    addToLocalStore(productsCart, ++countProduct)
                    return countProduct
                }else{
                    return countProduct
                }
            }
        }
        selectedElement.count = 1
        productsCart.push(selectedElement)
        addToLocalStore(productsCart, ++countProduct)
        return countProduct
    }
}

export const countTotalPrice = (arrayProducts) => {
    let totalPrace = 0;
    for(let element of arrayProducts){
        totalPrace += (element.count * parseInt(element.price))
    }
    return totalPrace
}

export const handlerAdd = (id, arrayProducts) => {
    for(let element of arrayProducts){
        if(id === element.id){
            if(element.count === element.amount){
                let count = getCountCard(arrayProducts)
                return count
            }else{
                element.count++
                let count = getCountCard(arrayProducts)
                return count
            }
        }
    }
} 

export const handlerSubtract = (id, arrayProducts) => {
    for(let element of arrayProducts){
        if(id === element.id){
            if(element.count === 1){
                let count = getCountCard(arrayProducts)
                return count
            }else{
                element.count--
                let count = getCountCard(arrayProducts)
                return count
            }
        }
    }
}

export const handlerDelete = (id, arrayProducts) => {
    for(let element of arrayProducts){
        if(id === element.id){
            let index = arrayProducts.indexOf(element);
            arrayProducts.splice(index, 1);
        }
    }
    let count = getCountCard(arrayProducts)
    return count
}

const getCountCard = (arrayProducts) => {
    const count = сountTotalProducts(arrayProducts);
    addToLocalStore(arrayProducts, count)
    return count
}

const сountTotalProducts = (arr) => {
    let totalCount = 0;
    if(!arr.length){
        return totalCount
    }
    for(let element of arr){
        totalCount += element.count;
    }
    return totalCount
} 

const addToLocalStore = (arrayProducts, count) => {
    setItemStore('cart', arrayProducts)
    setItemStore('count', count)
}