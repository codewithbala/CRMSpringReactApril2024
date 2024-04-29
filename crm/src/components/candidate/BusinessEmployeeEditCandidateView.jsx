import { useEffect, useState } from "react"
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";



export default function BusinessEmployeeEditCandidateView(){
    const[candidate, setCandidate] = useState([]);
    const[loading, setLoading] = useState(true);
    const[positionTitle, setPositionTitle] = useState("");
    const[vendorName, setVendorName] = useState()
    const[vendorPoc, setVendorPoc] = useState()
    const[endClientName, setEndClientName] = useState()
    const[location, setLocation] = useState()
    const[billName, setBillName] = useState()
    const[submissionStatus, setSubmissionStatus] = useState()
    const[interviewDate, setInterviewDate] = useState()
    const[interviewTime, setInterviewTime] = useState()
    const[interviewResult, setInterviewResult] = useState()
    const[interviewFeedback, setInterviewFeedback] = useState()
    const[projectStartDate, setProjectStartDate] = useState()
    const[projectEndDate, setProjectEndDate] = useState()
    const[remarks, setRemarks] = useState()

    const params = useParams();
    const baseUrl = "http://localhost:8080/api"

    function getCandidate(){
        axios.get(`${baseUrl}/candidates/${params.id}`).then(response => {
            console.log(response.data)
            setCandidate(response.data);
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getCandidate();
    },[])
    


    if(loading){
        return(<h1>Loading...</h1>)
    }else{
        return(
            <div className="container">
                <form className="form">
                    <div className="form-group m-2">
                        <label className="m-1">Position Title</label>
                        <input
                            type="text" className="form-control" value={candidate.poition}  disabled/>
                    </div>
    
                    <div className="form-group m-2">
                        <label className="m-1">Recruiter Name</label>
                        <input
                            type="text" className="form-control"  disabled/>
                    </div>
    
    
                </form>
                
            </div>
        )
    }
}