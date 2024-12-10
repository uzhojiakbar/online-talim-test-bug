import React, { useEffect, useState } from "react";
import { instance } from "../../../../Hooks/api";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
const Dars = () => {
    const { nomi, darsnomi } = useParams();
    const [data, setData] = useState({});
    const [load, setLoad] = useState(false);
    const mavZuMalumotlari = async () => {
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
    useEffect(() => {
        mavZuMalumotlari();
    }, [darsnomi]);

    return (
        <div>
            {load && (
                <div className="bg-slate-200 absolute z-50 w-full min-h-[100vh] top-0 left-0 flex justify-center items-center ">
                    <ThreeCircles
                        visible={true}
                        height="100"
                        width="100"
                        color="blue"
                        ariaLabel="three-circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}
            {!load && (
                <div className="bg-white p-4 rounded-lg space-y-2">
                    <h1 className="text-xl">{data.name}</h1>
                    <h1>{data.desc}</h1>
                    <div className=""
                        id="embedContainer"
                        dangerouslySetInnerHTML={{ __html: data.embed }}
                    />
                </div>
            )}
        </div>
    );
};

export default Dars;
