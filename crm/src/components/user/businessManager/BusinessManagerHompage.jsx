import CreateBusinessEmployee from "./CreateBusinessEmployee";
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function BusinessManagerHomepage() {
  const navigate = useNavigate();
  const params = useParams();
  const deptId = params.deptId;
  const managerId = params.managerId;
  console.log(params.deptId);
  console.log(params.hrManagerId)

  function click (){
    navigate(`/business/createEmployee/${deptId}/${managerId}`)
  }

  return (
    <div>
      <h1>Hello HrManager</h1>
      <button onClick={() => click()}>Create Hr Employee</button>
    </div>
  );
}
