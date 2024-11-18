import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useFan from '../../../../Hooks/useFan';
import { useAddTopic } from '../../../../Hooks/useAddTopic';
import { instance } from '../../../../Hooks/api';
import { delFan } from '../../../../Hooks/delFan';
import { ThreeCircles } from 'react-loader-spinner'
import AdminNav from '../AdminNav'
import TheMainLesson from './TheMainLesson';
function LessonTopic() {
  const { nomi } = useParams();
  const { fan, loading } = useFan() //fan malumotlari olib kelinadi
  const { addTopics, fanMavzulari } = useAddTopic() //yangi mavzu qoshish
  const { deleteDars } = delFan() //fanlarni o'chirib tashlash uchn funksiya olib kelinadi
  useEffect(() => {
    addTopics(nomi)
  }, [])
  const res = fan.filter((i) => i.nomi === nomi)
  // topic/fannomi -> {id:, fannomi, mavzu:}
  // topic/fanomi/mavzu -> {id, topic, embed: , }
  // ==============================================
  const [data, setData] = useState({})
  const [load, setLoad] = useState(false)
  const mavZuMalumotlari = async (mavzuMalumoti) => {
    setLoad(true)
    try {
      const response = await instance.get(`/api/topic/${nomi}/${mavzuMalumoti}`)
      setData(response.data)
      setLoad(false)
    } catch (error) {
      console.error('xatolik', error)
    }
  }

  return (
    <div className='bg-slate-100 min-h-[100vh] flex relative  '>
      {loading && <div className='bg-slate-200 absolute z-50 w-full min-h-[100vh] top-0 left-0 flex justify-center items-center '><ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="blue"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /></div>}
      <AdminNav />

      <div className='bg-white min-h-[100vh] w-[22%] overflow-auto border fixed'>
        <div className='pt-24 p-4 '>
          {fanMavzulari?.map((i) => (
            <div key={i.id}>
              <NavLink onClick={() => mavZuMalumotlari(i.nomi)} className='border-b block p-1 px-3 rounded-sm hover:bg-indigo-500 hover:text-white'>{i.nomi}</NavLink>
            </div>
          ))}

        </div>
        <button onClick={() => deleteDars(nomi)} className="button absolute bottom-0 left-6">
          <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
        </button>
      </div>
      <TheMainLesson data={data} load={load} />
    </div>
  );
}

export default LessonTopic;
// to={`/admin/${nomi}/${i.nomi}`}