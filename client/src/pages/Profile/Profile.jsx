import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RighSide from '../../components/RighSide/RighSide'
const Profile = () => {
  
    return (
    <div className='Profile'>
    <ProfileLeft/>
    <div className="Profile-center">
        <ProfileCard/>
        <PostSide/>
    </div>
    <RighSide/>
    </div>
  )
}

export default Profile