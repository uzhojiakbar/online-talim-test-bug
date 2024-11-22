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
  const { fan, loading } = useFan()
  const { addTopics, fanMavzulari } = useAddTopic()
  const { deleteDars } = delFan()
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    addTopics(nomi)
  }, [])
  const closeModal = (e) => {
    if (e.target.className == "bg-black/10 backdrop-blur-sm   top-0 left-0 w-full h-full absolute z-[1000]") setSidebarOpen(false)
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
      {sidebarOpen && <div onClick={closeModal} className="bg-black/10 backdrop-blur-sm   top-0 left-0 w-full h-full absolute z-[1000]"></div>}
      <h1 onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-2xl text-black absolute z-[2000] md:hidden max-sm:top-4 max-md:top-6 left-4 cursor-pointer">{sidebarOpen ? "✖" : "☰"} </h1>
    
       <div className={`max-sm:mt-[60px] h-[100vh] mt-[80px] bg-white max-md:w-[70%] w-[25%] overflow-auto left-0 fixed transition-transform duration-300 z-[1000] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-[80%] md:w-[24%] `}>
        <div className='p-4 border'>
          {fanMavzulari?.map((i) => (
            <div onClick={() => setSidebarOpen(!sidebarOpen)} key={i.id}>
              <NavLink
                to={`/admin/${i.fan}/${i.nomi}`}
                className='border-b block p-1 px-3 rounded-sm hover:bg-indigo-500 hover:text-white'>
                  <p>{i.nomi}</p>
              </NavLink>
            </div>
          ))}
        <button onClick={() => deleteDars(nomi)} className="button absolute bottom-0 top-16">
          <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
        </button>
        </div>
      </div>

      <TheMainLesson />
    </div>
  );
}

export default LessonTopic;