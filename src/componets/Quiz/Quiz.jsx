import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuizUser = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const { nomi, dasrnomi } = useParams()
  const quizzes = [
    {
      id: "1",
      Title: "Qaysi biri dasturlash tili?",
      variant: [
        { id: "1", name: "HTML" },
        { id: "2", name: "CSS" },
        { id: "3", name: "JavaScript" },
      ],
      correctAnswerId: "3",
    },
    {
      id: "2",
      Title: "React nima uchun ishlatiladi?",
      variant: [
        { id: "1", name: "Server yaratish" },
        { id: "2", name: "Frontend yaratish" },
        { id: "3", name: "Ma'lumotlar bazasini boshqarish" },
      ],
      correctAnswerId: "2",
    },
  ];

  const handleAnswerChange = (selectedVariantId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [quizzes[currentQuizIndex].id]: selectedVariantId,
    }));
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex((prevIndex) => prevIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quizzes.forEach((quiz) => {
      if (userAnswers[quiz.id] === quiz.correctAnswerId) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setIsSubmitted(true);
    setAttemptsLeft((prev) => prev - 1);
  };

  const handleRetry = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setCurrentQuizIndex(0);
  };

  const correctPercentage = Math.floor((score / quizzes.length) * 100);

  const chartData = {
    labels: ["To'g'ri", "Noto'g'ri"],
    datasets: [
      {
        data: [score, quizzes.length - score],
        backgroundColor: ["#4CAF50", "#FF5252"],
        hoverBackgroundColor: ["#45A049", "#FF1744"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4"> Fan: {nomi}</h1>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dars: {dasrnomi}</h1>

      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Natija: {score} / {quizzes.length} ({correctPercentage}%)
          </h2>
          <div className="w-1/2 mx-auto mb-6">
            <Pie data={chartData} />
          </div>
          {attemptsLeft > 0 ? (
            <button
              onClick={handleRetry}
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
            >
              Qayta urinib ko'ring (Qolgan imkoniyatlar: {attemptsLeft})
            </button>
          ) : (
            <h3 className="text-lg font-semibold text-red-500">
              Testni yechish imkoniyati tugadi.
            </h3>
          )}
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <div className="bg-gray-100 border p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Savol {currentQuizIndex + 1} / {quizzes.length}
            </h3>
            <h4 className="text-lg font-semibold text-gray-700">
              {quizzes[currentQuizIndex].Title}
            </h4>
            <ul className="list-disc pl-5 text-gray-700">
              {quizzes[currentQuizIndex].variant.map((v) => (
                <li key={v.id}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`quiz-${quizzes[currentQuizIndex].id}`}
                      value={v.id}
                      checked={
                        userAnswers[quizzes[currentQuizIndex].id] === v.id.toString()
                      }
                      onChange={() =>
                        handleAnswerChange(v.id.toString())
                      }
                      className="mr-2"
                    />
                    {v.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleNextQuiz}
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition mt-6"
          >
            Keyingisiga o'tish
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizUser;
