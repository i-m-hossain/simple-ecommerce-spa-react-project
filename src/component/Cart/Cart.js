import React from 'react';

const Cart = () => {
    return (
        <div className="row">
            <div className="col-md-6 border border-secondary border-end-0 ">
                <p>Total:</p>
                <p>Shipping:</p>
                <p>Total before tax:</p>
                <p>Estimated tax:</p>
                <p>Grand total:</p>
            </div>
            <div className="col-md-6 border border-secondary border-start-0 ">
                <p>$</p>
                <p>$</p>
                <p>$</p>
                <p>$</p>
                <p>$</p>
            </div>
        </div>
    );
};

export default Cart;