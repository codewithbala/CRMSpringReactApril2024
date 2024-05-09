import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DisplayQuestions = () => {
  const [questionList, setQuestionList] = useState([]);
  const [filterTopic, setFilterTopic] = useState("");
  const baseUrl = "http://localhost:8080/api/quiz/";
  const navigate = useNavigate();

  const getAllQuestions = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setQuestionList(response.data);
      })
      .catch((error) => console.log(error));
  };

  // remove duplicates from topics array
  const removeDuplicates = (item) => {
    return [...new Set(item)];
  };

  // gets list of topic names
  const topicsList = questionList.map((question) => {
    return question.topic;
  });

  // topics dropwdown values
  const dropdownChoices = removeDuplicates(topicsList);

  const editQuestion = (qId) => {
    navigate(baseUrl + `update-quizQuestion/${qId}`);
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  console.log(filterTopic);

  return (
    <div className="container">
      <h1 className="display-4 m-2">Question List</h1>

      <div className="m-2">
        <p>Filter By Topic</p>
        <select
          className="form-select form-control-sm"
          onChange={(e) => setFilterTopic(e.target.value)}
        >
          <option value="All">---</option>
          {dropdownChoices.map((item, key) => {
            return (
              <option value={item} key={key}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <table className="table text-center table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Quiz ID</th>
            <th scope="col">Topic</th>

            <th scope="col">Question</th>
            <th scope="col">Correct Answer</th>
            <th scope="col">Fake 1</th>
            <th scope="col">Fake 2</th>
            <th scope="col">Fake 3</th>

            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody className="table-hover text-center">
          {questionList.map((question, key) => {
            return (
              <>
                <tr key={key} className="table-hover">
                  <th scope="row" key={key}>
                    {question.quizId}
                  </th>
                  <td>{question.topic}</td>
                  <td>{question.question}</td>
                  <td>{question.answer}</td>
                  <td>{question.fake1}</td>
                  <td>{question.fake2}</td>
                  <td>{question.fake3}</td>

                  <td>
                    <button
                      className="btn btn-success m-2"
                      onClick={() => editQuestion(question.quizId)}
                    >
                      Edit{" "}
                    </button>
                    <button className="btn-primary m-2">Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayQuestions;
