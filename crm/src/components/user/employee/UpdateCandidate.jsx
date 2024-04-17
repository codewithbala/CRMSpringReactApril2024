import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";



export default function UpdateCandidate(){
// Corresponding form values stored in state
const [position, setPosition] = useState("");
const [candidateName, setCandidateName] = useState("");
const [skillset, setSkillset] = useState("");
const [batchNo, setBatchNo] = useState("");
const [SNVAEID, setSNVAEID] = useState("");
const [vendorName, setVendorName] = useState("");
const [vendorPoc, setVendorPoc] = useState("");
const [endClientName, setEndClientName] = useState("");
const [location, setLocation] = useState("");
const [billRate, setBillRate] = useState("");
const [submissionStatus, setSubmissionStatus] = useState("");
const [interviewDate, setInterviewDate] = useState("");
const [interviewTime, setInterviewTime] = useState("");
const [interviewResult, setInterviewResult] = useState("");
const [interviewFeedback, setInterviewFeedback] = useState("");
const [projectStart, setProjectStart] = useState("");
const [projectEnd, setProjectEnd] = useState("");
const [remarks, setRemarks] = useState("");
let navigate = useNavigate();
let params = useParams();

// Other variables
/* discuss with team tomorrow on how to structure this */
useEffect(() => {

})

const onSubmit = (e) => {
  const baseUrl = "https://dummyjson.com/products/add"
  e.preventDefault();

  let body = 
  {
  "position": position,
  "candidateName": candidateName,
  "skillset": skillset,
  "batchNo": batchNo,
  "SNVAEID": SNVAEID,
  "vendorName": vendorName,
  "vendorPoc": vendorPoc,
  "EndClientName": endClientName,
  "location": location,
  "billRate": billRate,
  "submissionStatus": submissionStatus,
  "interviewDate": interviewDate,
  "interviewTime": interviewTime,
  "interviewResult": interviewResult,
  "interviewFeedback": interviewFeedback,
  "projectStartDate": projectStart,
  "projectEndDate": projectEnd,
  "remarks": remarks
}

  axios.post(`${baseUrl}`, body).then(() => {
      navigate(`/training-admin-page/${params.deptId}/${params.managerId}`)
  }).catch((error) => {
      console.log(error)
  })
}


return (
  <div>
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <h1 className="display-4 m-2">Update Candidate</h1>

        <div className="form-group m-2">
          <label className="m-1">Position Title</label>
          <input
            type="text"
            className="form-control"
            id="positionTitle"
            name="positionTitle"
            onChange={(e) => setPosition(e.target.value)}
            required
            
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1">Candidate Name</label>
          <input
            type="text"
            className="form-control"
            id="candidateName"
            name="candidateName"
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1">Skill Set</label>
          <input
            type="text"
            className="form-control"
            id="skillSet"
            onChange={(e) => setSkillset(e.target.value)}
            name="skillSet"
            required
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1">Batch No</label>
          <input
            type="text"
            className="form-control"
            id="batchNo"
            name="batchNo"
            onChange={(e) => setBatchNo(e.target.value)}
            required
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">SNVA EID</label>
          <input
            type="text"
            className="form-control"
            id="snvaEid"
            name="snvaEid"
            onChange={(e) => setSNVAEID(e.target.value)}
            required
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            id="vendorName"
            name="vendorName"
            onChange={(e) => setVendorName(e.target.value)}
            required
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Vendor Poc</label>
          <input
            type="text"
            className="form-control"
            id="vendorPoc"
            name="vendorPoc"
            onChange={(e) => setVendorPoc(e.target.value)}
            required
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">End Client Name</label>
          <input
            type="text"
            className="form-control"
            id="endClient"
            name="endClient"
            onChange={(e) => setEndClientName(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group m-2">
          <label className="m-1" >Highest Level of Education</label>
          <select name="edLevel" onChange={(e) => setEdLevel(e.target.value)} className="form-control" id="edLevel">
            <option value="GED or less">GED or less</option>
            <option value="High school diploma, no college">
              High school diploma
            </option>
            <option value="Some College">Some College</option>
            <option value="Associates Degree">Associates Degree</option>
            <option value="Bachelors Degree">Bachelors Degree</option>
            <option value="Masters Degree">Masters Degree</option>
            <option value="PhD/Doctorate">PhD/Doctorate</option>
            <option value="Vocational/Other">Vocational/Other</option>
          </select>
        </div> */}

        {/* <div className="form-group m-2">
          <label className="m-1">Location</label>
          <select name="sex"  onChange={(e) => setSex(e.target.value)} className="form-control" id="sex">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div> */}


        <div className="form-group m-2">
          <label className="m-1" >Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            required
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1">Bill Rate</label>
          <input
            type="text"
            className="form-control"
            id="billRate"
            name="Bill Rate"
            onChange={(e) => setBillRate(e.target.value)}
            required
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Submission Status</label>
          <select name="submissionStatus"  onChange={(e) => setSubmissionStatus(e.target.value)} className="form-control" id="sex">
            <option>Select One</option>
            <option value="w2/Fulltiume">W2/Fulltiume</option>
            <option value="Low Bill Rate">Low Bill Rate</option>
            <option value="Submitted To Send Client">Submitted To Send Client</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Position On Hold">Position On Hold</option>
          </select>
        </div>

        <div className="form-group m-2">
          <label className="m-1">Interview Date</label>
          <input
            type="date"
            className="form-control"
            id="interviewDate"
            name="interviewDate"
            onChange={(e) => setInterviewDate(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Interview Time</label>
          <input
            type="text"
            className="form-control"
            id="interviewTime"
            name="interviewTime"
            onChange={(e) => setInterviewTime(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Interview Result</label>
          <select name="result"  onChange={(e) => setInterviewResult(e.target.value)} className="form-control" id="sex">
            <option>Select One</option>
            <option value="cleared">Cleared</option>
            <option value="Not Selected">Not Selected</option>
            <option value="Hold">Hold</option>
            <option value="Offered Project">Offered Project</option>
          </select>
        </div>

        <div className="form-group m-2">
          <label className="m-1">Interview Feedback</label>
          <textarea className="form-control"
            id="interviewFeedback"
            name="interviewResult"
            onChange={(e) => setInterviewFeedback(e.target.value)}>
            

          </textarea>
        </div>

        <div className="form-group m-2">
          <label className="m-1">Project Start Date</label>
          <input
            type="date"
            className="form-control"
            id="projectStartDate"
            name="projectStartDate"
            onChange={(e) => setProjectStart(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Project End Date</label>
          <input
            type="date"
            className="form-control"
            id="projectEndDate"
            name="projectEndDate"
            onChange={(e) => setProjectEnd(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Remarks</label>
          <textarea maxLength="300" className="form-control"
            id="interviewFeedback"
            name="interviewResult"
            onChange={(e) => setRemarks(e.target.value)}>
            

          </textarea>
        </div>



        <button type="submit" className="btn btn-primary">
          Update Candidate
        </button>
        <button type="submit" className="btn btn-danger">
          Reset Form
        </button>
      </form>
    </div>
  </div>
);
}