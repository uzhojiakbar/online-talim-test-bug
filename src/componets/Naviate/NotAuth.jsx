import React from 'react'
import { Navigate } from 'react-router-dom'

const NotAuth = ({ children }) => {
    if (!localStorage.getItem("login") || !localStorage.getItem("token")) {
        console.log("Royxatdan oting");
        return <Navigate to={"/"} />
    }

    return children
}

export default NotAuth
