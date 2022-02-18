import React from "react";

function QuestionItem({ question, addDelState, addNewAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteQuestion(){
    addDelState(question)
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "Delete"
    })
  }

  function changeAnswer(event){
    // console.log(event.target.value)
    // console.log(question)
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": parseInt(event.target.value)})
    })
      .then((r)=>r.json())
      .then((changedAnswer) => addNewAnswer(changedAnswer))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={changeAnswer}defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
