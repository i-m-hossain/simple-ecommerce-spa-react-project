import React from 'react';

const CartProduct = (props) => {
    const {title, image, price} = props.product
    return (
        <div className="row border border-secondary rounded mb-3 me-2 d-flex align-items-center">        
            <div className="col-md-4 p-1">
                <img src={image} alt="" height="60" weight="60"/>    
            </div>            
            <div className="col-md-4 p-1">
                <p>{title.slice(0,20)}</p>    
            </div>            
            <div className="col-md-4 p-1">
                <p>${price}</p>
            </div>            
        </div>
    );
};

export default CartProduct;