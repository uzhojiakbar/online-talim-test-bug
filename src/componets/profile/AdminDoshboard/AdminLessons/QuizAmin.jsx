import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import { instance } from "../../../../Hooks/api";
import { useParams } from "react-router-dom";
import UseGetTest from "../../../../Hooks/useGetTests";
import useDeletequiz from "../../../../Hooks/useDeletequiz";

const QuizAdmin = () => {
    const { getTest, getQuizzes, setQuizzes } = UseGetTest();
    const { nomi, dasrnomi } = useParams();
    const { deleteQuiz } = useDeletequiz();

    const [newQuiz, setNewQuiz] = useState({
        title: "",
        options: [
            { id: 1, name: "" },
            { id: 2, name: "" },
            { id: 3, name: "" },
            { id: 4, name: "" },
        ],
        correctOption: "",
    });
    const [editingQuizId, setEditingQuizId] = useState(null); // Hozirda yangilanayotgan testni saqlash
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewQuiz((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOptionChange = (index, value) => {
        setNewQuiz((prev) => {
            const updatedOptions = [...prev.options];
            updatedOptions[index].name = value;
            return { ...prev, options: updatedOptions };
        });
    };

    const handleSelectChange = (e) => {
        setNewQuiz((prev) => ({
            ...prev,
            correctOption: e.target.value,
        }));
    };

    const addOrUpdateTest = async () => {
        if (!newQuiz.title || !newQuiz.correctOption || newQuiz.options.some((opt) => !opt.name)) {
            setError("Iltimos, barcha maydonlarni to'ldiring.");
            return;
        }
        setError("");

        try {
            if (editingQuizId) {
                // Yangilash
                const response = await instance.put(`/api/test/${nomi}/${dasrnomi}/${editingQuizId}`, newQuiz);
                window.location.reload();
            } else {
                // Yangi test qo'shish
                const response = await instance.post(`/api/test/${nomi}/${dasrnomi}`, newQuiz);
                console.log("Test qo'shildi", response);
                window.location.reload();
                setQuizzes([...getQuizzes, newQuiz]);
            }

            setNewQuiz({
                title: "",
                options: [
                    { id: 1, name: "" },
                    { id: 2, name: "" },
                    { id: 3, name: "" },
                    { id: 4, name: "" },
                ],
                correctOption: "",
            });
            setEditingQuizId(null); 
        } catch (err) {
            console.error("Xatolik test qo'shishda yoki yangilashda", err);
            setError("Test qo'shishda yoki yangilashda xatolik yuz berdi");
        }
    };

    const startEditingTest = (quiz) => {
        setEditingQuizId(quiz.id);
        setNewQuiz({
            title: quiz.title,
            options: quiz.variant.map((v, index) => ({ id: index + 1, name: v.name })),
            correctOption: quiz.correctOption,
        });
        window.scrollTo(0, 0); //
    };

    useEffect(() => {
        getTest(nomi, dasrnomi);
    }, [nomi, dasrnomi]);

    const deleteAllTests = async () => {
        try {
            const response = await instance.delete(`/api/test/${nomi}/${dasrnomi}`);
            window.location.reload();
        } catch (err) {
            console.error("Xatolik:", err);
        }
    };

    return (
        <>
            <AdminNav />
            <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 pt-24">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Testlar boshqaruvi</h1>

                <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        {editingQuizId ? "Testni yangilash" : "Yangi test qo'shish"}
                    </h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    <input
                        type="text"
                        name="title"
                        placeholder="Savol matni"
                        value={newQuiz.title}
                        onChange={handleChange}
                        className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {newQuiz.options.map((option, index) => (
                        <div key={option.id} className="mb-4">
                            <input
                                type="text"
                                placeholder={`Variant ${index + 1}`}
                                value={option.name}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    ))}

                    <div className="mb-4">
                        <p className="font-semibold text-gray-700">To'g'ri javobni tanlang:</p>
                        <select
                            value={newQuiz.correctOption}
                            onChange={handleSelectChange}
                            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Tanlang</option>
                            {newQuiz.options.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={addOrUpdateTest}
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition w-full sm:w-auto"
                    >
                        {editingQuizId ? "Yangilash" : "Qo'shish"}
                    </button>
                </div>

                <div className="w-full max-w-4xl mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testlar ro'yxati</h2>
                    {getQuizzes?.length === 0 ? (
                        <p className="text-gray-600">Hozircha testlar mavjud emas</p>
                    ) : (
                        getQuizzes?.map((quiz) => (
                            <div key={quiz.id} className="bg-gray-100 border p-4 rounded-lg shadow mb-4">
                                <h3 className="text-lg font-bold text-gray-800">{quiz.title}</h3>
                                <ul className="list-disc pl-5 text-gray-700">
                                    {quiz?.variant?.map((option) => (
                                        <li key={option.id}>{option.name}</li>
                                    ))}
                                </ul>
                                <p className="mt-2 text-gray-700">
                                    <strong>To'g'ri javob:</strong>{" "}
                                    {quiz.variant.find((o) => o.id.toString() === quiz.correctOption)?.name || "Aniqlanmagan"}
                                </p>
                                <button
                                    onClick={() => startEditingTest(quiz)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-4"
                                >
                                    Yangilash
                                </button>
                                <button
                                    onClick={() => deleteQuiz(nomi, dasrnomi, quiz?.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4 ml-2"
                                >
                                    O'chirish
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div>
                    {getQuizzes.length && <button onClick={deleteAllTests} className={`bg-red-500 px-6 py-1 text-white`}>
                        {`Barcha testlani ochirish`}
                    </button>}
                </div>
            </div>
        </>
    );
};

export default QuizAdmin;
