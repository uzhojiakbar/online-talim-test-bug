import React from 'react'
import { lessonData } from '../componets/profile/lessons/lesson/lessonData'
import { useParams } from 'react-router-dom'
import { useRes } from '../componets/Context/useContext'
const Lessonid = () => {
    const { res, setRes } = useRes();
    const { lessonId } = useParams()
    console.log(lessonId);

    return (
        <>
            <h1 className='text-2xl py-3'>  {res[lessonId ? lessonId : 1 - 1]?.name}</h1>
            <p className='text-slate-400'>{res[lessonId ? lessonId : 1 - 1]?.desc}</p>
            <div>{res[lessonId ? lessonId : 1 - 1]?.videos}</div>
        </>
    )
}

export default Lessonid
