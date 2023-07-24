import React from 'react'



type Answer = {
    answer: string;
    isCorrect: boolean;
}
type Question = {
    title: string;
    answers: Array<Answer>;
}
const AskQuestion = ({question}:{question: Question}) => {
  return (
    <div className='p-4 bg-cyan-700 rounded-lg shadow-2xl  '>
     <div className='p-1 px-2 text-white font-semibold text-2xl'>
       {question.title}
     </div>
     <div>
        {question.answers.map(ans => (
            <div className='p-1 px-2 bg-gray-200 text-cyan-700 font-semibold text-lg rounded border-solid border-4 border-cyan-600 mt-2' key={ans.answer}>{ans.answer}</div>
        ))}
     </div>
    </div>
  )
}

export default AskQuestion
