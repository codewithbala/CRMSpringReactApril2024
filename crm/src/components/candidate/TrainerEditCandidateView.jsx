import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TrainerFormView(){
    const [batchStatus, setBatchStatus] = useState()
    const [interviewFeedback, setInterviewFeedback] = useState()
    const [candidateStatus, setCandidateStatus] = useState()
    const [dayEvaluation, setDayEvaluation] = useState()
    const [trainingCompletionFeedback, setTrainingCompletedFeedback] = useState()
    const [finalResume, setFinalResume] = useState()
    const [candidate, setCandidate] = useState()
    const [loading, setLoading] = useState(true)
    const baseUrl = "http://localhost:8080/api"
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        getCandidate();
    },[])

    const submitorm = () => {
        let body = {
            "id": params.id,
            "recruiterName": candidate.recruiterName,
            "snvaEid": candidate.snvaEid,
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
            "tenthDayEvaluation": dayEvaluation,
            "tenthDayEvaluationOther": null,
            "secondOpinionOther": null,
            "trainingCompletionFeedback": trainingCompletionFeedback,
            "finalResume": finalResume,
            "otherSource": candidate.otherSource,
            "referenceName": candidate.referenceName,
            "otherSkills": candidate.otherSkills,
            "interviewDate": candidate.interviewDate,
            "trainerName": candidate.trainerName,
            "interviewFeedback": interviewFeedback,
            "candidatureStatus": candidateStatus,
            "bdRemarksFeedback": candidate.bdRemarksFeedbaack,
            "loiSent": candidate.loiSent,
            "loiAccepted": candidate.loiAccepted,
            "joinedBatch": candidate.joinedBatch,
            "candidateBatchStartDate": candidate.candidateBatchStartDate,
            "ssn": candidate.ssn,
            "optendDate": candidate.optendDate,
            "optstartDate": candidate.optstartDate
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
        return(<h1>Loading</h1>)
    }else{
        return(
            <div>
                <form className="form">
                <h2 className="mt-4">Edit Candidate</h2>
                <div className="form-group m-2">
                    <label className="m-1">Recruiter Name</label>
                    <input
                        type="text" className="form-control" value={candidate.recruiterName} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Candidate Entry Number</label>
                    <input
                        type="text" className="form-control" value={candidate.candidateEntry} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Skill Set</label>
                    <input
                        type="text" className="form-control" value={candidate.skillSet} disabled/>
                </div>
    
                {/* <div className="form-group m-2">
                    <label className="m-1">Batch Number</label>
                    <input
                        type="text" className="form-control" value="" required/>
                </div> */}
    
                <div className="form-group m-2">
                    <label className="m-1">First Name</label>
                    <input
                        type="text" className="form-control" value={candidate.firstName} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Middle Name</label>
                    <input
                        type="text" className="form-control" value={candidate.middleName} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Last Name</label>
                    <input
                        type="text" className="form-control"value={candidate.lastName} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Email Id</label>
                    <input
                        type="text" className="form-control" value={candidate.emailId} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Contact Details</label>
                    <input
                        type="text" className="form-control" value={candidate.phoneNumber} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Experience</label>
                    <input
                        type="text" className="form-control" value={candidate.experience} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Communication Skills</label>
                    <input
                        type="text" className="form-control" value={candidate.communicationSkills} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Resume Attachment</label>
                    <input
                        type="text" className="form-control" value={candidate.resume} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Candidate's Batch Start Date</label>
                    <input
                        type="text" className="form-control" value={candidate.candidateBatchStartDate} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Recruiters Remarks</label>
                    <input
                        type="text" className="form-control" value={candidate.recruiterRemarks} disabled/>
                </div>
    
                <div className="form-group m-2">
                <label className="m-1">Interview Feedback</label>
                <select name="submissionStatus"  onChange={(e) => setInterviewFeedback(e.target.value)} className="form-control" required>
                    <option>Select One</option>
                    <option value="Cleared">W2/Cleared</option>
                    <option value="Not Cleared">Not Cleared</option>
                    <option value="On Hold">On Hold</option>
                </select>
                </div>
    
                <div className="form-group m-2">
                <label className="m-1">Interview Feedback</label>
                <select name="submissionStatus"  onChange={(e) => setCandidateStatus(e.target.value)} className="form-control" required>
                    <option>Select One</option>
                    <option value="Suitable">Suitable</option>
                    <option value="Not Suitable">Not Suitable</option>
                </select>
                </div>
    
                <div className="form-group m-2">
                <label className="m-1">10th Day Evaluation</label>
                <select name="submissionStatus"  onChange={(e) => setDayEvaluation(e.target.value)} className="form-control" required>
                    <option>Select One</option>
                    <option value="Suitable">Suitable</option>
                    <option value="Not Suitable">Not Suitable</option>
                </select>
                </div>
    
    
                <div className="form-group m-2">
                <label className="m-1">Training Completion Feedback</label>
                <select name="submissionStatus"  onChange={(e) => setTrainingCompletedFeedback(e.target.value)} className="form-control" required >
                    <option>Select One</option>
                    <option value="Market Release">Market Release</option>
                    <option value="On Hold">On Hold</option>
                </select>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">Final Resume</label>
                    <input
                        type="text" className="form-control" value="" onChange={(e) => setFinalResume(e.target.value)} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">BD Remarks/Feedback</label>
                    <input
                        type="text" className="form-control" value={candidate.bdRemarksFeedbaack} disabled/>
                </div>
    
                <div className="form-group m-2">
                    <label className="m-1">SNVA EID</label>
                    <input
                        type="text" className="form-control" value={candidate.snvaEid} disabled/>
                </div>
    
                </form>
                <div className="btn btn-primary mt-3 mx-2" onClick={() => submitorm()}>Submit</div>
            </div>
        )
    }

    
}