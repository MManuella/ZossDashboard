import React from 'react';
import './App.css';
import Body from './Components/Body/body.jsx';
import LeftSidebar from './Components/LeftSidebar/leftSidebar';
import RightSidebar from './Components/RightSidebar/rightSidebar.jsx'



const App =() =>{
    return(
        <div className='container'>
        <LeftSidebar/>
        <Body/>
        <RightSidebar/>
      </div>
    )
}

export default App