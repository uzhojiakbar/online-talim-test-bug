import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const nav = useNavigate()

  if(!localStorage.getItem("login") || !localStorage.getItem("token")){
    console.log("Oldin royxatdan oting");
    nav("/")
    return;
  }

  return (
    <div className='text-white'>
      <h1>profile ga hush kelibsiz</h1>
    </div>
  )
}

export default Profile
