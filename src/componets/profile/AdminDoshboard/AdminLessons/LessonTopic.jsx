import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useFan from '../../../../Hooks/useFan';
import { useAddTopic } from '../../../../Hooks/useAddTopic';
import { delFan } from '../../../../Hooks/delFan';
import { ThreeCircles } from 'react-loader-spinner'
import AdminNav from '../AdminNav'
import TheMainLesson from './TheMainLesson';
import { Button, Modal } from 'antd';

function LessonTopic() {
  const { nomi } = useParams();
  const { fan, loading } = useFan()
  const { addTopics, fanMavzulari } = useAddTopic()
  const { deleteDars } = delFan()
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nav = useNavigate()

  useEffect(() => {
    addTopics(nomi)
    setTimeout(() => {
      nav(`/admin/${fanMavzulari[0].fan}/${fanMavzulari[0].nomi}`)
    }, 1000);
  }, [])

  useEffect(() => {
    if (fanMavzulari.length) {
      nav(`/admin/${fanMavzulari[0].fan}/${fanMavzulari[0].nomi}`)
    }
  }, [fanMavzulari])

  const closeModal = (e) => {
    if (e.target.className == "bg-black/10 backdrop-blur-sm top-0 left-0 w-full h-full absolute z-[1000]") setSidebarOpen(false)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-slate-100 bg flex relative h-[100vh] overflow-hidden '>
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
      {sidebarOpen && <div onClick={closeModal} className="max-md:block hidden bg-black/10 badrop-blur-sm top-0 left-0 w-full absolute z-[1000]"></div>}
      <h1 onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl text-black  z-[2000] md:hidden max-sm:top-4 fixed  max-md:top-4 left-4 cursor-pointer">{sidebarOpen ? "✖" : "☰"} </h1>
      <div className={`max-sm:mt-[60px] h-[90vh] mt-[60px] bg-white max-md:w-[70%] w-[25%] overflow-auto  fixed transition-transform duration-300 z-[1000] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-[80%] md:w-[24%] `}>
        <div className='p-4 '>
          {fanMavzulari?.map((i) => (
            <div onClick={() => setSidebarOpen(!sidebarOpen)} key={i.id}>
              <NavLink
                to={`/admin/${i.fan}/${i.nomi}`}
                className='border-b block p-1 px-3 rounded-sm hover:bg-indigo-500 hover:text-white'>
                <p className='w-full truncate'>{i.nomi}</p>
              </NavLink>
            </div>
          ))}
          <Button onClick={showModal}
            style={{
              display: "flex",
              marginTop: "10px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div className="fa-solid text-[16px] fa-trash text-[red]"></div>
            <div>Fanni o'chirish</div>
          </Button>

          <Modal title="Ogohlanitish" open={isModalOpen} onOk={() => deleteDars(nomi)} onCancel={handleCancel}>
            <p className='text-red-500'>Fanni rostanham o'chirmoqchimisiz bu holadda fanni barcha malumotlari o'chiriladi</p>
          </Modal>
        </div>
      </div>
      <TheMainLesson />
    </div>
  );
}

export default LessonTopic;