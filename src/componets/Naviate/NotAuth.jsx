import React from 'react'
import { Navigate } from 'react-router-dom'

const NotAuth = ({ children }) => {
    if (!localStorage.getItem("login") || !localStorage.getItem("token")) {
        console.log("Royxatdan oting");
        alert('siz royhatdan otmagansiz oldin royhatdan otin')
        return <Navigate to={"/register"} />
    }
    return children
}

export default NotAuth
