import { useState } from "react";

const UpdateBusinessCandidate = (props) => {
  /* will/can use props for autofill values */
  const [positionTitle, setPositionTitle] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorPoc, setVendorPoc] = useState("");
  const [endClientName, setEndClientName] = useState("");
  const [location, setLocation] = useState("");
  const [billRate, setBillRate] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewResult, setInterviewResult] = useState("");
  const [interviewFeedbackRemarks, setInterviewFeedbackRemarks] = useState("");
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const stateValues = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const interviewResultValues = [
    "Cleared",
    "Not Selected",
    "On Hold",
    "Offered Project",
  ];

  return (
    <div className="container">
      <h1 className="display-4 m-2">Update Business Candidate</h1>
      <form action="#">
        <div className="form-group m-2">
          <label className="m-1">Position Title</label>
          <input
            type="text"
            className="form-control"
            id="positionTitle"
            name="positionTitle"
            onChange={(e) => setPositionTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="candidateName" className="m-1">
            Candidate Name
          </label>
          <input
            type="text"
            className="form-control"
            id="candidateName"
            name="candidateName"
            value={props.candidateName}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="skillSet" className="m-1">
            Skill Set
          </label>
          <input
            type="text"
            className="form-control"
            id="skillSet"
            name="skillSet"
            value={props.skillSet}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="batchNo" className="m-1">
            Batch Number
          </label>
          <input
            type="text"
            className="form-control"
            id="batchNo"
            name="batchNo"
            value={props.batchNo}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="snvaEid" className="m-1">
            SNVA EID
          </label>
          <input
            type="text"
            className="form-control"
            id="snvaEid"
            name="snvaEid"
            value={props.snvaEid}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="vendorName" className="m-1">
            Vendor Name
          </label>
          <input
            type="text"
            className="form-control"
            id="vendorName"
            name="vendorName"
            onChange={(e) => setVendorName(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="vendorPoc" className="m-1">
            Vendor POC
          </label>
          <input
            type="text"
            className="form-control"
            id="vendorPoc"
            name="vendorPoc"
            onChange={(e) => setVendorPoc(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="endClientName" className="m-1">
            End Client Name
          </label>
          <input
            type="text"
            className="form-control"
            id="endClientName"
            name="endClientName"
            onChange={(e) => setEndClientName(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="location" className="m-1">
            Location
          </label>
          <select
            className="form-select form-control"
            name="location"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>---</option>
            {stateValues.map((state, key) => {
              return (
                <option key={key} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group m-2">
          <label htmlFor="billRate" className="m-1">
            Bill Rate
          </label>
          <input
            type="text"
            className="form-control"
            id="billRate"
            name="billRate"
            onChange={(e) => setBillRate(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="submissionStatus" className="m-1">
            Submission Status
          </label>
          <select
            className="form-select form-control"
            name="submissionStatus"
            id="submissionStatus"
            onChange={(e) => setSubmissionStatus(e.target.value)}
          >
            <option>---</option>
            <option value="W2">W2</option>
            <option value="fulltime">Full Time</option>
          </select>
        </div>
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
          <label htmlFor="interviewTime" className="m-1">
            Interview Time
          </label>
          <input
            type="time"
            className="form-control"
            name="interviewTime"
            id="interviewTime"
            onChange={(e) => setInterviewTime(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="interviewResult">Interview Result</label>
          <select
            className="form-select form-control"
            name="interviewResult"
            id="interviewResult"
            onChange={(e) => setInterviewResult(e.target.value)}
          >
            <option>---</option>
            {interviewResultValues.map((item, key) => {
              return (
                <option value={item} key={key}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group m-2">
          <label htmlFor="interviewFeedbackRemarks" className="m-1">
            Interview Feedback/Remarks
          </label>
          <textarea
            className="form-control"
            name="interviewFeedbackRemarks"
            id="interviewFeedbackRemarks"
            onChange={(e) => setInterviewFeedbackRemarks(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group m-2">
          <label htmlFor="projectStartDate" className="m-1">
            Project Start Date
          </label>
          <input
            type="date"
            className="form-control"
            name="projectStartDate"
            id="projectStartDate"
            onChange={(e) => setProjectStartDate(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="projectEndDate" className="m-1">
            Project End Date
          </label>
          <input
            type="date"
            className="form-control"
            name="projectEndDate"
            id="projectEndDate"
            onChange={(e) => setProjectEndDate(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="remarks" className="m-1">
            Remarks
          </label>
          <textarea
            className="form-control"
            name="remarks"
            id="remarks"
            maxLength={300}
            onChange={(e) => setRemarks(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Update Candidate
        </button>

        <button type="reset" className="btn btn-danger m-2">
          Reset Form
        </button>
      </form>
    </div>
  );
};

export default UpdateBusinessCandidate;
