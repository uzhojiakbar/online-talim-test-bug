import React from 'react'
import { instance } from './api'

function usedelTopic() {
  const delTopic = async (nomi,topic ) => {
    console.log(nomi,topic)
    // try {
    //   const response = instance.delete(`/api/topic/test/nmbjh`)
    //   console.log(response.data)
    // } catch (error) {
    //   console.error("dars o'chirishda xatolik", error)
    // }
  }
  return ({delTopic})
}

export default usedelTopic