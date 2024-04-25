import React from "react";
import "../employeeCards/EmployeeCards.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export default function EmployeeCard(props) {
  const navigate = useNavigate();

  function gotToEmployee(id) {
    navigate(`/${props.department}/viewEmployee/${id}`);
  }

  let initials =
    props.firstName.substring(0, 1) + props.lastName.substring(0, 1);
  return (
    <div className="container">
      <div className="card mb">
        <div className="container mx-2">
          <div className="row mt-3">
            <div className="col-2">
              <div className="circle mt-2">
                <p>{initials}</p>
              </div>
            </div>
            <div className="col mx-4 mt-2">
              <p className="bolder">
                {props.firstName} {props.lastName}
                <p className="lighter">Analyst</p>
              </p>
            </div>
          </div>
          <hr style={{ marginRight: "1.2vw" }} />
          <div className="row">
            <div className="col mx-2">
              <IoMdSchool />
            </div>
            <div className="col-8">
              <p>{props.edLevel}</p>
            </div>
          </div>

          <div className="row">
            <div className="col mx-2">
              <MdEmail />
            </div>
            <div className="col-8">
              <p>{props.email}</p>
            </div>
          </div>

          <div className="row">
            <div className="col mx-2">
              <FaAddressCard />
            </div>
            <div className="col-8">
              <p>{props.start}</p>
            </div>
          </div>

          <div className="row">
            <div className="col mx-2">
              <FaMoneyBills />
            </div>
            <div className="col-8">
              <p>{props.pay}</p>
            </div>
          </div>

          <div
            className="btn btn-warning mx-auto card-btn"
            onClick={() => {
              gotToEmployee(props.employeeId);
            }}
          >
            {" "}
            View More
          </div>
        </div>
      </div>
    </div>
  );
}
