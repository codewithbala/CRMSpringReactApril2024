import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {
  const [topic, setTopic] = useState("");
  const [otherTopic, setOtherTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [fake1, setFake1] = useState("");
  const [fake2, setFake2] = useState("");
  const [fake3, setFake3] = useState("");

  const quizTopics = [
    "Core Java",
    "React",
    "Angular",
    "Spring Boot",
    "Front End",
    "Other",
  ];

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const baseUrl = "http://localhost:8080/api/quiz/create-quizQuestion";

    let requestBody = {
      topic: topic,
      otherTopic: otherTopic,
      question: question,
      answer: answer,
      fake1: fake1,
      fake2: fake2,
      fake3: fake3,
    };

    console.log(requestBody);

    axios
      .post(baseUrl, requestBody)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h1 className="display-4 m-2">Create New Question</h1>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
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
            onChange={(e) => setQuestion(e.target.value)}
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
            onChange={(e) => setAnswer(e.target.value)}
          />
          <input
            type="text"
            className="form-control m-1"
            name="answers"
            placeholder="Enter wrong answer"
            onChange={(e) => setFake1(e.target.value)}
          />
          <input
            type="text"
            className="form-control m-1"
            name="answers"
            placeholder="Enter wrong answer"
            onChange={(e) => setFake2(e.target.value)}
          />
          <input
            type="text"
            className="form-control m-1"
            name="answers"
            placeholder="Enter wrong answer"
            onChange={(e) => setFake3(e.target.value)}
          />
        </div>

        <button className="btn btn-primary m-2">Create Question</button>
        <button className="btn btn-success m-2">Reset Form</button>
      </form>
    </div>
  );
};

export default CreateQuestion;
