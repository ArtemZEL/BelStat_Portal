import React from 'react'
import "./Home.css"
import Profile from '../../components/ProfileSlides/Profile'
import PostSide from '../../components/PostSide/PostSide'
import RighSide from '../../components/RighSide/RighSide'
const Home = () => {
  return (
    <div className="Home">
        <Profile/>
        <PostSide/>
        <RighSide/>
    </div>
  )
}

export default Home