import React, { useState } from "react";
import AdminNav from "./AdminNav";
import MonthlyUserStatsChart from "./Chart";
import { lessonData } from "../lessons/lesson/lessonData";
import { NavLink, useNavigate } from "react-router-dom";
import Addlesson from "./AdminLessons/Addlesson";
import { useFan } from "../../../Hooks/useFan";
const AdminPage = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Murodullayev Xojakbar",
            email: "Hojiakbar@gmail.com",
            role: "users"
        },
        {
            id: 2,
            name: "Rahmadjon Abdullayev",
            email: "Rahmadjonabdullaye@gmail.com",
            role: "admin"
        },
        {
            id: 3,
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
    const { fan ,loading} = useFan()

    return (
        <div className="bg-slate-100 ">
            <AdminNav />
            <div className="flex-1 p-6 pt-28">
                <Addlesson />
                <div id="manage-users ">
                    <h3 className="text-2xl font-semibold mb-4">Foydalanuvchilarni boshqarish</h3>
                    <div className=" bg-white py-6 border-gray-300 rounded-lg shadow-lg">
                        <table className="min-w-full"  >
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Ism</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Ro'l</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">o'rchirish</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((i) => (
                                    <tr key={i.id} className="">
                                        <td className="px-6 py-4 text-sm text-gray-900 ">{i.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{i.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{i.role}</td>
                                        <td className="px-6 py-4 text-sm text-red-600 hover:text-red-800 cursor-pointer">O'chirish</td>
                                        <td className="px-6 py-4 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
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
