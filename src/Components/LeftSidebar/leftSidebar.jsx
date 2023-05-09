import React from 'react';
import './leftSidebar.css'
import { onClick } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Imported Images
import Logo from '../../Assets/Logo.png'

// Imported Icons
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiWalletAlt} from 'react-icons/bi'
import {TbFileAnalytics} from 'react-icons/tb'
import {TiCreditCard} from 'react-icons/ti'
import {HiOutlineSupport} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import {BsCircleHalf} from 'react-icons/bs'
import {IoMdArrowDropup} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {MdOutlineToggleOff} from 'react-icons/md'



const handleClick = () => {
    // code for handleclick function
}
const LeftSidebar =()=>{
    const [active, setActive] = useState('');
    return(
        <div className='sideBar grid'>
            {/* Logo */}
            <div className='logoDiv flex'>
                <img src={Logo} alt="Zoss" />
            </div>
            {/* User Profile */}
            <div className='circle'>
                <h4><span>Fabio</span><br/> Veira </h4>
                <div className='iconDiv'>
                    <button className='' onClick={handleClick}>
                        <IoMdArrowDropup className='icons'/>
                        <IoMdArrowDropdown className='icons'/>
                    </button>
                </div>
            </div>
            {/* Line dash */}
            <div class="lines">

            </div>
            {/* Menu lists */}  
            <div className='menuDiv'>
                <div className='hover-link'></div>
                    <ul className='menuLists grid'>
        {/*Main Dashboard */}
                    <li className="listItem">
                    <Link to="/" className='menuList flex active' >
                        
                        <AiOutlinePieChart className='icon'/>
                        <span className='smallText'>
                        Main Dashboard
                        </span>
                        <div className='hover-link'></div>
                    </Link>
                    
                    </li>
                    {/* <div className='hover-link'></div> */}
                    {/*Payement */}
                    <li className="listItem">
                    <Link to="/payment" className='menuList flex'>
                        <BiWalletAlt className='icon'/>
                        <span className='smallText'>
                        Payment
                        </span>
                    </Link>
                    </li>
                    {/* Manage Stats */}
                    <li className="listItem">
                    <Link to="/manage-stats" className='menuList flex'>
                        <TbFileAnalytics className='icon'/>
                        <span className='smallText'>
                        Manage Stats
                        </span>
                    </Link>
                    </li>
                    {/* Invoice Information */}
                    <li className="listItem">
                    <Link to="/invoice-information" className='menuList flex'>
                        <TiCreditCard className='icon'/>
                        <span className='smallText'>
                        Invoice Information
                        </span>
                    </Link>
                    </li>
                    {/* Support */}
                    <li className="listItem">
                    <Link to="/support" className='menuList flex'>
                        <HiOutlineSupport className='icon'/>
                        <span className='smallText'>
                        Support
                        </span>
                    </Link>
                    </li>
                    {/* Settings */}
                    <li className="listItem">
                    <Link to="/settings" className='menuList flex'>
                        <AiOutlineSetting className='icon'/>
                        <span className='smallText'>
                        Settings
                        </span>
                    </Link>
                    </li>
                    {/* Light Mode*/}
                    <li className="listItem">
                        <div className='menuList flex'>
                        <BsCircleHalf className='off-icon'/>
                            <span className='smallText'>
                            Light Mode
                            </span>
                            <button className='light' onClick={handleClick}>
                                <MdOutlineToggleOff className='icon'/>
                            </button>
                        </div>
                    </li>
                    </ul>
                        {/* Authentification */}
                    <div className='authentif'>
                        <Link to="/logout" className='lbtn flex'>
                        <FiLogOut className='loicon'/>
                        <span className='logDiv'>
                            Logout
                        </span>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default LeftSidebar