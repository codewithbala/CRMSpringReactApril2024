
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeCard from "../employee/employeeCards/EmployeeCards";
import "../managers/ManagersPage.css"

export default function ManagersPage(props){
    const [managerId, setManagerId] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const[employees, setEmployees] = useState([])
    const[loading, setLoading] = useState(false);
    const [link,setLink] = useState("");
    let baseUrl = "http://localhost:8080/api"

    let navigate = useNavigate();


    //get the department prop
    let department = props.department;
    // console.log(user.hr_manager_id)
    let data ;


      const getEmply = () => {



        axios.get(`http://localhost:8080/api/${department}/`).then((response) => {
          console.log(response.data)
          setEmployees(response.data)
          setLoading(true)
        }).catch(errors => {
          console.log(errors.message)
        })
      }

      useEffect(() => {
        getEmply();
      },[])
   

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
    },[managerId, user])
    console.log(link)


    function click (){
         navigate(`/${props.department}/createEmployee/${user.departmentId}/${managerId}`)
      }
      function logout() {
        localStorage.setItem("loggedIn", false);
        localStorage.setItem("department", "");
        localStorage.removeItem("user")
        navigate("/");
      }




      if(loading == false){
        return(<p>Waiting on information</p>)
      }else{
        return (
          <div className="container mt-4">
            <h1>Hello {`${user.firstName} ${user.lastName}`}</h1>

            <h3 className="mt-4">List of Employees</h3>
            {/* <table className="table">
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
              <tbody>        
              {employees.map((employee, index) => {
                    return (
                        <tr key={index}>
                            <td>{department == "hr" ? employee.hr_employee_id: department == "business"? employee.business_dev_employee_id: employee.training_employee_id }</td>
                            <td>{employee.birthdate}</td>
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
                    );
                })}
          </tbody>
            </table> */}
            <div className="employeeCardManager">
              {employees.map((employee, index) => {
                return(
                  <div className="">
                    <EmployeeCard name={`${employee.firstName} ${employee.lastName}`} edLevel={employee.edLevel} email={employee.emailId} start={employee.hireDate} pay={employee.salary}/>
                  </div>
                )
              })}
            </div>


          </div>
        );
      }
    
      
}