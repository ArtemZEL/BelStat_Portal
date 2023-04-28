import React from 'react'
import Cover from "../../img/cover.jpg"
import Profile from '../../img/Profile.png'
import "./ProfileCard.css"
const ProfileCard = () => {
    const ProfilePage=true;
    return (
    <div className="ProfileCard">
           <div className="ProfileImg">
            <img src={Cover} alt="" />        
            <img src={Profile} alt="" />        
           </div>
            <div className="ProfileName">
                <span>Ariom ZG</span>
                <span>Front-end Developer</span>
            </div>
            <div className="followStatus">
                    <hr />
                    <div>
                        <div className="followFriends">
                                <span>2,652</span>
                                <span>Подписок</span>
                        </div>
                        <div className="vl"></div>
                        <div className="followFriends">
                            <span>15</span>
                            <span>Друзей</span>
                        </div>
                            {ProfilePage && 
                            
                                <>
                                    <div className='vl'>

                                    </div>
                                    <div className="followFriends">
                                        <span>3</span>
                                        <span>Постов</span>
                                    </div>
                                </>
                            }
                    </div>
                    <hr />
            </div>  
            {ProfilePage ? "": <span>Мой профиль</span>}

    </div>
  )
}
export default ProfileCard