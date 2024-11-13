import React, { useState, useEffect } from 'react';
import { instance } from './api'; // axios instance
import { useRes } from '../componets/Context/useContext'; // useRes konteksini import qilish

export function useFan() {
    const { fan, setFan } = useRes(); // konteksdan fanni oling
    const [loading, setLoading] = useState(false);

    // GET so'rovini bajarish
    const getData = async () => {
        setLoading(true);
        try {
            const res = await instance.get('api/lessons'); // API dan fanlar ro'yxatini oling
            setFan(res.data); // fanlarni konteksga saqlang
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Xatolik:', error);
        }
    };

    // POST so'rovi (yangi fan qo'shish)
    const handleSubmit = async (subjectName, description) => {
        setLoading(true);
        const data = {
            nomi: subjectName,
            desc: description,
        };
        try {
            await instance.post('api/lessons', data);
            getData();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Xatolik:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []); 

    return {
        fan,
        loading,
        handleSubmit,
        getData
    };
}
