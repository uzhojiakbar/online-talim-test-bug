import React, { useEffect, useState } from "react";
import ProfileNavbar from "../../Navbar/ProfileNavbar";
import { NavLink, useParams } from "react-router-dom";
import { useAddTopic } from "../../../../Hooks/useAddTopic";
import { instance } from "../../../../Hooks/api";
import { ThreeCircles } from "react-loader-spinner";

function DarsUser() {
  const { nomi } = useParams();
  const { fanMavzulari, addTopics } = useAddTopic();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar uchun holat

  useEffect(() => {
    addTopics(nomi);
  }, []);

  const mavZuMalumotlari = async (darsnomi) => {
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

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white">
      <ProfileNavbar />
      <h1  onClick={() => setSidebarOpen(!sidebarOpen)}
      className="text-2xl text-white absolute z-[1000] md:hidden top-5 left-4 cursor-pointer">{sidebarOpen ? "✖" : "☰"} </h1>
      <aside
        className={`fixed top-[73px] left-0 h-screen bg-gradient-to-b from-slate-700 to-gray-800 shadow-lg border-r border-gray-600 p-4  overflow-y-auto z-50 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 w-[80%] md:w-[24%]`}>
        <h2 className="text-xl font-bold mb-6 text-gray-200">
          Mavzular ro'yxati
        </h2>
        <div className="space-y-4">
          {fanMavzulari?.map((item) => (
            <NavLink
              onClick={() => mavZuMalumotlari(item.nomi)}
              key={item.id}
              to="#"
              className="block bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-3 rounded-lg transition duration-300 shadow-sm">
              {item.nomi}
            </NavLink>
          ))}
        </div>
      </aside>
    


      {/* Asosiy kontent */}
      <main className="ml-0 md:ml-[24%] w-full md:w-[76%] relative h-screen">
        {load && (
          <div className="bg-slate-200 z-50 w-full min-h-[100vh] top-0 left-0 flex justify-center items-center">
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
        <div className="overflow-y-auto bg-slate-800 h-full p-6 pt-20">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h1 className=" text-2xl lg:text-4xl font-extrabold mb-4 text-white">{nomi}</h1>
            <p className="text-gray-300 text-xl">{data.name}</p>
            <div className="mt-3 text-gray-400 leading-relaxed">{data.desc}</div>
            <div
              className="mt-6  p-1"
              id="embedContainer"
              dangerouslySetInnerHTML={{ __html: data.embed }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DarsUser;
