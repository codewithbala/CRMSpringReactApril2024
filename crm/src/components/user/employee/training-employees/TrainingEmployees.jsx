import {React, useState} from "react";
import { useParams, useNavigate  } from "react-router-dom";

export default function TrainingEmployees(){
    let navigate = useNavigate();
    

    function goReviewCandidateInterviews(){
        navigate("/candidates/candidate-interview");
    }



    return(
        <div className="mt-4">
            <button onClick={() => goReviewCandidateInterviews()}>Edit Candidate Interview</button>
        </div>
    )
}