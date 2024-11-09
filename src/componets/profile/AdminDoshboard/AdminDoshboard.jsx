import React, { useState } from "react";
import AdminNav from "./AdminNav";
import MonthlyUserStatsChart from "./Chart";
import { lessonData } from "../lessons/lesson/lessonData";
import { useNavigate } from "react-router-dom";
import { useRes } from "../../Context/useContext";

const AdminPage = () => {
    const { res, setRes } = useRes();

    // const [res, setRes] = useState(lessonData)
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
        const updatedLessons  = [...res, data]
        setRes(updatedLessons)
        console.log(res)
        nav('/profile/lesson')
    }
    return (
        <div className="bg-slate-100 ">
            <AdminNav />
            <div class="flex-1 p-6 pt-28">
                <div onSubmit={onsumbit} id="add-lessons" class="mb-12">
                    <h3 class="text-2xl font-semibold mb-4">Dars qo'shish</h3>
                    <form class="space-y-6">
                        <div>
                            <label for="lessonName" class="block text-sm font-medium text-gray-700">Dars nomi</label>
                            <input onChange={onchange} type="text" id="lessonName" name="lessonName" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label for="lessonName" class="block text-sm font-medium text-gray-700">Video yuklash</label>
                            <input onChange={onchange} type="text" id="lessonName" name="lessonLink" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="video linki" />
                        </div>
                        <div>
                            <label for="lessonDescription" class="block text-sm font-medium text-gray-700">Dars tavsifi</label>
                            <textarea onChange={onchange} id="lessonDescription" name="lessonDesc" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" class="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Darsni qo'shish</button>
                    </form>
                </div>

                <div id="manage-users ">
                    <h3 class="text-2xl font-semibold mb-4">Foydalanuvchilarni boshqarish</h3>
                    <div className=" bg-white py-6 border-gray-300 rounded-lg">
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
