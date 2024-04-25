import {React, useState} from "react";
import { useParams, useNavigate  } from "react-router-dom";
import GetAllCandidates from "../../../candidate/GetAllCandidates";

export default function TrainingEmployees(){
    let navigate = useNavigate();
    

    function goReviewCandidateInterviews(){
        navigate("/candidates/candidate-interview");
    }



    return(
        <div className="mt-4">
            <GetAllCandidates/>
        </div>
    )
}