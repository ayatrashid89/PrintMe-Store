import React from 'react';
import dataArray from '../dataArray';
import {Link} from 'react-router-dom';


function HomeScreen (props){
    return(
    <div>
         <h1>HomeScreen </h1>
        <ul className="products">
                  {
                    dataArray.products.map((product) => {
                      return (
                      <li key={product.id}>
                          <div className="product">
                            <Link to={'./product/' + product.id}>
                            <img className="product-img" src={product.image} alt="logo1"/>
                            </Link>
                            <div className="product-name"><Link to={'./product/' + product.id}>{product.name}</Link></div>
                            <div className="product-brand">{product.logo}</div>
                            <div className="price">{product.price}</div>
                            <div className="rating"> 4 stars ({product.numreview} reviews)</div>
                          </div>
                      </li>
                    )})
                  }      
                </ul>
                
    </div>
    )
    
}
export default HomeScreen;