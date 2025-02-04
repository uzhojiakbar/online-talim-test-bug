import React from 'react'
import { instance } from './api'

function useDeletequiz() {
    const deleteQuiz = async (nomi, dasrnomi, id) => {
        console.log(nomi, dasrnomi, id)
        try {
            const response = await instance.delete(`/api/test/${nomi}/${dasrnomi}/${id}`)
            // console.log('test ochirildi')
            window.location.reload();
        } catch (err) {
            console.log('testni yanilashda xatolik ')
        }
    }
    return ({ deleteQuiz })
}

export default useDeletequiz