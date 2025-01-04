import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const tests = [
  {
    id: 1,
    Title: "Web dasturlash asoslari nimalardan iborat?",
    variant: [
      { id: 1, name: "HTML, CSS, JAVASCRIPT" },
      { id: 2, name: "Python" },
      { id: 3, name: "PHP, Pascal, C++" },
      ],
    correctAnswerId: 1,
  },
 
  {
    id: 3,
    Title: "React nima?",
    variant: [
      { id: 1, name: "JavaScript kutubxonasi" },
      { id: 2, name: "Python kutubxonasi" },
      { id: 3, name: "CSS kutubxonasi" },
      { id: 4, name: "C++ kutubxonasi" },
    ],
    correctAnswerId: 1,
  },
  {
    id: 4,
    Title: "HTML ning maqsadi nima?",
    variant: [
      { id: 1, name: "Veb sahifalarni yaratish" },
      { id: 2, name: "Kompilyator yaratish" },
      { id: 3, name: "Kirish kodlari yaratish" },
      { id: 4, name: "Tizimni test qilish" },
    ],
    correctAnswerId: 1,
  },
  {
    id: 5,
    Title: "CSS nimaga xizmat qiladi?",
    variant: [
      { id: 1, name: "Veb sahifani formatlash" },
      { id: 2, name: "Veb sahifani test qilish" },
      { id: 3, name: "Veb sahifa uchun kod yozish" },
      { id: 4, name: "Veb sahifani optimallashtirish" },
    ],
    correctAnswerId: 1,
  },
  {
    id: 6,
    Title: "JSda 'var' va 'let' farqi nima?",
    variant: [
      { id: 1, name: "'var' global, 'let' esa lokal" },
      { id: 2, name: "'let' global, 'var' esa lokal" },
      { id: 3, name: "'var' va 'let' bir xil" },
      { id: 4, name: "'let' funksiyada ishlatiladi" },
    ],
    correctAnswerId: 1,
  },
  {
    id: 7,
    Title: "Veb dasturlashda 'API' nimani anglatadi?",
    variant: [
      { id: 1, name: "Application Programming Interface" },
      { id: 2, name: "Advanced Programming Interface" },
      { id: 3, name: "Application Protocol Integration" },
      { id: 4, name: "All Purpose Integration" },
    ],
    correctAnswerId: 1,
  },
  {
    id: 8,
    Title: "Git nima uchun ishlatiladi?",
    variant: [
      { id: 1, name: "Versiya boshqaruvi" },
      { id: 2, name: "Veb sahifa yaratish" },
      { id: 3, name: "Veb serverni sozlash" },
      { id: 4, name: "Kompilyator yaratish" },
    ],
    correctAnswerId: 1,
  },
  {
    id: 9,
    Title: "Node.js nima?",
    variant: [
      { id: 1, name: "JavaScript server tarafida ishlash" },
      { id: 2, name: "Python server tarafida ishlash" },
      { id: 3, name: "JavaScript kutubxonasi" },
      { id: 4, name: "Kompilyator" },
    ],
    correctAnswerId: 1,
  },
  {
    id: 10,
    Title: "UX/UI dizayn nima?",
    variant: [
      { id: 1, name: "Foydalanuvchi interfeysi va tajribasi dizayni" },
      { id: 2, name: "Veb dasturlash texnologiyalari" },
      { id: 3, name: "Web sahifa optimallashtirish" },
      { id: 4, name: "Foydalanuvchi uchun backend dizayni" },
    ],
    correctAnswerId: 1,
  },
];

function Quiz() {
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
