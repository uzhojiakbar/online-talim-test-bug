import React, { Profiler, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../register/register'
import Login from '../login/Login'
import NotFound from '../componets/NootFound'
import Profile from '../componets/profile/Profile'
import { getCookie } from '../Hooks/getCooce'
import Lesson from '../componets/profile/lessons/lesson/lesson'
import Admin from '../componets/profile/AdminDoshboard/AdminDoshboard'
import LessonTopic from '../componets/profile/AdminDoshboard/AdminLessons/LessonTopic'
// import TheMainLesson from '../componets/profile/AdminDoshboard/AdminLessons/TheMainLesson'
function RootControl() {
    const token = getCookie('token')
    const [admin, setAdmin] = useState(true)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={token ? <Navigate to={'/profile'} /> : <Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/profile' element={token ? <Profile /> : <Navigate to={"/"} />} />
                <Route path='/profile/lesson' element={<Lesson />} />
                <Route path='/profile/lesson/:lessonId' element={<Lesson />} />
                <Route path='/admin/:nomi' element={<LessonTopic />} />
                <Route path='*' element={<NotFound />} />
                {/* <Route path='/admin/:nomi/:nomi' element={<TheMainLesson />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RootControl
