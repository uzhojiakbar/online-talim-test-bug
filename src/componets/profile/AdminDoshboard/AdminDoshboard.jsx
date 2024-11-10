import React, { useState } from "react";
import AdminNav from "./AdminNav";
import MonthlyUserStatsChart from "./Chart";
import { lessonData } from "../lessons/lesson/lessonData";
import { NavLink, useNavigate } from "react-router-dom";
import { useRes } from "../../Context/useContext";
import Addlesson from "./AdminLessons/Addlesson";
const AdminPage = () => {
    const { res, setRes } = useRes();
    const [iframe, setIframe] = useState("")
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Murodullayev Xojakbar",
            email: "Hojiakbar@gmail.com",
            role: "users"
        },
        {
            id: 1,
            name: "Rahmadjon Abdullayev",
            email: "Rahmadjonabdullaye@gmail.com",
            role: "admin"
        },
        {
            id: 1,
            name: "Jamshidbek Ismonaliyev",
            email: "jamshidbek@gmail.com",
            role: "users"
        },
    ])
    const monthlyStats = [
        { month: '2024-01', userCount: 50 },
        { month: '2024-02', userCount: 70 },
        { month: '2024-03', userCount: 90 },
        { month: '2024-04', userCount: 110 },
        { month: '2024-05', userCount: 130 },
        { month: '2024-06', userCount: 50 },
    ];
    const [data, setData] = useState({
        id: res.length + 1,
        lessonName: "",
        lessonLink: "",
        lessonDesk: "",
        title: `${res.length + 1}-dars`
    })

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const nav = useNavigate()
    const onsumbit = (e) => {
        e.preventDefault();
        const updatedLessons = [...res, data]
        setRes(updatedLessons)
        nav('/profile/lesson')
    }
    return (
        <div className="bg-slate-100 ">
            <AdminNav />
            <div class="flex-1 p-6 pt-28">
                <Addlesson />

                <div id="manage-users ">
                    <h3 class="text-2xl font-semibold mb-4">Foydalanuvchilarni boshqarish</h3>
                    <div className=" bg-white py-6 border-gray-300 rounded-lg shadow-lg">
                        <table className="min-w-full"  >
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Ism</th>
                                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Ro'l</th>
                                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">o'rchirish</th>
                                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((i) => (
                                    <tr className="">
                                        <td class="px-6 py-4 text-sm text-gray-900 ">{i.name}</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">{i.email}</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">{i.role}</td>
                                        <td class="px-6 py-4 text-sm text-red-600 hover:text-red-800 cursor-pointer">O'chirish</td>
                                        <td class="px-6 py-4 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                                            <select name="" id="">
                                                <option value="">admin</option>
                                                <option value="">users</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <MonthlyUserStatsChart monthlyStats={monthlyStats} />
        </div>

    );
};

export default AdminPage;
