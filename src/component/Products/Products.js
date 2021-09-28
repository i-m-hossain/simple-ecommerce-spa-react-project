import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Products.css'

const Products = (props) => {
    const {title, image, price, rating, category, description} = props.product
    const starFull = <FontAwesomeIcon icon={faStar} className="text-warning" />
    const starEmpty = <FontAwesomeIcon icon={faStar} className="text-light" />
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
                        <p className="bg-light p-2 rounded">Price: <span className="h6 text-danger">${price}</span></p>
                        <p className="bg-light p-2 rounded"> <Rating
                            emptySymbol={starEmpty}
                            fullSymbol={starFull}
                                initialRating={rating.rate}
                                readonly/> 
                                <span className="text-danger">({rating.count})</span></p>
                    </div>
                    <div className="card-footer text-center bg-warning 
                    cart" onClick={()=>props.handleAddToCart(props.product)}>
                        <small className ="" > <FontAwesomeIcon icon={faCartPlus}/> Add To Cart</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;