import React from 'react';

const Products = (props) => {
    const {title, image, price, rating, category, description} = props.product
    console.log(rating);
    return (
        <div className="col-md-4 p-2">
            <div className="card-group ">
                <div className="card border-secondary">
                    <img src={image} className="card-img-top p-2" alt="..." style={{'object-fit': 'cover', 'height': 300, 'width':300  }}/>
                    <div className ="card-body">
                        <h5 className="card-title">{title.slice(0,25)}</h5>
                    <p className ="card-text">{description.slice(0,150)}...</p>
                    </div>
                    <div className="d-flex justify-content-between ps-2 pe-2">
                        <h4 className="bg-light p-2 rounded">Price: ${price}</h4>
                        <h4>{rating.rate}({rating.count})</h4>
                    </div>
                    <div className="card-footer text-center bg-warning">
                        <small className ="">Add To Cart</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;