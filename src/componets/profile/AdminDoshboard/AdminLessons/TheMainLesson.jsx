import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ADDTopic from './ADDTopic'
import { Button, Modal, Input } from 'antd';
import Dars from './Dars';
const { TextArea } = Input;
function TheMainLesson() {
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
        <div className={`bg-slate-100 w-[100%] pt-24 p-8 overflow-auto max-md:pl-8 pl-[27%] `}>
            <h1 className='text-3xl mb-4'>{nomi}</h1>
            <div className='mb-6 bg-white p-2 rounded-[8px] flex lg:w-[40%] w-[100%] sm:w-[60%] justify-around' >
                <div>
                    <button onClick={showModal} class="icon-btn add-btn  shadow-md">
                        <div className="add-icon"></div>
                        <div className="btn-txt">Yangi dars</div>
                    </button>
                </div>
                <div>

                    <button class="btn">
                        <p class="paragraph"> O'chirish </p>
                        <span className="icon-wrapper">
                            <span className='text-red-500'><i className="fa-solid fa-trash"></i></span>
                        </span>
                    </button>
                </div>
                <div>

                    <button class="btn">
                        <p class="paragraph"> yangilash </p>
                        <span className="icon-wrapper">
                            <span className='text-green-500'><i class="fa-solid fa-pen"></i></span>
                        </span>
                    </button>
                </div>
            </div>

            <Modal footer={[
                <Button onClick={() => AddNewMavzu(newLesson, nomi)} type="primary" className='mt-6 py-4' block>
                    Yuborish
                </Button>]} open={isModalOpen} onCancel={handleCancel}>
                <Input onChange={onchange} name='name' placeholder="Mavzu nomi" className='mt-8 py-2' />
                <Input onChange={onchange} name='embed' placeholder="Link" className='mt-8 py-2' />
                <TextArea onChange={onchange} name='desc' rows={4} maxLength={124} showCount className='mt-6' placeholder='Dars tasnifi' />
            </Modal>
            <Dars />
        </div>
    )
}

export default TheMainLesson
