import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function UpdatePassword(props){
    const [department, setDepartment] = useState("");
    const [employee, setEmployee] = useState([]);
    const [emailId, setEmailId] = useState("");
    const [hireDate, setHireDate] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    let navigate = useNavigate();

    useEffect(() => {

    },[])
    const baseUrl = "http://localhost:8080/api";


    const updatePassword = (e) => {
        console.log(emailId)
        e.preventDefault();
        let filter;
        let result;
        axios.get(`${baseUrl}/${department}/`).then( response => {
            result = response.data
            // console.log(result)

            const EmployeeToReset = result.filter(customer => 
                customer.emailId == emailId 
                // customer.hireDate == hireDate
                // department == "hr" ? x.hr_employee_id == employeeId : department == "business" ? x.business_dev_employee_id: department == "training" ? x.training_employee_id == employeeId : x.hr_managerId == employeeId
            )
            
            console.log(EmployeeToReset)
            setEmployee(EmployeeToReset);

            const id = department == "hr" ? EmployeeToReset[0].hr_employee_id : department == "business" ? EmployeeToReset[0].business_dev_employee_id: department == "training" ? EmployeeToReset[0].training_employee_id : department == "hr-manager" ? EmployeeToReset[0].hr_manager_id : department == "business-manager" ? EmployeeToReset[0].business_dev_id: department == "training-admin" ? EmployeeToReset[0].training_admin_id : alert("please select a valid position")

            console.log(id)

            props.setUserAuthenticated(true)
            navigate("/updateUserPassword/"+department+"/"+id)
        }).catch(error => {
            alert("email id not found")
        })



    }


    return(
        <div className="container mt-5 mx-4 ">
            <h1>Reset Password</h1>
            <form className="form">
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Choose Position</label>
                    <br/>
                    <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => setDepartment(e.target.value)}
                    >
                            <option defaultValue={""}>Choose Position</option>
                            <option value="hr-manager">HR Manager</option>
                            <option value="business-manager">Business Development Admin</option>
                            <option value="training-admin">Training Manager</option>
                            <option value="training">Training-employee</option>
                            <option value="business">Business-employee</option>
                            <option value="hr">HR-employee</option>
                        </select>
                </div>
                <br/>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email ID</label>
                    <input type="email" onChange={(e) => setEmailId(e.target.value)} className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>     
                </div>
                <br/>

                {/* <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Hire Date</label>
                    <input type="text" onChange={(e) => setHireDate(e.target.value)} className="form-control" placeholder="Enter Hire Date"/>     
                </div>
                <br/> */}

                {/* <div className="form-group mb-3">
                    <label htmlFor="employeeId">Employee ID</label>
                    <input type="text" onChange={(e) => setEmployeeId(e.target.value)} className="form-control" placeholder="Enter Employee Id"/>     
                </div> */}

                <div className="btn btn-danger"  onClick={(e) => updatePassword(e)}>Reset Password</div>


            </form>
        </div>
    )
}