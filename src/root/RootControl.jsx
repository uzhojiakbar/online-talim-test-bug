import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../register/register";
import Login from "../login/Login";
import NotFound from "../componets/NootFound";
import Profile from "../componets/profile/Profile";
import Leson from "../componets/profile/lessons/Lesons";
import Admin from "../componets/profile/AdminDoshboard/AdminDoshboard";
import LessonTopic from "../componets/profile/AdminDoshboard/AdminLessons/LessonTopic";
import { getCookie } from "../Hooks/getCooce";

// Himoyalangan marshrut komponenti
const ProtectedRoute = ({ children, allowedRoles, token, role }) => {
    if (!token) {
        // Agar token mavjud bo'lmasa, foydalanuvchini login sahifasiga yo'naltiradi
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(role)) {
        // Agar rol mos kelmasa, foydalanuvchini asosiy sahifaga yo'naltiradi
        return <Navigate to="/" />;
    }

    return children;
};

function RootControl() {
    const token = getCookie("token"); // Cookie'dan tokenni o'qiymiz
    const role = getCookie("role"); // Cookie'dan rolni o'qiymiz

    return (
        <BrowserRouter>
            <Routes>
                {/* Asosiy sahifa */}
                <Route path="/" element={token ? <Navigate to="/profile" /> : <Home />} />
                {/* Kirish va ro‘yxatdan o‘tish sahifalari */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* Admin sahifalari */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute token={token} role={role} allowedRoles={["admin"]}>
                            <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/:nomi"
                    element={
                        <ProtectedRoute token={token} role={role} allowedRoles={["admin"]}>
                            <LessonTopic />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/:nomi/:darsnomi"
                    element={
                        <ProtectedRoute token={token} role={role} allowedRoles={["admin"]}>
                            <LessonTopic />
                        </ProtectedRoute>
                    }
                />

                {/* Foydalanuvchi sahifalari */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute token={token} role={role} allowedRoles={["user"]}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile/lesson"
                    element={
                        <ProtectedRoute token={token} role={role} allowedRoles={["user"]}>
                            <Leson />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile/lesson/:lessonId"
                    element={
                        <ProtectedRoute token={token} role={role} allowedRoles={["user"]}>
                            <Leson />
                        </ProtectedRoute>
                    }
                />

                {/* Not Found sahifasi */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootControl;
