import React from 'react';
import './product.css';
import { onClick } from 'react';
import { useEffect, useState } from 'react';

// Imported icons
import {GiCube} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
import {IoMdAdd} from 'react-icons/io'

const handleClick = () => {
    // code for handleclick function
}
const Product =()=>{
    const [active, setActive] = useState('');
    return(
        <div className='listingSection'>
            <div className='heading flex'>
                <h1>New Trend Style</h1>
                <button>View all</button>
            </div>
            {/* Categories products */}
            <div className='btn flex'>
                <button className='cube1' onClick={handleClick}>
                    <div className='category1'>
                        <GiCube className='cube-icon'/>
                        <span className='smallText'>
                            Recommandation
                        </span>
                    </div>
                </button>
                <button className='cube2' onClick={handleClick}>
                    <div className='category2'>
                        <GiCube className='cube-icon'/>
                        <span className='smallText'>
                            Lifestyle
                        </span>
                    </div>
                </button>
                <button className='cube3' onClick={handleClick}>
                    <div>
                        <GiCube className='cube-icon'/>
                        <span className='smallText'>
                            Accessories
                        </span>
                    </div>
                </button>
                <button className='cube4' onClick={handleClick}>
                    <div>
                        <GiCube className='cube-icon'/>
                        <span className='smallText'>
                            T-Shirt
                        </span>
                    </div>
                </button>
                <button className='cube5' onClick={handleClick}>
                    <div>
                        <GiCube className='cube-icon'/>
                        <span className='smallText'>
                            Hobby & Combs
                        </span>
                    </div>
                </button>
            </div>
            {/* Product List */}
            <div className='secContainer flex'>
                <div className='pro'>
                    <div className='cardItem'>
                        <div className='we'>
                            <div className='message'>
                                <p>Save 50%</p>
                            </div>
                            <AiOutlineHeart className='pro-icon'/>
                        </div>
                        <div className='numb'>
                            <button className=''onClick={handleClick}>
                                1
                            </button>
                        </div>
                    </div>
                    <div className='product-info'>
                        <h3>Kids Duck Toys</h3>
                        <p className='ac'> Accessories(kids)</p>
                        <div className='item-price'>
                            <p className='price'>$88.00</p>
                            <span>$44.00</span>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className='pro'>
                    <div className='cardItem'>
                        <div className='we'>
                            <div className='message'>
                                <p>Save 50%</p>
                            </div>
                            <AiOutlineHeart className='pro-icon'/>
                        </div>
                      <div className='numb'>
                            <button className='' onClick={handleClick}>
                                <IoMdAdd className='add'/>
                            </button>
                        </div>
                    </div>
                    <div className='product-info'>
                        <h3>Kids Duck Toys</h3>
                        <p className='ac'> Accessories</p>
                        <div className='item-price'>
                            <p className='price'>$88.00</p>
                            <span>$32.00</span>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className='pro'>
                    <div className='cardItem'>
                        <div className='we'>
                            <div className='message'>
                                <p>Save 50%</p>
                            </div>
                            <AiOutlineHeart className='pro-icon'/>
                        </div>
                        <div className='numb'>
                            <button className='' onClick={handleClick}>
                                <IoMdAdd className='add'/>
                            </button>
                        </div>
                    </div>
                    <div className='product-info'>
                        <h3>Kids Duck Toys</h3>
                        <p className='ac'> Accessories(kids)</p>
                        <div className='item-price'>
                            <p className='price'>$100.00</p>
                            <span>$20.00</span>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className='pro'>
                    <div className='cardItem'>
                        <div className='we'>
                            <div className='message'>
                                <p>Save 50%</p>
                            </div>
                            <AiOutlineHeart className='pro-icon'/>
                        </div>

                        <div className='numb'>
                            <button className='' onClick={handleClick}>
                                <IoMdAdd className='add'/>
                            </button>
                        </div>
                    </div>
                    <div className='product-info'>
                        <h3>Kids Duck Toys</h3>
                        <p className='ac'> Accessories</p>
                        <div className='item-price'>
                            <p className='price'>$16.00</p>
                            <span>$44.00</span>
                        </div>
                    </div>
                </div>
                <div className='pro'>
                    <div className='cardItem'>
                        <div className='we'>
                            <div className='message'>
                                <p>Save 50%</p>
                            </div>
                            <AiOutlineHeart className='pro-icon'/>
                        </div>
                        <div className='numb'>
                            <button className='' onClick={handleClick}>
                                <IoMdAdd className='add'/>
                            </button>
                        </div>
                    </div>
                    <div className='product-info'>
                        <h3>Kids Duck Toys</h3>
                        <p className='ac'> Accessories(kids)</p>
                        <div className='item-price'>
                            <p className='price'>$80.00</p>
                            <span>$44.00</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Product