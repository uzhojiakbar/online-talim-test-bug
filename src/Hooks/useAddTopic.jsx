import React, { useState } from 'react'
import { instance } from './api'

export function useAddTopic() {
    const [fanMavzulari, setFanMavzulari] = useState([])
    const addTopics = async (fanNomi) => {
        try {
            const response = await instance.get(`/api/topic/${fanNomi}`)
            setFanMavzulari(response.data)
        } catch (error) {
            console.error("fanni  olishda xatolik", error)
        }
    }
    
    return ({ fanMavzulari, setFanMavzulari, addTopics })
}

