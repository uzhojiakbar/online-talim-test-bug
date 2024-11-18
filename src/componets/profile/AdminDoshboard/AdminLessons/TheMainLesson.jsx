import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'
import ADDTopic from './ADDTopic'
import { FaCirclePlus } from "react-icons/fa6";
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;
function TheMainLesson({ data, load }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { AddNewMavzu } = ADDTopic()
    const [newLesson, setNwelesson] = useState({ name: "", desc: "", embed: "" })

    const onchange = (e) => {
        setNwelesson({ ...newLesson, [e.target.name]: e.target.value })
    }

    const { nomi } = useParams()
    return (
        <div className='bg-slate-100 w-[100%] pt-24 p-8 overflow-auto pl-[25%]'>
            <h1 className='text-3xl mb-4'>{nomi}</h1>
            <button onClick={showModal} class="icon-btn add-btn mb-6">
                <div class="add-icon"></div>
                <div class="btn-txt">Yangi dars</div>
            </button>

            {load && <div className='bg-slate-200 absolute z-50 w-full min-h-[100vh] top-0 left-0 flex justify-center items-center '><ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="blue"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /></div>}
            <Modal footer={[
                <Button onClick={() => AddNewMavzu(newLesson, nomi)} type="primary" className='mt-6 py-4' block>
                    Yuborish
                </Button>]} open={isModalOpen} onCancel={handleCancel}>
                <Input onChange={onchange} name='name' placeholder="Mavzu nomi" className='mt-8 py-2' />
                <Input onChange={onchange} name='embed' placeholder="Link" className='mt-8 py-2' />
                <TextArea onChange={onchange} name='desc' rows={4} maxLength={124} showCount className='mt-6' placeholder='Dars tasnifi' />
            </Modal>
            <div className='bg-white p-4 rounded-lg space-y-2'>
                <h1 className='text-xl '>{data.name}</h1>
                <h1>{data.desc}</h1>
                <div id="embedContainer" dangerouslySetInnerHTML={{ __html: data.embed }} />
                <div>
                </div>
            </div>
        </div>
    )
}

export default TheMainLesson
