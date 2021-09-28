import React from 'react';

const Cart = (props) => {
    const cart = props.cartProduct
    let total =0;
    let shipping = 0;
    for(const pd of cart){
        total += pd.price   
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
        </div>
    );
};

export default Cart;