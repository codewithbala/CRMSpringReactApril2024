import { useEffect, useState } from "react";
import GetAllCandidates from "../../../candidate/GetAllCandidates"
import { Link, useParams, useNavigate } from "react-router-dom";


export default function HREmployee(props){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const navigate = useNavigate();

    let managerId = props.managerId;
    useEffect(() => {
            console.log(`this is`+managerId);
    },[])
    


    function click (){
        navigate(`/${props.department}/createEmployee/${user.departmentId}/${managerId}`)
        navigate("/candidates/create-candidate/")
     }

    return(
        <div>
            <GetAllCandidates/>
            
        </div>
    )
}