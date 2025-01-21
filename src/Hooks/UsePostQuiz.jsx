import { useState } from "react"

function UsePostQuiz() {
    const [data, setData] = useState([])
    const QuizData = async (value) => {
        localStorage.setItem("testData", JSON.stringify(value))
        const qiymat = await value
        console.log(qiymat)
    }
    return ({ QuizData, data })
}

export default UsePostQuiz