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
                <label className="m-1">Candidate Name</label>
                <input
                    type="text" className="form-control" onChange={(e) => setCandidateName(e.target.value)} required/>
                </div>

            </form>
        </div>
    )
}