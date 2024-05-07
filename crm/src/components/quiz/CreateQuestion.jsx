import { useState } from "react";

const CreateQuestion = () => {
  const [topic, setTopic] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");

  const quizTopics = [
    "Core Java",
    "React",
    "Angular",
    "Spring Boot",
    "Front End",
  ];

  return (
    <div className="container">
      <h1 className="display-4 m-2">Create New Question</h1>
      <form action="#">
        <div className="form-control m-2">
          <label htmlFor="" className="m-1">
            Please Select Topic
          </label>
          <select
            className="form-select form-control"
            onChange={(e) => setTopic(e.target.value)}
          >
            <option>---</option>
            {quizTopics.map((item, key) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control m-2">
          <label htmlFor="" className="m-1">
            Enter Quiz Question
          </label>
          <input
            type="text"
            className="form-control"
            name="questionTitle"
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </div>
        <div className="answers"></div>
        <div className="form-control m-2">
          <label htmlFor="" className="m-1">
            Add Answers
          </label>

          <input
            type="text"
            className="form-control m-1"
            name="answers"
            placeholder="Enter correct answer"
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
          <input
            type="text"
            className="form-control m-1"
            name="answers"
            placeholder="Enter wrong answer"
            onChange={(e) => setAnswerOne(e.target.value)}
          />
          <input
            type="text"
            className="form-control m-1"
            name="answers"
            placeholder="Enter wrong answer"
            onChange={(e) => setAnswerTwo(e.target.value)}
          />
          <input
            type="text"
            className="form-control m-1"
            name="answers"
            placeholder="Enter wrong answer"
            onChange={(e) => setAnswerThree(e.target.value)}
          />
        </div>

        <button className="btn btn-primary m-2">Create Question</button>
        <button className="btn btn-success m-2">Reset Form</button>
      </form>
    </div>
  );
};

export default CreateQuestion;
