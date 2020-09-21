import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen (props){

  // using React hooks, https://reactjs.org/docs/hooks-intro.html
  //const [products, setProducts] = useState([]);
  const productList =useSelector( state => state.productList);
  const {products,loading, error} = productList;
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch (listProducts())
    
   
    return () => {
        //
    };
  }, [ ]
  )
    return(
      loading ? <div>...loading</div>:
      error ? <div>{error}</div>:
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