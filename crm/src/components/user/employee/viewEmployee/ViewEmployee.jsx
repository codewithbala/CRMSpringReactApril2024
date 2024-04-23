import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
// import image from  "../../../assets/blank-profile-picture.svg"
import "../viewEmployee/ViewEmployee.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function ViewEmployee(){
    const [employee, setEmployee] = useState();
    let department = localStorage.getItem("department")
    const [loading, setLoading] = useState(true);
    const baseUrl = `http://localhost:8080/api`
    const params = useParams();

    console.log(params)

    function getEmployeeById(){
        axios.get(`${baseUrl}/${department}/${params.id}`).then(response => {
            setEmployee(response.data);
            setLoading(false)
        })
    }

    useEffect(() => {
        
        getEmployeeById();
    },[])

    let initials;

    if(loading){
        <p>Loading</p>
    }else{
        return(
            <div className="row mt-5 container">

                
                    <div className="row mt-3 mb-3">
                        
                        <div className="col-1">
                            <div className="circleEmployee mx mt-2"><p>{employee.firstName.substring(0,1) + employee.lastName.substring(0,1)}</p></div>           
                        </div>
                        <div className="col mt-4">
                        <p className="bolder">{employee.firstName} {employee.lastName}
                            <p className="lighter">{employee.job}</p>
                            
                        </p>
                        </div>

                    </div>
                    <hr></hr>

                    <div className="mt-2 mb-5">
                        <div><FaPhoneAlt /> {employee.phonNum == undefined ? "None" : employee.phoneNum}</div>

                        <div className="mt-2"><MdEmail /> {employee.emailId}</div>
                    </div>





                <div class="row">
                    <h2>General Information</h2>
                    <div className="col">
                        <p className="lighter">Join Date
                            <p className="bolder">{employee.hireDate}</p>
                        </p>
                        
                        <p className="lighter">Department
                            <p className="bolder">{employee.departmentId}</p>
                        </p>
                        
                        <p className="lighter">Position
                            <p className="bolder">{employee.job}</p>
                        </p>
                        <p className="lighter">Education Level
                            <p className="bolder">{employee.edLevel}</p>
                        </p>   
                    </div>

                    <div className="col">
                        <p className="lighter">Salary
                            <p className="bolder">{employee.salary}</p>
                        </p>
                        <p className="lighter">ManagerId
                            <p className="bolder">{employee.manager_id}</p>
                        </p>
                        <p className="lighter">ManagerId
                            <p className="bolder">{employee.birthdate}</p>
                        </p>    
                    </div>

                </div>

               {/* <div className="col">
                     <img className="candidate-photo" src={image}></img>
    
                    <div className="mx-4">
                        <div>
                            <h4 className="mt-4 underlined">Candidate Details</h4>
                                <h5 className="mt-3">First Name</h5>
                                <p>{employee.firstName}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Last Name</h5>
                                <p>{employee.lastName}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Email Address</h5>
                                <p>{employee.emailId}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Phone Number</h5>
                                <p>{employee.phoneNumber}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Birth Date</h5>
                                <p>{employee.birthdate}</p>
                        </div>
                        
                    </div>
    
                </div>


                <div className="col">
                        
                    <div className="mx-4">
                            <div>
                                <h4 className="mt-5 underlined">Candidate Profile</h4>
                                    <h5 className="mt-3">Education Level</h5>
                                    <p>{employee.edLevel}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Department Number</h5>
                                    <p>{employee.departmentId}</p>
                            </div>


                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Position</h5>
                                    <p>{employee.job}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Manager Id</h5>
                                    <p>{employee.manager_id}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Phone Number</h5>
                                    <p>{employee.phoneNum}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Salary</h5>
                                    <p>{employee.salary}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Sex</h5>
                                    <p>{employee.sex}</p>
                            </div>

                            
                    </div>
                    
                </div>
                <div className="col">
                <div className="mx-4">
                            
                    </div>

                </div> */}
    
            </div>
        )
    }
}