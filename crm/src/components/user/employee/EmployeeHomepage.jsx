
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


export default function EmployeeHomepage(props){
    const [managerId, setManagerId] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    let navigate = useNavigate();


    //get the department prop
    let department = props.department;
    console.log(user)
    

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
        navigate(`/${props.department}/createEmployee/${user.departmentId}/${managerId}`)
     }
     function logout() {
       localStorage.setItem("loggedIn", false);
       localStorage.setItem("department", "");
       localStorage.removeItem("user")
       navigate("/");
     }



    return(
        <div className="container mt-4">
            <h1>Hello Employee {user.firstName} {user.lastName}</h1>
            <button onClick={() => click()}>Create Candidate</button>
          <button onClick={() => logout()}>Logout</button>
        </div>
    )
}