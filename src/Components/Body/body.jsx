import React from 'react';
import './body.css';
import Header from './Header/header'
import Product from './Products/product';



const Body =() =>{
    return(
        <div className='mainContent'>
            <Header/>
            <div className='bottom flex'>
                <Product/>
            </div>
        </div>
    )
}

export default Body