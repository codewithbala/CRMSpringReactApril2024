import React, { useState } from "react";
import axios from "axios";

export default function TrainerFormView(){
    const [batchStatus, setBatchStatus] = useState()
    const [interviewFeedback, setInterviewFeedback] = useState()
    const [candidateStatus, setCandidateStatus] = useState()
    const [dayEvaluation, setDayEvaluation] = useState()
    const [trainingCompletionFeedback, setTrainingCompletedFeedback] = useState()
    const [finalResume, setFinalResume] = useState()

    function getCandidate(){
        axios.get(``)
    }

    return(
        <div>
            <form className="form">
            <div className="form-group m-2">
                <label className="m-1">Recruiter Name</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Candidate Entry Number</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Skill Set</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            {/* <div className="form-group m-2">
                <label className="m-1">Batch Number</label>
                <input
                    type="text" className="form-control" value="" required/>
            </div> */}

            <div className="form-group m-2">
                <label className="m-1">First Name</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Middle Name</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Last Name</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Email Id</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Contact Details</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Experience</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Communication Skills</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Resume Attachment</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Candidate's Batch Start Date</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Recruiters Remarks</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Interview Feedback</label>
                <input
                    type="text" className="form-control" value="" disabled/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Recruiter Name</label>
                <input
                    type="text" className="form-control" value="" required/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Recruiter Name</label>
                <input
                    type="text" className="form-control" value="" required/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Recruiter Name</label>
                <input
                    type="text" className="form-control" value="" required/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Recruiter Name</label>
                <input
                    type="text" className="form-control" value="" required/>
            </div>

            <div className="form-group m-2">
                <label className="m-1">Recruiter Name</label>
                <input
                    type="text" className="form-control" value="" required/>
            </div>

            </form>
        </div>
    )
}