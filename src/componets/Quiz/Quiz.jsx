import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsePostQuiz from "../../Hooks/UsePostQuiz";


function Quiz() {
  const { QuizData,data } = UsePostQuiz();
  console.log(data)

  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentTest = tests[currentQuestionIndex];

  // Foydalanuvchi javobini saqlash
  const handleAnswerSelect = (answerId) => {
    const updatedAnswers = userAnswers.filter(
      (answer) => answer.Savolid !== currentTest.id
    ); // Current savolga javobni yangilash
    updatedAnswers.push({ Savolid: currentTest.id, javobID: answerId });
    setUserAnswers(updatedAnswers);
  };

  // Keyingi savolga o'tish
  const handleNextQuestion = () => {
    if (currentQuestionIndex < tests.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsSubmitted(true); // Test tugadi
    }
  };

  // Test tugaganidan so'ng natijani hisoblash
  const calculateResult = () => {
    const result = userAnswers.map((userAnswer) => {
      const correctAnswer = tests.find(
        (test) => test.id === userAnswer.Savolid
      );
      return {
        id: userAnswer.Savolid,
        userJavobi: userAnswer.javobID,
        TogriJavob: correctAnswer.correctAnswerId,
        Respone: userAnswer.javobID === correctAnswer.correctAnswerId,
        correctAnswerText: correctAnswer.variant.find(
          (item) => item.id === correctAnswer.correctAnswerId
        ).name,
      };
    });

    const correctAnswers = result.filter((item) => item.Respone).length;
    const totalQuestions = result.length;
    const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(0);

    return {
      foiz: `${percentage}%`,
      oth: result,
    };
  };

  return (
    <div className="quiz-container bg-gray-100 p-6 md:w-[80%] max-md:mx-3 mx-auto mt-6 w-[100] rounded-lg  shadow-lg">
      {!isSubmitted ? (
        <>
          {/* Hozirgi test raqami va jami testlar soni */}
          <div className="question-info text-sm mb-4">
            <p>
              Savol {currentQuestionIndex + 1} / {tests.length}
            </p>
          </div>

          <div className="question mb-4">
            <h2 className="text-xl font-semibold mb-4">{currentTest.Title}</h2>
            <div className="options space-y-3">
              {currentTest.variant.map((option) => {
                const selectedAnswer = userAnswers.find(
                  (answer) => answer.Savolid === currentTest.id
                );
                const isSelected = selectedAnswer
                  ? selectedAnswer.javobID === option.id
                  : false;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
                    className={`option w-full p-3 border border-gray-300 rounded-lg ${isSelected
                      ? "bg-green-500 text-white" // Tanlangan variant uchun yashil rang
                      : "bg-white hover:bg-blue-100"
                      } focus:outline-none`}
                  >
                    {option.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="navigation mt-4">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-500 text-white p-2 rounded">
              {currentQuestionIndex < tests.length - 1 ? "Keyingi savol" : "Testni yakunlash"}
            </button>
          </div>
        </>
      ) : (
        <div className="results mt-6">
          <h2 className="text-xl font-semibold">Natijalar</h2>
          <p>{calculateResult().foiz} to'g'ri javoblar</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
