import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DisplayQuestions = () => {
  const [questionList, setQuestionList] = useState([]);
  const baseUrl = "http://localhost:8080/api/quiz/";
  const navigate = useNavigate();

  const getAllQuestions = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data);
        setQuestionList(response.data);
      })
      .catch((error) => console.log(error));
  };

  const editQuestion = (qId) => {
    navigate(baseUrl + `update-quizQuestion/${qId}`);
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  console.log(questionList);

  return (
    <div className="container">
      <h1 className="display-4 m-2">Question List</h1>

      <table className="table text-center table-striped">
        <thead>
          <th scope="col">Quiz ID</th>
          <th scope="col">Topic</th>

          <th scope="col">Question</th>
          <th scope="col">Correct Answer</th>
          <th scope="col">Fake 1</th>
          <th scope="col">Fake 2</th>
          <th scope="col">Fake 3</th>
          <th scope="col">Other Topic</th>
          <th scope="col">Actions</th>
        </thead>

        <tbody className="table-hover text-center">
          {questionList.map((question, key) => {
            return (
              <>
                <tr key={key} className="table-hover"></tr>
                <th scope="row">{question.quizId}</th>
                <td>{question.topic}</td>
                <td>{question.question}</td>
                <td>{question.answer}</td>
                <td>{question.fake1}</td>
                <td>{question.fake2}</td>
                <td>{question.fake3}</td>
                <td>{question.otherTopic}</td>
                <td>
                  <button
                    className="btn btn-success m-2"
                    onClick={() => editQuestion(question.quizId)}
                  >
                    Edit{" "}
                  </button>
                  <button className="btn-primary m-2">Delete</button>
                </td>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayQuestions;
