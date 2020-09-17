import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProuductScreen from './Screens/ProductScreen';
 import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  } 
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  } 
  return (
    <BrowserRouter>
    <div className="grid-container">

        <header className="header">
            <div className="brand">
                <button onClick={openMenu}> &#9776; </button>
                <Link to='/'>PrintMe</Link>
            </div>
            <div className="header-links">
               <a href="singin.html">Sing in</a>
               <a href="cart.html">Cart</a>
            </div>
        </header>

        <aside className="sidebar">
           <h2>Shopping list</h2>
           <button className="closex" onClick={closeMenu}>x</button>
           <ul>
               <li>
                   <a href="t-shirt">T-shirt</a>
               </li>
               <li>
                   <a href="pants">pants</a>
               </li>
           </ul>
        </aside>
        <main className="main">
            <div className="content">
              
              <Route path='/' exact={true} component={HomeScreen} />
              <Route path="/product/:id" component={ProuductScreen} />
                
            </div>
        </main>

        <footer className="footer">
            All right reserved
        </footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
