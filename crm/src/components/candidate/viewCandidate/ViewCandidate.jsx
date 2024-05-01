import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import image from  "../../../assets/blank-profile-picture.svg"
import "../viewCandidate/ViewCandidate.css"

export default function ViewCandidate(){
    const [candidate, setCandidate] = useState();
    const [loading, setLoading] = useState(true);
    const baseUrl = `http://localhost:8080/api`
    const params = useParams();

    console.log(params)

    function getCandidateById(){
        axios.get(`${baseUrl}/candidates/${params.id}`).then(response => {
            setCandidate(response.data);
            setLoading(false)
        })
    }
console.log(candidate)
    useEffect(() => {
        console.log(candidate)
        getCandidateById();
        
    },[])


    if(loading){
        <p>Loading</p>
    }else{
        return(
        <div>
            <div className="row mt-5 container">
                <div className="col">
                    <img className="candidate-photo" src={image}></img>
    
                    <div className="mx-4">
                        <div>
                            <h4 className="mt-4 underlined">Candidate Details</h4>
                                <h5 className="mt-3">First Name</h5>
                                <p>{candidate.firstName}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Last Name</h5>
                                <p>{candidate.lastName}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Email Address</h5>
                                <p>{candidate.emailId}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Phone Number</h5>
                                <p>{candidate.phoneNumber}</p>
                        </div>
                
                        <div>
                            <h4 className="mt-4"></h4>
                                <h5>Skillset</h5>
                                <p>{candidate.skillSet}</p>
                        </div>
                        
                    </div>
    
                </div>


                <div className="col">
                        
                    <div className="mx-4">
                            <div>
                                <h4 className="mt-5 underlined">Candidate Profile</h4>
                                    <h5 className="mt-3">Recruiter Name</h5>
                                    <p>{candidate.recruiterName}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Candidate Batch Number</h5>
                                    <p>{candidate.batchNo}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Canididate Entry</h5>
                                    <p>{candidate.candidateEntry}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Candidate Status</h5>
                                    <p>{candidate.candidateStatus}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Recruiter Remarks</h5>
                                    <p>{candidate.recruiterRemarks}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Resume</h5>
                                    <p>{candidate.resume}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>OPT Start Date</h5>
                                    <p>{candidate.optstartDate}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>OPT End Date</h5>
                                    <p>{candidate.optendDate}</p>
                            </div>

                            
                    </div>
                    
                </div>
                <div className="col">
                <div className="mx-4">
                            <div>
                                <h4 className="mt-5 underlined">More Candidate Details</h4>
                                    <h5 className="mt-3">Country</h5>
                                    <p>{candidate.country}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>State</h5>
                                    <p>{candidate.state}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>College</h5>
                                    <p>{candidate.college}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Candidate Experience</h5>
                                    <p>{candidate.experience}</p>
                            </div>
                    
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Candidate Country</h5>
                                    <p>{candidate.country}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Visa Status</h5>
                                    <p>{candidate.visaStatus}</p>
                            </div>
                            
                    </div>

                </div>
    
            </div>

            <div className="mx-3 row">
                <h2 className="mt-4 mx-auto underlined">Business Development Information</h2>
                <div className="col">
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Vendor Name</h5>
                                    <p>{candidate.vendorName}</p>
                            </div>
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>VendorPoc</h5>
                                    <p>{candidate.vendorPoc}</p>
                            </div>
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>End Client Name </h5>
                                    <p>{candidate.endClientName}</p>
                            </div>
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>location</h5>
                                    <p>{candidate.location}</p>
                            </div>

                </div>

                <div className="col">

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Bill Rate</h5>
                                    <p>{candidate.billRate}</p>
                            </div>
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>submission Status</h5>
                                    <p>{candidate.submissionStatus}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Interview Date</h5>
                                    <p>{candidate.interviewDate}</p>
                            </div>
                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Interview Time</h5>
                                    <p>{candidate.interviewTime}</p>
                            </div>

                </div>
                <div className="col">


                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Interview Result</h5>
                                    <p>{candidate.interviewResult}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Interview Feedback</h5>
                                    <p>{candidate.interviewFeedback}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Project Start Date</h5>
                                    <p>{candidate.projectStartDate}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Vendor Tier</h5>
                                    <p>{candidate.vendorTier}</p>
                            </div>
                </div>
                <div className="col">


                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Vender SPOC</h5>
                                    <p>{candidate.vendorSPOC}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Vendor Email</h5>
                                    <p>{candidate.vendorEmail}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Vendor Contact Number</h5>
                                    <p>{candidate.vendorContactNo}</p>
                            </div>

                            <div>
                                <h4 className="mt-4"></h4>
                                    <h5>Vendor Location</h5>
                                    <p>{candidate.vendorLocation}</p>
                            </div>

                </div>


            </div>
        </div>

            
        )
    }
    
}