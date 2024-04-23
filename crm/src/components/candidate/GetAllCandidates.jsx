import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import "../hr-employee/GetAllCandidates.css"

export default function GetAllCandidates(){
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true)

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
    

    return(
        <div className="container">
            <table className="table table-responsive small text-center">
                <tr>
                    <th>Candidate<br/>Id</th>
                    <th>Batch <br/>Number</th>
                    <th>Candidate <br/>Entry</th>
                    <th>Candidate<br/> Status</th>
                    <th>City<br/>a</th>
                    <th>Communication<br/>Skills</th>
                    <th>Country</th>
                    <th>Email<br/>Address</th>
                    <th>Experience</th>
                    <th>First<br/>Name</th>
                    <th>last<br/>Name</th>
                    <th>Middle Name</th>
                    <th>Phone Number</th>
                    <th>Recruiter Name</th>
                    <th>Recruiter Remarks</th>
                    <th>Skill Set</th>
                    <th>State</th>
                    <th>Visa Status</th>
                    <th>OPTStart Date</th>
                    <th>OPT End Date</th>

                </tr>
                <tr>
                    {candidates.map((candidate) => {
                        return (
                            <>
                            <td>{candidate.id}</td>
                            <td>{candidate.batchNo}</td>
                            <td>{candidate.candidate_entry}</td>
                            <td>{candidate.candidateStatus}</td>
                            <td>{candidate.city}</td>
                            <td>{candidate.communicationSkills}</td>
                            <td>{candidate.country}</td>
                            <td>{candidate.emailId}</td>
                            <td>{candidate.experience}</td>
                            <td>{candidate.firstName}</td>
                            <td>{candidate.lastName}</td>
                            <td>{candidate.middleName}</td>
                            <td>{candidate.phoneNumber}</td>
                            <td>{candidate.recruiterName}</td>
                            <td>{candidate.recruiterRemarks}</td>
                            <td>{candidate.skillSet}</td>
                            <td>{candidate.state}</td>
                            <td>{candidate.visaStatus}</td>
                            <td>{candidate.optstartDate}</td>
                            <td>{candidate.optend_date}</td>
                            </>
                        )
                    })}
                </tr>
            </table>

        </div>
    )
}