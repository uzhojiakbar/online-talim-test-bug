import React from 'react'
import { instance } from './api'

export function AddFan() {
    const addFanFunction = async (subjectName,description) => {
        const data = { nomi: subjectName, desc: description }
        try {
            const response = await instance.post('/api/lessons',data)
            console.log(response.data)
            window.location.reload()
        } catch (error) {
            console.error("Fanni 'qoshishda xatolik", error)
        }
    }
    return ({ addFanFunction })
}
export default AddFan
