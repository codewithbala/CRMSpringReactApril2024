import axios from "axios"
import { Fragment, React, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import "../hr-employee/GetAllCandidates.css"

export default function GetAllCandidates(){
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();

    const getCandidates = () => {
        axios.get(`http://localhost:8080/api/candidates/`).then((response) => {
            console.log(response.data)
            setCandidates(response.data)
            setLoading(false)
          }).catch(errors => {
            console.log(errors.message)
        })
    }

    useEffect(() => {
        getCandidates();
      },[])
    
      function navigateToCandidate(id) {
        navigate(`/candidates/view-candidate/${id}`)
      }

    return(
        <div className="container">
            <table className="table text-center">
                <tr>
                    <th>Candidate Id</th>
                    <th>Batch Number</th>


                    

                    <th>First Name</th>
                    <th>last Name</th>
                    <th>Middle Name</th>
                    <th>Phone Number</th>

                    <th>Skill Set</th>
                    <th>asd</th>


                </tr>
               <tbody>
                    {candidates.map((candidate, key) => {
                        return (
                            <>
                            <tr key={key} scope="row" className="">
                                <td>{candidate.id}</td>
                                <td>{candidate.batchNo}</td>
                                
                                <td>{candidate.firstName}</td>
                                <td>{candidate.lastName}</td>
                                <td>{candidate.middleName}</td>
                                <td>{candidate.phoneNumber}</td>
                                <td>{candidate.skillSet}</td>
                                <button className="btn btn-primary" onClick={() => navigateToCandidate(candidate.id)}>View Candidate</button>
                           </tr>
                           
                           </>
                        )
                        
                    })}
                    
                </tbody>
            </table>

        </div>
    )
}