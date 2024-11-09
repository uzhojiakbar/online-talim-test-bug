import React, { createContext, useContext, useState } from "react";
import { lessonData } from "../profile/lessons/lesson/lessonData";
// Kontekstni yaratish
const ResContext = createContext();

// Bu hook orqali kontekstni olish mumkin
export const useRes = () => useContext(ResContext);

// Provider orqali res va setResni boshqa komponentlarga taqdim etamiz
export const ResProvider = ({ children }) => {
    const [res, setRes] = useState(lessonData); // Bu yerda lessonData sizning boshlang'ich malumotlaringiz
    return (
        <ResContext.Provider value={{ res, setRes }}>
            {children}
        </ResContext.Provider>
    );
};
