import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePasswordConfirmation(props){
    const baseUrl = "http://localhost:8080/api";
    const [password, setPassword] = useState("");
    const[passwordCopy, setPasswordCopy] = useState("");
    const[employee, setEmployee] = useState([]);
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getEmployee();
    },[])

    const getEmployee = () => {
        axios.get(`${baseUrl}/${params.department}/${params.id}`).then(response => {
            console.log(response.data)
            setEmployee(response.data);
        })
    }

    let department = params.department;
    const resetPassword = () => {
        if(password != "" && password === passwordCopy){
            let id = department == "hr" ? "hr_employee_id" : department == "business" ? "business_dev_employee_id": department == "training" ? "training_employee_id" : "hr_managerId"
            let body = {
                "birthdate": employee.birthdate,
                "departmentId": employee.departmentId,
                "edLevel": employee.edLevel,
                "emailId": employee.emailId,
                "firstName": employee.firstName,
                "hireDate": employee.hireDate,
                "job": employee.job,
                "lastName": employee.lastName,
                "manager_id": employee.manager_id,
                "midInitial": employee.midInitial,
                "password": password,
                "phoneNum": employee.phoneNum,
                "salary": employee.salary,
                "sex": employee.sex,
                id: params.id
            }
            axios.put(`${baseUrl}/${params.department}/update-employee/${params.id}`,body).then(() => {
            alert("password change successful!")
            props.setUserAuthenticated(false)
            navigate("/")
        }).catch(error => {
            alert(error)
        })
        }
        //if for the managers
        if(department.includes("-") && password != "" && password === passwordCopy){
            let id = department == "hr-manager" ? "hr_manager_id" : department == "business-manager" ? "business_dev_admin_id": department == "training-admin" ? "training_admin_id" : "hr_managerId"
            let body = {
                "superAdminId": employee.superAdminId,
                "departmentId": employee.departmentId,
                "firstName": employee.firstName,
                "lastName": employee.lastName,
                "emailId": employee.emailId,
                "password": password,
                id: params.id
            }
            axios.put(`${baseUrl}/${params.department}/update-employee/${params.id}`,body).then(() => {
            alert("password change successful!")
            props.setUserAuthenticated(false)
            navigate("/")
        }).catch(error => {
            alert(error)
        })


        }
        
        else{
            alert("passwords do not match")
        }
    }

    return(
        <div className="container">
            <h1>Reset Password</h1>


            <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control"  placeholder="Enter a New Password"/>     
            </div>

            <div className="form-group mb-3 mt-2">
                    <label htmlFor="exampleInputEmail1">Password Confirmation</label>
                    <input type="password" onChange={(e) => setPasswordCopy(e.target.value)} className="form-control"  placeholder="Please Reapeat password"/>     
            </div>

            <div className="btn btn-danger"  onClick={(e) => resetPassword(e)}>Reset Password</div>
        </div>
    )
}