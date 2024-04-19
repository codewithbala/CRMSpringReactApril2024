

import React from "react";
import "../employeeCards/EmployeeCards.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";

export default function EmployeeCard(props){

    return(
        <div className="container">
            <div className="card">
                <div className="container mx-2">
                    <div className="row mt-3">
                        
                        <div className="col-2">
                            <div className="circle mt-2"><p>JG</p></div>
                        </div>
                        <div className="col mx-4 mt-2">
                        <p className="bolder">{props.name}
                            <p className="lighter">Analyst</p>  
                        </p>
                        </div>

                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col"><IoMdSchool /></div>
                        <div className="col-8"><p>{props.edLevel}</p></div>
                    </div>

                    <div className="row">
                        <div className="col"><MdEmail /></div>
                        <div className="col-8"><p>{props.email}</p></div>
                    </div>

                    <div className="row">
                        <div className="col"><FaAddressCard /></div>
                        <div className="col-8"><p>{props.start}</p></div>
                    </div>

                    <div className="row">
                        <div className="col"><FaMoneyBills /></div>
                        <div className="col-8"><p>{props.pay}</p></div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}