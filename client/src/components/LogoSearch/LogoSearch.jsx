import React from 'react'
import Logotype from "../../img/logo.png"
import {UilSearch} from '@iconscout/react-unicons'
import "./LogoSearch.css"
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logotype} alt="" />
        <div className="Search">
            <input type="text" placeholder='Поиск' />
            <div className="s-icon">
                    <UilSearch/>
            </div>
        </div>
    
    </div>
  )
}

export default LogoSearch