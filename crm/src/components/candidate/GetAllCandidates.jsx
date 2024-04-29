import axios from "axios"
import { Fragment, React, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import "../hr-employee/GetAllCandidates.css"

export default function GetAllCandidates(){
    const [candidates, setCandidates] = useState([]);
    const [filteredCandidates, setFilteredCandidates] = useState(candidates);
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();
    const [search, setSearch] = useState("");
    const department = localStorage.getItem("department")

    const getCandidates = () => {
        axios.get(`http://localhost:8080/api/candidates/`).then((response) => {
            console.log(response.data)
            setCandidates(response.data)
            setFilteredCandidates(response.data)
            setLoading(false)
          }).catch(errors => {
            console.log(errors.message)
        })
    }

    const trainerUpdateCandidate = (id) => {
        navigate(`/trainer/updateCandidate/${id}`)
    }
    const businessEmployeeUpdateCandidate = (id) => {
        navigate(`/business/updateCandidate/${id}`)
    }

    function filter (search) {
        console.log(search)
        if(search == ""){
            setCandidates(filteredCandidates);
        }
        else{
            const filter = candidates.filter( candidate => 
                candidate.firstName && candidate.firstName.toLowerCase().includes(search.toLowerCase()) ||
                candidate.lastName && candidate.lastName.toLowerCase().includes(search.toLowerCase()) || 
                candidate.id && candidate.id === (search.toLowerCase()) || 
                candidate.batchNo && candidate.batchNo === (search.toLowerCase()) || 
                candidate.middleName && candidate.middleName.toLowerCase().includes(search.toLowerCase()) || 
                candidate.phoneNumber && candidate.phoneNumber.includes(search) || 
                candidate.candidateEntry && candidate.candidateEntry === (search) || 
                candidate.candidateStatus && candidate.candidateStatus.toLowerCase().includes(search.toLowerCase()) ||
                candidate.city && candidate.city.toLowerCase().includes(search.toLowerCase()) ||
                candidate.college && candidate.college.toLowerCase().includes(search.toLowerCase()) ||
                candidate.communicationSkills && candidate.communicationSkills === (search.toLowerCase()) ||
                candidate.country && candidate.country.toLowerCase().includes(search.toLowerCase()) ||  
                candidate.emailId && candidate.emailId.toLowerCase().includes(search.toLowerCase()) ||
                candidate.experience && candidate.experience.toLowerCase().includes(search.toLowerCase()) ||
                candidate.skillSet && candidate.skillSet.toLowerCase().includes(search.toLowerCase()) ||
                candidate.optendDate && candidate.optendDate.toLowerCase().includes(search.toLowerCase()) ||
                candidate.optstartDate && candidate.optstartDate.toLowerCase().includes(search.toLowerCase()) ||
                candidate.otherSkills && candidate.otherSkills.toLowerCase().includes(search.toLowerCase()) ||
                candidate.otherSource && candidate.otherSource.toLowerCase().includes(search.toLowerCase()) ||
                candidate.phoneNumber && candidate.phoneNumber.toLowerCase().includes(search.toLowerCase()) ||
                candidate.recruiterName && candidate.recruiterName.toLowerCase().includes(search.toLowerCase()) ||
                candidate.recruiterRemarks && candidate.recruiterRemarks.toLowerCase().includes(search.toLowerCase()) ||
                candidate.source && candidate.source.toLowerCase().includes(search.toLowerCase()) ||
                candidate.ssn && candidate.ssn.toLowerCase().includes(search.toLowerCase()) ||
                candidate.visaStatus && candidate.visaStatus.toLowerCase().includes(search.toLowerCase())
            )
            setCandidates(filter)
        }
        
        console.log(filter);
    }

    useEffect(() => {
        getCandidates();
      },[])
    
      function navigateToCandidate(id) {
        navigate(`/candidates/view-candidate/${id}`)
      }

      
        return(
            <div className="container mt-5">
                <form >
                    <div className="row">
                        <div className="col-5">
                            <input type="text" className="form-control"  placeholder="Search" onChange={(e) => setSearch(e.target.value)} name="search"/>
                             <div onClick={(e) => filter(search)} className="btn btn-primary mt-2">Submit</div>
                        </div>
                    </div>
                    
                </form>
    
                <table className="table text-center mt-3">
                    <thead>
                    <tr>
                        <th>Candidate Id</th>
                        <th>Batch Number</th>
    
    
                        
    
                        <th>First Name</th>
                        <th>last Name</th>
                        <th>Middle Name</th>
                        <th>Phone Number</th>
    
                        <th>Skill Set</th>
                        <th></th>
    
    
                    </tr>
                    </thead>
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
                                    <td><button className="btn btn-primary" onClick={() => navigateToCandidate(candidate.id)}>View Candidate</button></td>
                                    <td>{department == "training-employee" ? <button onClick={() => trainerUpdateCandidate(candidate.id)} className="btn btn-secondary">Update Candidate</button>: department == "business-employee" ? <button onClick={() => businessEmployeeUpdateCandidate(candidate.id)} className="btn btn-secondary">Update Candidate</button> :
                                     <></>}</td>
                               </tr>
                               
                               </>
                            )
                            
                        })}
                        
                    </tbody>
                </table>
    
            </div>
        )
    
}