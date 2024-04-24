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
                candidate.optendDate && candidate.optendDatetoLowerCase().includes(search) ||
                candidate.optstartDate && candidate.optstartDatetoLowerCase().includes(search) ||
                candidate.otherSkills && candidate.otherSkillstoLowerCase().includes(search) ||
                candidate.otherSource && candidate.otherSourcetoLowerCase().includes(search) ||
                candidate.phoneNumber && candidate.phoneNumbertoLowerCase().includes(search) ||
                candidate.recruiterName && candidate.recruiterNametoLowerCase().includes(search) ||
                candidate.recruiterRemarks && candidate.recruiterRemarkstoLowerCase().includes(search) ||
                candidate.source && candidate.sourcetoLowerCase().includes(search) ||
                candidate.ssn && candidate.ssntoLowerCase().includes(search) ||
                candidate.visaStatus && candidate.visaStatustoLowerCase().includes(search)
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
                               </tr>
                               
                               </>
                            )
                            
                        })}
                        
                    </tbody>
                </table>
    
            </div>
        )
    
}