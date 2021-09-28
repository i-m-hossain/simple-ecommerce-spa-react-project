import React from 'react';

const Cart = (props) => {
    const cart = props.cartProduct
    
    let total =0;
    let quantity = 0;
    let shipping = 0;
    for(const pd of cart){
        if(!pd.quantity){
            pd.quantity =1
        }
        total = total + pd.price * pd.quantity
        quantity = quantity + pd.quantity
        
    }
    if(total>0){
        shipping = 50;
    }
    let totalBeforTax = total + shipping
    let tax =total * .2
    let grandTotal = totalBeforTax + tax 
    return (
        <div className="row me-3">
            <div className="col-md-6 border border-secondary border-end-0 ">
                <p>Total:</p>
                <p>Shipping:</p>
                <p>Total before tax:</p>
                <p>Estimated tax:</p>
                <p>Grand total:</p>
            </div>
            <div className="col-md-6 border border-secondary border-start-0 ">
                <p>$ {total.toFixed(2)}</p>
                <p>$ {shipping.toFixed(2)}</p>
                <p>$ {totalBeforTax.toFixed(2)}</p>
                <p>$ {tax.toFixed(2)}</p>
                <p>$ {grandTotal.toFixed(2)}</p>
            </div>
            <p className="h6 mt-3">Product Added: {quantity}</p>
        </div>
    );
};

export default Cart;