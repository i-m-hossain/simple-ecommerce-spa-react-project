import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import { settingData, getData } from '../Module/localStorage';
import Products from '../Products/Products';
import Search from '../Search/Search';
const Main = () => {
    const [products, setProducts] = useState([])
    const [cartProduct, setCartProduct] = useState([])
    const [displayResult, setDisplayResult] = useState([])
    // const [storageCart, setStorageCart] = useState([])
    
    useEffect(()=>{
        console.log('api called');
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setDisplayResult(json);
            })
    },[]) 
    useEffect(() => {
        if (products.length) {
            const cartOfStorage = getData(); //getting data from local storage
            const storedCart = []
            for (const key in cartOfStorage){
                const keyInt = parseInt(key) //this is an exception as product id is integer
                const addedProduct = products.find(product => product.id === keyInt);
                storedCart.push(addedProduct)
            };
            setCartProduct(storedCart)
        }
    }, [products])
    const handleAddToCart = (product) => {
        const newCartProduct = [...cartProduct, product]
        setCartProduct(newCartProduct)
        settingData(product.id) //save to local storage 
    }
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const seacrhProduct = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayResult(seacrhProduct)
        
    }

    return (
        <>
            <Search handleSearch={handleSearch}></Search>
            <div className="row bg-light">
                <div className="col-md-9 border-end border-secondary">
                    {
                        displayResult.length < products.length ?
                            <p className="text-center bg-secondary ms-5 me-5 mt-1 p-3 text-light">{displayResult.length} result Found</p>
                            : ''
                        
                    }
                    <div className="row p-4">
                        {
                            products.length !== 0 ?
                                displayResult.map(product => <Products product={product} key={product.id} handleAddToCart={handleAddToCart}></Products>)
                                : <h2 className="text-center">Loading...</h2>
                        }
                    </div>
                </div>
                <div className="col-md-3 mt-4 ps-5">
                    <div>
                        <p className="h6">Cart</p>
                        <Cart cartProduct={cartProduct} ></Cart>
                    </div>
                    <div className="mt-3">
                        <p className="h6">Product Added: {cartProduct.length}</p>
                        {
                            cartProduct.map(product => <CartProduct product={product} key={product.id} ></CartProduct>)
                        }
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Main;