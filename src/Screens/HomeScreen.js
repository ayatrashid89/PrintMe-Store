import React from 'react';
import dataArray from '../dataArray';


function HomeScreen (props){
    return(
    <div>
         <h1>HomeScreen </h1>
        <ul className="products">
                  {
                    dataArray.products.map(product =>
                      <li>
                          <div className="product">
                              <img className="product-img" src={product.image} alt="logo1"/>
                    <div className="product-name"><a href="T-shirt">{product.name}</a></div>
                    <div className="product-brand">{product.logo}</div>
                    <div className="price">{product.price}</div>
                              <div className="rating"> 4 stars ({product.numreview} reviews)</div>

                          </div>
                      </li>
                    )
                  }      
                </ul>
                
    </div>
    )
}
export default HomeScreen;