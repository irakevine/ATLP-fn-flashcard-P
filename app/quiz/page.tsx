import React from 'react'
import QuestionsLayout from '../layouts/QuestionsLayout'
import AskQuestion from '../components/AskQuestion'
function Quiz() {
  return (
    <QuestionsLayout>
       
      <AskQuestion  question={
  {
    title: "Example ask ?",
    answers: [
        {answer: "Example Answer 1", isCorrect: false },
        {answer: "Example Answer 2", isCorrect: false },
        {answer: "Example Answer 3", isCorrect: true },
        {answer: "Example Answer 4", isCorrect: false }
    ]
}
}

/>

    </QuestionsLayout>

  )
}

export default Quiz
