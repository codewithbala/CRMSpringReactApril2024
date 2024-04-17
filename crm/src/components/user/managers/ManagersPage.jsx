
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ManagersPage(props){
    const [managerId, setManagerId] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const[employees, setEmployees] = useState([])
    const [link,setLink] = useState("");
    let baseUrl = "http://localhost:8080/api"

    let navigate = useNavigate();


    //get the department prop
    let department = props.department;
    // console.log(user.hr_manager_id)
    let data ;

      function getAllEmployees(){
        axios.get(link).then(response => {
          setEmployees(response.data)
          console.log(response.data)
          console.log(`data${employees}`)
        }).catch(error => {
          console.log(error.message)
        })
      }


    useEffect(() => {
        if(department == "hr"){
          setLink(`${baseUrl}/hr/`)
            setManagerId(user.hr_manager_id);
        }if(department == "training"){
          setLink(`${baseUrl}/training/`)
            setManagerId(user.training_admin_id);
        }
        if(department == "business"){
          setLink(`${baseUrl}/business/`)
            setManagerId(user.business_dev_admin_id);
        }
            getAllEmployees();

        console.log(employees)
    },[managerId, user, link])



    function click (){
         navigate(`/${props.department}/createEmployee/${user.departmentId}/${managerId}`)
      }
      function logout() {
        localStorage.setItem("loggedIn", false);
        localStorage.setItem("department", "");
        localStorage.removeItem("user")
        navigate("/");
      }
    
      return (
        <div className="container mt-4">
          <h1>Hello {user.firstName}</h1>

          <table className="table">
            <thead>
              <tr>
                <th>{department}_employee_id</th>

                <th>birthdate</th>

                <th>DepartmentId</th>
  
                <th>Ed Level</th>

                <th>Hire Date</th>
       
                <th>Position</th>
              
    
                <th>First Name</th>
              
                <th>Last Name</th>
              
        
                <th>Phone Number</th>
        

                <th>Salary</th>
  
     
                <th>Gender</th>
          </tr>
            </thead>
          </table>

          <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.employee_id}</td>
              <td>{employee.birthdate}</td>
              <td>{employee.departmentId}</td>
              <td>{employee.edLevel}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.position}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.salary}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </tbody>

          <button onClick={() => click()}>Create Business Employee</button>
          <button onClick={() => logout()}>Logout</button>
        </div>
      );
}