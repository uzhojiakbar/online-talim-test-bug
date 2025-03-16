import React, { useEffect, useState } from 'react'
import { instance } from './api'

export function useFan() {
    const [fan, setFan] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const response = await instance.get('/api/lessons')
                setFan(response?.data)
                setLoading(false)
            }
            catch (error) {
                console.error(error, "Malumot olish da Hatolik")
            }
        }
        getData()
    }, [])
    return ({ fan, loading })
}

export default useFan;
