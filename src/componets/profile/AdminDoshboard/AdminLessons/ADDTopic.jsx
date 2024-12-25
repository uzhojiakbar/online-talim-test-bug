import React from 'react'
import { instance } from '../../../../Hooks/api'

function ADDTopic() {
    const AddNewMavzu = async (newLesson, nomi) => {
        try {
            const response = await instance.post(`/api/topic/${nomi}`, newLesson)
            window.location.reload()
        } catch (error) {
            console.error('Xatolik', error)
        }
    }
    return ({ AddNewMavzu })
}

export default ADDTopic
