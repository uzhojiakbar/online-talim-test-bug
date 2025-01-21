import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import MonthlyUserStatsChart from "./Chart";
import Addlesson from "./AdminLessons/Addlesson";
import { instance } from "../../../Hooks/api";
import Scroltop from "../../Scroltop";
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
 
    return (
        <div className="bg-slate-100 ">
            <AdminNav />
            <div className="flex-1 p-6 pt-28">
                <Addlesson />
                <div id="manage-users">
                    <h3 className="text-2xl font-semibold mb-4">Foydalanuvchilarni boshqarish</h3>
                    <div className=" bg-white py-6 p-6 border-gray-300 rounded-lg shadow-lg">
                        {userData?.map((item)=>(
                            <div className="bg-slate-100 p-2 rounded-md mt-2 flex justify-between px-6" key={item?._id}>
                                <h1>{item?.group}</h1>
                                <h1>{item?.username}</h1>
                                <select name="" id="" className="bg-transparent  ">
                                    <option value="admin">admin</option>
                                    <option value="user">user</option>
                                </select>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Scroltop/>
        </div>
    );
};

export default AdminPage;
