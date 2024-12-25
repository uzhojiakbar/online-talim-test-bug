import React from 'react'
import { instance } from './api'

function updateTopic() {

  const updateFunctons = async (nomi, topicName, updateData) => {
    console.log(updateData)
    try {
      const response = await instance.put(`http://localhost:5000/api/topic/${nomi}/${topicName}`, updateData)
      window.location.reload()
    } catch (err) {
      console.log("Malumotlarni yangilashda xatolik", err)
    }
  }
  return ({ updateFunctons })
}

export default updateTopic