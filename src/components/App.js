import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function renderQuestions(prop){
    setQuestions(prop)
  }

  function updateQuestions(prop){
    const newQuestionList = [...questions, prop]
    setQuestions(newQuestionList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateQuestions={(props) => updateQuestions(props)}/> : <QuestionList questions={questions} renderQuestions={(props) => renderQuestions(props)}/>}
    </main>
  );
}

export default App;
