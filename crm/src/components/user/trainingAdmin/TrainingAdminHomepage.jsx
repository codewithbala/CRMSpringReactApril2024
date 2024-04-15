import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function TrainingManagerHomepage() {

  const navigate = useNavigate();
  const params = useParams();
  const deptId = params.deptId;
  const managerId = params.hrManagerId;
  console.log(params.deptId);
  console.log(params.hrManagerId)

  function click (){
    navigate(`/hr/createEmployee/${deptId}/${managerId}`)
  
    return(
        <div>
            <h1>Hello TrainingManager</h1>
            <button onClick={() => click()}>Create Training Employee</button>
        </div>
    )

}
}

