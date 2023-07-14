import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Quick Chat</span>
      <button style={{backgroundColor:"#4e3b30"}}><div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
      </div></button>
      <button onClick={()=>signOut(auth)}>logout</button>
    </div>
  )
}

export default Navbar