import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const BusinessEmployeeEditCandidate = (props) => {
  /* will/can use props for autofill values */
  const[candidate, setCandidate] = useState([]);
  const[loading, setLoading] = useState(true);
  const [positionTitle, setPositionTitle] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorPoc, setVendorPoc] = useState("Right");
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

  const[vendorTier, setVendorTier] = useState("");
  const[vendorSPOC, setVendorSPOC] = useState("Hello");
  const[vendorEmail, setVendorEmail] = useState();
  const[vendorContactNo, setVendorContactNo] = useState();
  const[vendorLocation, setVendorLocation] = useState();



  const baseUrl = "http://localhost:8080/api"
  const navigate = useNavigate();
  const params = useParams();
  

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

  useEffect(() => {
    getCandidate();
  },[])

  const submitForm = () => {
    let body = {
        "id": params.id,
        "recruiterName": candidate.recruiterName,
        "snvaEid": candidate.id,
        "candidateEntry": candidate.candidateEntry,
        "skillSet": candidate.skillSet,
        "batchNo": candidate.batchNo,
        "candidateStatus": candidate.candidateStatus,
        "firstName": candidate.firstName,
        "middleName": candidate.middleName,
        "lastName": candidate.lastName,
        "emailId": candidate.emailId,
        "phoneNumber": candidate.phoneNumber,
        "college": candidate.college,
        "country": candidate.country,
        "state": candidate.state,
        "city": candidate.city,
        "experience": candidate.experience,
        "visaStatus": candidate.visaStatus,
        "source": candidate.source,
        "communicationSkill": candidate.communicationSkill,
        "resume": candidate.resume,
        "recruiterRemarks": candidate.recruiterRemarks,
        "tenthDayEvaluation": candidate.tenthDayEvaluation,
        "tenthDayEvaluationOther": candidate.tenthDayEvaluationOther,
        "secondOpinionOther": candidate.secondOpinionOther,
        "trainingCompletionFeedback": candidate.trainingCompletionFeedback,
        "finalResume": candidate.finalResume,
        "otherSource": candidate.otherSource,
        "referenceName": candidate.referenceName,
        "otherSkills": candidate.otherSkills,
        "interviewDate": candidate.interviewDate,
        "trainerName": candidate.trainerName,
        "interviewFeedback": candidate.interviewFeedback,
        "candidatureStatus": candidate.candidatureStatus,
        "bdRemarksFeedback": candidate.bdRemarksFeedbaack,
        "loiSent": candidate.loiSent,
        "loiAccepted": candidate.loiAccepted,
        "joinedBatch": candidate.joinedBatch,
        "candidateBatchStartDate": candidate.candidateBatchStartDate,
        "ssn": candidate.ssn,
        "optendDate": candidate.optendDate,
        "optstartDate": candidate.optstartDate,
        "positionTitle": candidate.positionTitle,

        "candidateName": candidate.candidateName,
        "skillSetForBusinessView": candidate.skillSet,
        "batchNoForBusinessView": candidate.batchNo,
        "vendorPoc": vendorPoc,
        "endClientName": endClientName,
        "location": location,
        "billRate": billRate,
        "submissionStatus": submissionStatus,
        "businessInterviewDate": interviewDate,
        "interviewTime": interviewTime,
        "interviewResult": interviewResult,
        "projectStartDate": projectStartDate,
        "projectEndDate": projectEndDate,
        "remarks": remarks,
        "vendorTier": vendorTier,
        "vendorName": vendorName,

        "vendorEmail": vendorEmail,
        "vendorContactNo": vendorContactNo,
        "vendorLocation": vendorLocation,
        "businessInterviewFeedback": interviewFeedbackRemarks

    }
    axios.put(`${baseUrl}/candidates/update-candidate/${params.id}`, body).then(() => {
        navigate("/employee-page")
    }).catch(error => {
        alert(error)
    })
  }

  function getCandidate(){
    axios.get(`${baseUrl}/candidates/${params.id}`).then(response => {
        console.log(response.data)
        setCandidate(response.data);
        setLoading(false)
    }).catch(error => {
        console.log(error)
    })
  }

  if(loading){
    <p>Loading...</p>
  }
  else{
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
              value={candidate.positionTitle}
              disabled
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
              value={candidate.candidateName}
              disabled
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
              value={candidate.skillSet}
              disabled
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
              value={candidate.batchNo}
              disabled
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
              value={candidate.id}
              disabled
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
              required
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

          <div className="form-group m-2">
            <label htmlFor="submissionStatus" className="m-1">
              Vendor Tier
            </label>
            <select
              className="form-select form-control"
              name="submissionStatus"
              id="submissionStatus"
              onChange={(e) => setVendorTier(e.target.value)}
            >
              <option>---</option>
              <option value="W2">W2</option>
              <option value="fulltime">Full Time</option>
            </select>
          </div>



          <div className="form-group m-2">
            <label htmlFor="billRate" className="m-1">
              Vendor SPOC
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setVendorSPOC(e.target.value)}
              
              required
            />
          </div>
          <p>here{vendorSPOC}</p>

          <div className="form-group m-2">
            <label htmlFor="vEmail" className="m-1">
              Vendor Email
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setVendorEmail(e.target.value)}
              
              required
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="vendor Contact Number" className="m-1">
              Vendor Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setVendorContactNo(e.target.value)}
              required
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="submissionStatus" className="m-1">
              Vendor Location
            </label>
            <select
              className="form-select form-control"
              name="submissionStatus"
              id="submissionStatus"
              onChange={(e) => setVendorLocation(e.target.value)}
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

          <div type="submit" onClick={() => submitForm()} className="btn btn-primary m-2">
            Update Candidate
          </div>
  
          <button type="reset" className="btn btn-danger m-2">
            Reset Form
          </button>
        </form>
      </div>
    );
  }
  
};

export default BusinessEmployeeEditCandidate;
