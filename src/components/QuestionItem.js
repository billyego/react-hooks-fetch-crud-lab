import React from "react";

function QuestionItem({ question,onAnswerChange,onDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteCLick(){
    onDeleteClick(id)
  }
  function handleAnswerChange(event){
    onAnswerChange(id, parseInt(event.target.value))
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteCLick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;