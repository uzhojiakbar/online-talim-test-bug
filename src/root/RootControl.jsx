import React, { Profiler } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../register/register'
import Login from '../login/Login'
import NotFound from '../componets/NootFound'
import Profile from '../componets/profile/Profile'
import NotAuth from '../componets/Naviate/NotAuth'
function RootControl() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<NotAuth>
                    <Profile />
                </NotAuth>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootControl
