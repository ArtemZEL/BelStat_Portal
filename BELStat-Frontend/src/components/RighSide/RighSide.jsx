import React, { useState } from 'react'
import './RighSide.css'
import Home from "../../img/Home1.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
const RighSide = () => {
    const[modalOpened,setModalOpened]=useState(false);
  return (
    <div className='RighSide'>
        <div className="navIcon">
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />

        </div>
        <TrendCard/>

        <button className="button r-button"onClick={()=>setModalOpened(true)}>
            Поделиться
            </button>
                <ShareModal
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                />
    </div>
  )
}

export default RighSide