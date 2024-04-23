
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeCard from "../employee/employeeCards/EmployeeCards";
import "../managers/ManagersPage.css"

export default function ManagersPage(props){
    const [managerId, setManagerId] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const[employees, setEmployees] = useState([])
    const[employeesUnChanged, setEmployeesUnchanged] = useState([])
    const[employeeId, setEmployeeId] = useState();
    const [search, setSearch] = useState("");
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
          setEmployeesUnchanged(response.data)
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

    function filter (search) {
      console.log(search)
      if(search == ""){
          setEmployees(employeesUnChanged);
      }
      else{
          const filter = employees.filter( candidate => 
              candidate.firstName && candidate.firstName.toLowerCase().includes(search.toLowerCase()) ||
              candidate.lastName && candidate.lastName.toLowerCase().includes(search.toLowerCase()) || 
              candidate.edLevel && candidate.edLevel === (search.toLowerCase()) || 
              candidate.job && candidate.job === (search.toLowerCase()) || 
              candidate.salary && candidate.salary.toLowerCase().includes(search.toLowerCase()) || 
              candidate.sex && candidate.sex.includes(search) 
          )
          setEmployees(filter)
      }
      
      console.log(filter);
   }







    if(loading == false){
        return(<p>Waiting on information</p>)
    }else{
        return (
          <div className="container mt-4">
            <h1>Hello {`${user.firstName} ${user.lastName}`}</h1>

            <h3 className="mt-4">List of Employees</h3>

            <form >
                    <div className="row">
                        <div className="col-5">
                            <input type="text" className="form-control"  placeholder="Search" onChange={(e) => setSearch(e.target.value)} name="search"/>
                             <div onClick={(e) => filter(search)} className="btn btn-primary mt-2">Submit</div>
                        </div>
                    </div>
                    
            </form>
          
            <div className="employeeCardManager mt-3">
              {employees.map((employee, index) => {
                return(
                  <div className="">
                    <EmployeeCard employeeId={department == "hr"? employee.hr_employee_id: department == "business" ? employee.business_dev_employee_id : department == "training" ? tarining_employee_id : "" } firstName={`${employee.firstName}`} lastName={employee.lastName} edLevel={employee.edLevel} email={employee.emailId} start={employee.hireDate} pay={employee.salary} department={props.department}/>
                  </div>
                )
              })}
            </div>


          </div>
        );
    }
    
      
}