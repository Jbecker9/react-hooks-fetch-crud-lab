import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({ renderQuestions, questions }) {

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
      .then((r)=>r.json())
      .then((questionData) => renderQuestions(questionData))
  }, [])

  function addDelState(prop){
    const newDelArr = questions.filter((question) => question.id !== prop.id)
    renderQuestions(newDelArr)
  }

  function addNewAnswer(prop){
    const answerArray = questions.filter((question)=> question.id !== prop.id)
    const newAnswerArray = [...answerArray, prop]
    renderQuestions(newAnswerArray)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
        <ul>{questions.map((question)=>
        <QuestionItem addNewAnswer={(prop)=>addNewAnswer(prop)}addDelState={(prop)=>addDelState(prop)}key={question.id} question={question}/>
        )}
        </ul>
    </section>
  );
}

export default QuestionList;
