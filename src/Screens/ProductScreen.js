import React from 'react';
import { Link } from 'react-router-dom';
import dataArray from '../dataArray';

function ProductScreen (props){
    console.log(props.match.params.id);
    const product =dataArray.products.find(x => x.id === props.match.params.id)
    const image_url = '../' + product.image
    return(
    <div>
        <div>
            <Link to='/'>Back to home page</Link>
        </div>
        <div className="details">
            <div className="product">
            <img className="product-img" src={image_url} alt="logo1"/>
            </div>
            <div className="product-details">
                <ul>
                    <li>
                     <h3>{product.name}</h3>
                    </li>
                    <li>
                     Review :{product.numReview} reviews.
                    </li>
                    <li>
                    Design:  {product.logo}
                    </li>
                    <li>
                    Description:
                    </li>
                </ul>
            </div>
            <div className="product-action">
                <ul>
                   <li>
                        Product Prise:{product.price}
                        </li>
                        <li>
                        Qt=<select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button>Add to the Cart </button>
                    </li>
                </ul>
             </div>
        
        </div>
        </div>
        
    )
}
export default ProductScreen;