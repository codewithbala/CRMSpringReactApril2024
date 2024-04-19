
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import TrainingEmployees from "./training-employees/TrainingEmployees";
import GetAllCandidates from "../../candidate/GetAllCandidates";
import HREmployee from "./hr-employee/HREmployee";


export default function EmployeeHomepage(props){
    const [managerId, setManagerId] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    let navigate = useNavigate();


    //get the department prop
    let department = props.department;
    console.log(user)

    useEffect(() => {},[])
    

    useEffect(() => {
        if(department == "hr-employee"){
            setManagerId(user.hr_employee_id);
        }if(department == "training-employee"){
            setManagerId(user.training_employee_id);
        }
        if(department == "business-employee"){
            setManagerId(user.business_employee_id);
        }
    },[managerId, user])


    function click (){
        // navigate(`/${props.department}/createEmployee/${user.departmentId}/${managerId}`)
        navigate("/candidates/create-candidate/")
     }




    return(
        <div className="container mt-5">
            <h1>Hello Employee {user.firstName} {user.lastName}</h1>
            {props.department == "hr-employee" ? <HREmployee department={props.department} user={props.user} managerId={props.managerId}/> : <></>}
            
            {props.department == "training-employee" ? <TrainingEmployees/> : <></>}
            
            
          
        </div>
    )
}