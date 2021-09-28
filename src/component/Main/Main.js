import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import Products from '../Products/Products';
const Main = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    },[])
    return (
        <>
            <div className="bg-warning">
                <form className="d-flex col-md-6 p-3 mx-auto ">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>
            <div className="row bg-light">
                <div className="col-md-9 border-end border-secondary">
                    <div className="row p-4">
                        {
                            data.length !== 0 ? 
                                data.map(product => <Products product={product}></Products>) 
                                : <h2 className="text-center">Loading...</h2>
                        }
                    </div>
                </div>
                <div className="col-md-3 mt-4 ps-5">
                    <div>
                        <p class="h6">Cart</p>
                        <Cart></Cart>
                    </div>
                    <div className="mt-3">
                        <p class="h6">Product Added: </p>
                        <CartProduct></CartProduct>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Main;