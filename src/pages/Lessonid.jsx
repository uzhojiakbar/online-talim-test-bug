import React from 'react'
import { lessonData } from '../componets/profile/lessons/lesson/lessonData'
import { useParams } from 'react-router-dom'

const Lessonid = () => {

    const {lessonId} = useParams()
    console.log(lessonId);
    
    return (
        <>
            <h1 className='text-2xl py-3'>{lessonData[lessonId?lessonId:1 - 1]?.name}</h1>
            <p className='text-slate-400'>{lessonData[lessonId?lessonId:1 - 1]?.desc}</p>
            <div>{lessonData[lessonId?lessonId:1 - 1]?.videos}</div>
        </>
    )
}

export default Lessonid
