import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import MonthlyUserStatsChart from "./Chart";
import Addlesson from "./AdminLessons/Addlesson";
import { instance } from "../../../Hooks/api";
const AdminPage = () => {

    const [userData, setUserData] = useState([])
    useEffect(() => {
        const getAllusers = async () => {
            try {
                const response = await instance.get('/api/users')
             setUserData(response.data)
            }
            catch (error) {
                console.error(error, "Malumot olish da Hatolik")
            }
        }
        getAllusers()
    }, [])
    const monthlyStats = [
        { month: '2024-01', userCount: 50 },
        { month: '2024-02', userCount: 70 },
        { month: '2024-03', userCount: 90 },
        { month: '2024-04', userCount: 110 },
        { month: '2024-05', userCount: 130 },
        { month: '2024-06', userCount: 50 },
    ];

    return (
        <div className="bg-slate-100 ">
            <AdminNav />
            <div className="flex-1 p-6 pt-28">
                <Addlesson />
                <div id="manage-users ">
                    <h3 className="text-2xl font-semibold mb-4">Foydalanuvchilarni boshqarish</h3>
                    <div className=" bg-white py-6 p-6 border-gray-300 rounded-lg shadow-lg">
                        {userData?.map((item)=>(
                            <div key={item?._id}>
                                <h1>{item?.group}</h1>
                                <h1>{item?.username}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MonthlyUserStatsChart monthlyStats={monthlyStats} />
        </div>
    );
};

export default AdminPage;
