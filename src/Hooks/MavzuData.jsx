import React, { useState } from 'react'
import { instance } from './api';
function MavzuData() {
    const [topicData, setData] = useState({});
    const [load, setLoad] = useState(false);
    const mavZuMalumotlari = async (nomi, darsnomi) => {
        setLoad(true);
        try {
            const response = await instance.get(`/api/topic/${nomi}/${darsnomi}`);
            setData(response.data);
        } catch (error) {
            console.error("Xatolik:", error);
        } finally {
            setLoad(false);
        }
    };
    return ({ mavZuMalumotlari, topicData, load })
}

export default MavzuData