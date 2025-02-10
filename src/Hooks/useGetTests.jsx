import { useState } from "react";
import { instance } from "./api";

const UseGetTest = () => {
    const [getQuizzes, setQuizzes] = useState([]);
    const getTest = async (nomi, dasrnomi) => {
        try {
            const response = await instance.get(`/api/test/${nomi}/${dasrnomi}`);
            setQuizzes(response.data);
        } catch (err) {
            console.error("Ma'lumot olishda xatolik bor", err);
        }
    };
    return ({ getTest, getQuizzes, setQuizzes })
}
export default UseGetTest;