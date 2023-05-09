import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

// Icons imported
import {BiSearchAlt} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'

// Imported Images
import Cube from '../../../Assets/Cube.png'

const Header = () =>{
    return(
        <div>
            <div className='topSection'>
                {/* Header */}
                <div className='headerSection flex'>
                    <div className='title'>
                        <h1>Hello Fabio Veira</h1> <br />
                    </div>
                    {/* Search bar & Icon */}
                    <div className="searchBar flex">
                        <BiSearchAlt className="icon"/>
                        <input type="text" placeholder='Search anything...' />
                    </div>
                    <div className='notif'>
                    <IoMdNotificationsOutline className="icon"/>
                    </div>
                </div>
                <div className='par'>
                    <p>Welcome back, explore Now!</p>
                </div>
                {/* Card */}
                <div className='cardSection flex'>
                    <div className='rightCard flex'>
                        <div className=''>
                            <h1>New arrival change <br /> your lifestyle</h1>
                            <p>Change your daily life with a modern lifestyle</p>
                            <Link to="/check" className='link'>Check now</Link>
                        </div>
                        <div className='im'>
                            <img src={Cube} alt="Zoss" />
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        
    )
}

export default Header