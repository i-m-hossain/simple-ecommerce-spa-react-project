import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import Products from '../Products/Products';
const Main = () => {
    const [data, setData] = useState([])
    const [cartProduct, setCartProduct] = useState([])
    const [displayResult, setDisplayResult] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setData(json)
                setDisplayResult(json)
            })
    },[])
    const handleAddToCart = (product) => {
        const newCartProduct = [...cartProduct, product]
        setCartProduct(newCartProduct)

    }
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const seacrhProduct = data.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayResult(seacrhProduct)
        
    }

    return (
        <>
            <div className="bg-warning">
                <form className="d-flex col-md-6 p-3 mx-auto ">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>
            <div className="row bg-light">
                <div className="col-md-9 border-end border-secondary">
                    {
                        displayResult.length<data.length ?
                            <p className="text-center bg-secondary ms-5 me-5 mt-1 p-3 text-light">{displayResult.length} result Found</p>
                            : ''
                        
                    }
                    <div className="row p-4">
                        {
                            data.length !== 0 ? 
                                displayResult.map(product => <Products product={product} handleAddToCart={handleAddToCart}></Products>)
                                : <h2 className="text-center">Loading...</h2>
                        }
                    </div>
                </div>
                <div className="col-md-3 mt-4 ps-5">
                    <div>
                        <p className="h6">Cart</p>
                        <Cart></Cart>
                    </div>
                    <div className="mt-3">
                        <p className="h6">Product Added: </p>
                        {
                            cartProduct.map(product => <CartProduct product={product} ></CartProduct>)
                        }
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Main;