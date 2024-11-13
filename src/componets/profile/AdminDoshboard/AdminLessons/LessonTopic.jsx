import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFan } from '../../../../Hooks/useFan';
import { instance } from '../../../../Hooks/api';

function LessonTopic() {
  const { fan, loading } = useFan();
  const { nomi } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    if (fan && Array.isArray(fan)) {
      const foundLesson = fan?.find((f) => f.nomi === nomi);
      setLesson(foundLesson);
    }
  }, [fan, nomi]);

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  if (!lesson) {
    return <div>Fan topilmadi!</div>;
  }
  
  return (
    <div className='bg-slate-100 min-h-[100vh] p-8'>
      <h1 className='text-4xl font-semibold mb-4'>{lesson.nomi}</h1>
      <p className='text-lg text-gray-700'>{lesson.desc}</p>
      <div className='mt-4'>
        <p>O'qituvchi: {lesson.teacher}</p>
        <p>Ko'rishlar soni: {lesson.views}</p>
      </div>
    </div>
  );
}

export default LessonTopic;
