import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CandidateInterview = ({ name, remarks, department }) => {
  let navigate = useNavigate();
  // State variables
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewFeedback, setInterviewFeedback] = useState("");
  const [candidatetureStatus, setCandidatetureStatus] = useState("");
  const [loiSent, setLoiSent] = useState(false);
  const [loiAccepted, setLoiAccepted] = useState(false);
  const [joinedBatch, setJoinedBatch] = useState(false);
  const [candidateBatchStartDate, setCandidateBatchStartDate] = useState("");

  const handleSubmit = (e) => {
    const baseUrl = "http://localhost:8080/api/v1/candidateInterviews/";

    // prettier-ignore
    let requestBody = {
        "interviewDate": interviewDate,
        "trainerName": name,
        "interviewFeedback": interviewFeedback,
        "candidatetureStatus": candidatetureStatus,
        "bdRemarksFeedback": remarks,
        "loiSent": loiSent === "true",
        "loiAccepted": loiAccepted === "true",
        "joinedBatch": joinedBatch === "true",
        "candidateBatchStartDate": candidateBatchStartDate
    };

    axios.post(`${baseUrl}`, requestBody).then(() => {
      navigate(`/training-employee-page`).catch((error) => console.log(error));
    });
  };

  return (
    <div className="container">
      <h1 className="display-4 m-2">Candidate Interview Details</h1>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group m-2">
          <label htmlFor="interviewDate" className="m-1">
            Interview Date
          </label>
          <input
            type="date"
            className="form-control"
            id="interviewDate"
            name="interviewDate"
            onChange={(e) => setInterviewDate(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1" htmlFor="trainerName">
            Trainer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="trainerName"
            name="trainerName"
            value={name}
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1" htmlFor="interviewFeedback">
            Interview Feedback
          </label>
          <textarea
            className="form-control"
            maxLength={300}
            name="interviewFeedback"
            id="interviewFeedback"
            onChange={(e) => setInterviewFeedback(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group m-2">
          <label htmlFor="candidatetureStatus" className="m-1">
            Candidate Status
          </label>
          <select
            className="form-control"
            name="candidatetureStatus"
            id="candidatetureStatus"
            onChange={(e) => setCandidatetureStatus(e.target.value)}
          >
            <option>Please choose status...</option>
            <option value="Suitable">Suitable</option>
            <option value="Not Suitable">Not Suitable</option>
          </select>
        </div>
        <div className="form-group m-2">
          <label htmlFor="bdRemarksFeedback" className="m-1">
            BD Remarks/Feedback
          </label>
          <textarea
            className="form-control"
            name="bdRemarksFeedback"
            id="bdRemarksFeedback"
            value={remarks}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="loiSent" className="m-1">
            LOI Sent
          </label>
          <select
            className="form-control"
            name="loiSent"
            id="loiSent"
            onChange={(e) => setLoiSent(e.target.value)}
          >
            <option>---</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group m-2">
          <label htmlFor="loiAccepted" className="m-1">
            LOI Accepted
          </label>
          <select
            className="form-control"
            name="loiAccepted"
            id="loiAccepted"
            onChange={(e) => setLoiAccepted(e.target.value)}
          >
            <option>---</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group m-2">
          <label htmlFor="joinedBatch" className="m-1">
            Joined Batch
          </label>
          <select
            className="form-control"
            name="joinedBatch"
            id="joinedBatch"
            onChange={(e) => setJoinedBatch(e.target.value)}
          >
            <option>---</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group m-2">
          <label htmlFor="candidateBatchStartDate" className="m-1">
            Batch Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="candidateBatchStartDate"
            name="candidateBatchStartDate"
            onChange={(e) => setCandidateBatchStartDate(e.target.value)}
          />
          <button className="btn btn-primary m-2">Submit</button>
          <button type="reset" className="btn btn-danger m-2">
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateInterview;
