import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function HomeScreen (props){

  const [products, setProducts] = useState([]);
  useEffect (() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProducts(data)
    }
    fetchData ();
    return () => {

    };
  }, [ ]
  )
    return(
    <div>
         <h1>HomeScreen </h1>
        <ul className="products">
                  {
                    products.map((product) => {
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