import React from 'react';
import './rightSideBar.css'
import { useEffect, useState } from 'react';

// Imported Icons
import {VscCircleLarge} from 'react-icons/vsc'
import {MdCircle} from 'react-icons/md'
import {BsRecordCircle} from 'react-icons/bs'
import {IoIosStats} from 'react-icons/io'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import {FcSimCardChip} from 'react-icons/fc'
import {RxCross2} from 'react-icons/rx'


const RightSidebar = () =>{
    const [active, setActive] = useState('');
    return(
        <div className='secondContent'>
            {/* Title */}
            <div className='title'>
                <h3>Order information</h3>
                <RxCross2 className='cross'/>
            </div>
            
            {/* Card */}
            <div className='card'>
                {/* Card information */}
                <div className='card-container'>
                    <div className='fcard'>
                        <p className=''>Jajan Card</p>
                        <p className=''>1234  ****</p>
                    </div>
                    <div className='mcard'>
                        <p className=''>****</p>
                    </div>
                    <div className='lcard'>
                        <p className=''>WHYZ</p>
                        <p className=''>****</p>
                    </div>
                </div>
                {/* mi-circle */}
                <div className='demi'>
                    <div className='demi-cercle'></div>
                </div>
            </div>
            {/* Second card */}
            <div className='scard'>
                {/* Information */}
                <div className='fscard'>
                    <p className='finfo'>CARD HOLDER</p>
                    <p className='linfo'>MAMANG ZAHRI</p>
                </div>
                <div className='lscard'>
                    <p className='finfo'>EXPIRED</p>
                    <p className='linfo'>10/26</p>
                </div>
                <div className='credit'>
                    <FcSimCardChip className='cart'/>
                </div>
            </div>
            {/* Rectangle container */}
            <div className='rectangle'>
                <div className='contain'>
                    <div className='tcircle'>
                        <MdCircle className='ticon'/>
                        <VscCircleLarge className='ticon'/>
                        <VscCircleLarge className='ticon'/>
                    </div>
                    {/* Title */}
                    <h5 className='pay'>Payement</h5>
                    {/* Jajan card */}
                    <div className='jacard'>
                        <BsRecordCircle className='jicon'/>
                        <p>jajan Card</p>
                        <IoIosStats className='jicon'/>
                    </div>
                    <div className='micard'>
                        <BsRecordCircle className='micon'/>
                        <p>Nginjem Card</p>
                        <IoIosStats className='micon'/>
                    </div>
                    <div className='miscard'>
                    <div className='carre'></div>
                    {/* Info carre */}
                    <div className='incarre'>
                        <h5>Kids Duck Toys</h5>
                        <p>Category: Accessories</p>
                    </div>
                    </div>
                    {/* Info details */}
                    <div className='info'>
                            <div className='left'>
                                <p>Order Detail</p>
                                <p>Subtotal</p>
                                <p>Shipping</p>
                            </div>
                            <div className='right'>
                                <p className='name'>Kids Duck Toys</p>
                                <div className='item-price'>
                                    <p className='price'>$88.00</p>
                                    <span>$44.00</span>
                                </div>
                                <p className='free'>Free</p>
                            </div>
                    </div>
                    {/* Line dash */}
                    <div className='line'>    
                    </div>
                {/* Information price */}
                <div className='total'>
                    <div className='tbtn flex'>
                        <div className='menuList flex'>
                            <div className='next'>
                                <AiOutlineDoubleRight className='nicon'/>
                            </div>
                            <p>Total</p>
                            <span className='tdiv'>
                                $44.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    </div>
        
    )
}

export default RightSidebar