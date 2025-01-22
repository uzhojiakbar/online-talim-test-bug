import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import { instance } from '../../../../Hooks/api'
import { useParams } from "react-router-dom";
const QuizAdmin = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({
        title: "",
        options: [
            { id: 1, name: "" },
            { id: 2, name: "" },
            { id: 3, name: "" },
            { id: 4, name: "" },
        ],
        correctOptionId: "",
    });
    const [error, setError] = useState("");
    const [editingQuizId, setEditingQuizId] = useState(null);

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

    const handleSelectChange = (optionId) => {
        setNewQuiz((prev) => ({
            ...prev,
            correctOptionId: optionId,
        }));
    };

    const validateQuiz = () => {
        const { title, options, correctOptionId } = newQuiz;
        if (!title.trim()) return "Savol matnini kiriting.";
        if (options.some((opt) => !opt.name.trim())) return "Barcha variantlarni kiriting.";
        if (!correctOptionId) return "To'g'ri javobni tanlang.";
        return "";
    };

    // Test qo'shish
    const { nomi, dasrnomi } = useParams()
    const addTest = async (newQuiz) => {
        try {
            const respone = await instance.post(`/api/test/${nomi}/${dasrnomi}`, newQuiz)
            console.log(respone)
        } catch (err) {
            console.log('xatolik test qoshishda', err)
        }
    }

    useEffect(() => {
        const getTest = async () => {
            try {
                const respone = instance.get(`/api/test/${nomi}/${dasrnomi}`)
                console.log(respone.data, 'salom')
            } catch (err) {
                console.log('malumot olishda xatolik bor', err)
            }
        }
        getTest()
    }, [])

    const saveQuiz = () => {
        const validationError = validateQuiz();
        if (validationError) {
            setError(validationError);
            return;
        }
        setError("");

        if (editingQuizId) {
            setQuizzes((prev) =>
                prev.map((quiz) =>
                    quiz.id === editingQuizId ? { ...quiz, ...newQuiz } : quiz
                )
            );
            setEditingQuizId(null);
        } else {
            setQuizzes((prev) => [...prev, { ...newQuiz, id: Date.now().toString() }]);
        }



        addTest(newQuiz)


        resetForm();
    };

    const editQuiz = (quizId) => {
        const quiz = quizzes.find((quiz) => quiz.id === quizId);
        if (quiz) {
            setNewQuiz(quiz);
            setEditingQuizId(quizId);
        }
    };

    const deleteQuiz = (quizId) => {
        setQuizzes((prev) => prev.filter((quiz) => quiz.id !== quizId));
    };

    const deleteAllQuizzes = () => {
        setQuizzes([]);
    };

    const resetForm = () => {
        setNewQuiz({
            title: "",
            options: [
                { id: 1, name: "" },
                { id: 2, name: "" },
                { id: 3, name: "" },
                { id: 4, name: "" },
            ],
            correctOptionId: "",
        });
        setError("");
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
                            value={newQuiz.correctOptionId}
                            onChange={(e) => handleSelectChange(e.target.value)}
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
                        onClick={saveQuiz}
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition w-full sm:w-auto"
                    >
                        {editingQuizId ? "Yangilash" : "Qo'shish"}
                    </button>
                </div>

                <div className="w-full max-w-4xl mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testlar ro'yxati</h2>
                    {quizzes.length === 0 ? (
                        <p className="text-gray-600">Hozircha testlar mavjud emas</p>
                    ) : (
                        quizzes.map((quiz) => (
                            <div key={quiz.id} className="bg-gray-100 border p-4 rounded-lg shadow mb-4">
                                <h3 className="text-lg font-bold text-gray-800">{quiz.title}</h3>
                                <ul className="list-disc pl-5 text-gray-700">
                                    {quiz.options.map((option) => (
                                        <li key={option.id}>{option.name}</li>
                                    ))}
                                </ul>
                                <p className="mt-2 text-gray-700">
                                    <strong>To'g'ri javob:</strong> {quiz.options.find((o) => o.id.toString() === quiz.correctOptionId)?.name || "Aniqlanmagan"}
                                </p>
                                <button
                                    onClick={() => editQuiz(quiz.id)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-4"
                                >
                                    Yangilash
                                </button>
                                <button
                                    onClick={() => deleteQuiz(quiz.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4 ml-2"
                                >
                                    O'chirish
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <button
                    onClick={deleteAllQuizzes}
                    className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 mt-6"
                >
                    Hammasini o'chirish
                </button>
            </div>
        </>
    );
};

export default QuizAdmin;
