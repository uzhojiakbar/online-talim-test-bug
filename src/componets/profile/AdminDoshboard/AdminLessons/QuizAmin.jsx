import React, { useState } from "react";

const QuizAdmin = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({
        Title: "",
        variant: [
            { id: 1, name: "" },
            { id: 2, name: "" },
            { id: 3, name: "" },
        ],
        correctAnswerId: "", // To'g'ri javob ID
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

    const handleVariantChange = (index, value) => {
        setNewQuiz((prev) => {
            const updatedVariants = [...prev.variant];
            updatedVariants[index].name = value;
            return { ...prev, variant: updatedVariants };
        });
    };

    const handleRadioChange = (quizId, variantId) => {
        setQuizzes((prevQuizzes) =>
            prevQuizzes.map((quiz) =>
                quiz.id === quizId
                    ? {
                        ...quiz,
                        correctAnswerId: variantId,
                    }
                    : quiz
            )
        );
    };

    const addQuiz = () => {
        const { Title, variant, correctAnswerId } = newQuiz;

        if (!Title.trim()) {
            setError("Test savoli kiritilmadi");
            return;
        }
        if (variant.some((v) => !v.name.trim())) {
            setError("Variant kiriting");
            return;
        }

        const newQuizObj = {
            ...newQuiz,
            id: Date.now().toString(),
            correctAnswerId: correctAnswerId || "",
        };

        setQuizzes((prev) => [...prev, newQuizObj]);

        setNewQuiz({
            Title: "",
            variant: [
                { id: 1, name: "" },
                { id: 2, name: "" },
                { id: 3, name: "" },
            ],
            correctAnswerId: "",
        });

        setError("");
    };

    const updateQuiz = () => {
        const { Title, variant } = newQuiz;

        if (!Title.trim()) {
            setError("Test savoli kiritilmadi");
            return;
        }
        if (variant.some((v) => !v.name.trim())) {
            setError("Variant kiriting");
            return;
        }

        setQuizzes((prev) =>
            prev.map((quiz) =>
                quiz.id === editingQuizId
                    ? { ...quiz, Title, variant, correctAnswerId: quiz.correctAnswerId }
                    : quiz
            )
        );
        setEditingQuizId(null);
        setNewQuiz({
            Title: "",
            variant: [
                { id: 1, name: "" },
                { id: 2, name: "" },
                { id: 3, name: "" },
            ],
            correctAnswerId: "",
        });
    };

    const editQuiz = (quizId) => {
        const quizToEdit = quizzes.find((quiz) => quiz.id === quizId);
        if (quizToEdit) {
            setNewQuiz({
                Title: quizToEdit.Title,
                variant: [...quizToEdit.variant],
                correctAnswerId: quizToEdit.correctAnswerId,
            });
            setEditingQuizId(quizId);
        }
    };

    const deleteQuiz = (quizId) => {
        setQuizzes((prev) => prev.filter((quiz) => quiz.id !== quizId));
    };

    const deleteAllQuizzes = () => {
        setQuizzes([]);
    };

    const updateFunction = () => {
        window.scrollTo(0, 0)
    }

    console.log(quizzes)
    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Testlar</h1>

            <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    {editingQuizId ? "Testni yangilash" : "Yangi test qo'shish"}
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text"
                    name="Title"
                    placeholder="Test savoli"
                    value={newQuiz.Title}
                    onChange={handleChange}
                    className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {newQuiz.variant.map((v, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder={`Variant ${index + 1}`}
                            value={v.name}
                            onChange={(e) => handleVariantChange(index, e.target.value)}
                            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">To'g'ri javobni tanlang:</label>
                    {newQuiz.variant.map((v, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="radio"
                                name="correctAnswerId"
                                value={v.id}
                                checked={newQuiz.correctAnswerId === v.id.toString()}
                                onChange={(e) => setNewQuiz((prev) => ({
                                    ...prev,
                                    correctAnswerId: e.target.value,
                                }))}
                                className="mr-2"
                            />
                            <span>{`Variant ${index + 1}`}</span>
                        </div>
                    ))}
                </div>
                <button
                    onClick={editingQuizId ? updateQuiz : addQuiz}
                    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition w-full sm:w-auto"
                >
                    {editingQuizId ? "Saqlash" : "Qo'shish"}
                </button>
            </div>

            <div className="w-full max-w-4xl mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testlar ro'yxati</h2>
                {quizzes.length === 0 ? (
                    <p className="text-gray-600">Hozircha testlar mavjud emas</p>
                ) : (
                    quizzes.map((quiz) => (
                        <div key={quiz.id} className="bg-gray-100 border p-4 rounded-lg shadow mb-4">
                            <h3 className="text-lg font-bold text-gray-800">{quiz.Title}</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                {quiz.variant.map((v) => (
                                    <li key={v.id}>
                                        <label>
                                            <input
                                                type="radio"
                                                checked={quiz.correctAnswerId === v.id.toString()}
                                                onChange={() => handleRadioChange(quiz.id, v.id.toString())}
                                                className="mr-2"
                                            />
                                            {v.id}. {v.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-2 text-gray-700">
                                <strong>To'g'ri javob:</strong> {quiz.correctAnswerId || "Yoki belgilamagan"}
                            </p>
                            <button
                                onClick={() => { editQuiz(quiz.id); updateFunction() }}
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
                className="bg-red-500 text-white px-6 py-3 rounded hover:bg-gray-600 mt-6">
                Hammasini o'chirish
            </button>
        </div>
    );
};

export default QuizAdmin;
