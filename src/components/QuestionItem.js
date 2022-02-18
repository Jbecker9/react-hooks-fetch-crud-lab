import React from "react";

function QuestionItem({ question, addDelState }) {
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

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
