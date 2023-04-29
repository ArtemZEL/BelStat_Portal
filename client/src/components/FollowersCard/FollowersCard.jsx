import React from 'react'
import './FollowersCard.css'
import {FollowerFriend} from '../../Data/FollowersFriendData'
const FollowersCard = () => {
  return (
    <div className='FollowerCard'>
        <h3>Who is following you</h3>
        {FollowerFriend.map((follower,id)=>{
                return(
                    <div className="follower">
                        <div>
                            <img src={follower.img} alt="" className='followerfrendimg'/>
                            <div className="name">
                                <span>
                                    {follower.name}
                                </span>
                                <span>
                                    {follower.username}
                                </span>
                            </div>
                        </div>
                        <button className='button fc-button'>Добавить</button>
                    </div>
                )
        })}

    </div>
  )
}

export default FollowersCard