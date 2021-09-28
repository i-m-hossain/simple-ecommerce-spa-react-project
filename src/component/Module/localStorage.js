const settingData =(id) =>{
    const exist = getStorageData()
    let cart = {};
    if(!exist){
        cart[id] =1
    }else{
        cart = JSON.parse(exist)
        if(cart[id]){
            const newCartId = cart[id] +1
            cart[id] = newCartId
        }else{
            cart[id] = 1
        }
    }
    updateLocalStorage(cart)
}
const getStorageData = () => localStorage.getItem('shoppingCart');
const updateLocalStorage = (cart) => localStorage.setItem('shoppingCart', JSON.stringify(cart))

const getData = () => {
    const exists = getStorageData();
    return exists ? JSON.parse(exists) : {};
}
const romoveFromStorage = (id) =>{
    const exists = getStorageData;
    if(!exists){

    }else{
        const cart =JSON.parse(exists)
        delete cart[id];
        updateLocalStorage(cart)
    }
}
const clearTheCart = () =>{
    localStorage.removeItem('shoppingCart')
}
export { settingData, getData, romoveFromStorage,  clearTheCart}