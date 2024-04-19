import { useState, useEffect, cloneElement } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCandidate = (props) => {
  // State variables
  const [skillSet, setSkillSet] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [candidateStatus, setCandidateStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [visaStatus, setVisaStatus] = useState("");
  const [OPTStartDate, setOPTStartDate] = useState("");
  const [OPTEndDate, setOPTEndDate] = useState("");
  const [showOtherSkillSet, setShowOtherSkillSet] = useState(false);
  const [visaDates, setVisaDates] = useState(false);
  const [SSN, setSSN] = useState("");
  const [source, setSource] = useState("");
  const [communicationSkill, setCommunicationSkill] = useState("");
  const [resume, setResume] = useState([]);
  const [recruiterRemarks, setRecruiterRemarks] = useState("");
  const [otherSource, setOtherSource] = useState("");
  const [referenceName, setReferenceName] = useState("");
  const [otherSkills, setOtherSkills] = useState("");

  const [batchNumberVariables, setBatchNumberVariables] = useState([]);
  // Non-state variables
  let params = useParams();
  let navigate = useNavigate();
  const skills = ["Java", ".Net", "SQL", "Python", "AI/ML", "Spring MVC", "Backend Java Stack"];
  let candidateStatusOption = ["Tech Screened", "Training", "On Bench", "Placed","Redeployed", "Passive", "No To Be Contacted"];
  const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  let statesOfUS = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  let webSources = ["Moster", "LinkedIn", "Indeed", "Dice", "Career Builder"];

  const communicationSkillsOptions = [1,2,3,4,5,6,7,8,9,10];

  const batchNumberOption = () => {
    for(let i = 0; i<101; i++){
        setBatchNumberVariables(batchNumberVariables => [...batchNumberVariables, i]);
    }
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    console.log("User is FROM USEEFFECT HOOK - " + typeof user);
    batchNumberOption();
  }, []);

  const showVisaDateCalendars = () => {
    return (
      <>
        <div className="form-group m-2">
          <label className="m-1">OPT Start Date</label>
          <input
            type="date"
            className="form-control"
            name="OPTStartDate"
            id="OPTStartDate"
            onChange={(e) => setOPTStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1">OPT End Date</label>
          <input
            type="date"
            className="form-control"
            name="OPTEndDate"
            id="OPTEndDate"
            onChange={(e) => setOPTEndDate(e.target.value)}
            required
          />
        </div>
      </>
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const baseUrl = "http://localhost:8080/api/candidates/create-candidate";
   
    let requestBody = {
      "recruiterName": `${user.firstName} ${user.lastName}`,
      "skillSet": skillSet,
      "batchNo": batchNo,
      "candidateStatus": candidateStatus,
      "firstName": firstName,
      "middleName": middleName,
      "lastName": lastName,
      "emailId": emailId,
      "phoneNumber": phoneNumber,
      "college": college,
      "country": country,
      "state": state,
      "city": city,
      "experience": experience,
      "visaStatus": visaStatus,
      "OPTStartDate": OPTStartDate,
      "OPTEndDate": OPTEndDate,
      "SSN": SSN,
      "communicationSkill": communicationSkill,
      "resume": "",
      "recruiterRemarks": recruiterRemarks,
      "otherSource": otherSource,
      "referenceName": referenceName,
    };

    /* Start of function */
    function isCyclic(obj) {
      var seenObjects = [];

      function detect(obj) {
        if (obj && typeof obj === "object") {
          if (seenObjects.indexOf(obj) !== -1) {
            return true;
          }
          seenObjects.push(obj);
          for (var key in obj) {
            if (obj.hasOwnProperty(key) && detect(obj[key])) {
              console.log(obj, "cycle at " + key);
              return true;
            }
          }
        }
        return false;
      }

      return detect(obj);
    }

    console.log(isCyclic(requestBody));
    /* End */

    console.log("req body: " + requestBody);

    // axios post function
    axios.post(`http://localhost:8080/api/candidates/create-candidate`, requestBody).then(() => {
      navigate(`/business-manager-page`)
    }).catch((error) => {
      console.log(error)
    })
  }

  //start of return function
  return (
    <div className="container">
      <h1 className="display-4 m-2">Create New Candidate</h1>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group m-2">
          <label className="m-1">Recruiter Name</label>
          <input
            type="text"
            className="form-control"
            id="recruiterName"
            name="recruiterName"
            value={`${user.firstName} ${user.lastName}`}
            required
          />
        </div>
        <div className="form-group m-2">
          <label className="m-1">Candidate Entry Number</label>
          <input
            type="text"
            className="form-control"
            id="candidateEntry"
            name="candidateEntry"
            value="1234"
            required
          />
        </div>

        <div className="form-group m-2">
          <label className="m-1">Skill Set</label>
          <select
            className="form-select form-control"
            multiple
            name="skillSet"
            id="skillSet"
            onChange={(e) => setSkillSet(e.target.value)}
          >
            {skills.map((skill, key) => {
              return(
                <option key={key} value={skill}>{skill}</option> 
              )
            })}
          </select>
        </div>

        {/* show/hide field based on other response */}
        {/* <div className={showOtherSkillSet ? "form-group m-2" : ""}>
          {showOtherSkillSet ? showOtherSkillField() : ""}
        </div> */}

         <div className="form-group m-2">
          <label className="m-1">Batch Number</label>
          <select
            className="form-select form-control"
            id="batchNo"
            name="batchNo"
            onChange={(e) => setBatchNo(e.target.value)}
            required
          >
            <option>---</option>
            {batchNumberVariables.map((batchnumber, index) => {
              return(
                <option key={index} value={batchnumber}>{batchnumber}</option>
              )
            })}
          </select>
        </div> 


         <div className="form-group m-2">
          <label className="m-1">Candidate Status</label>
          <select
            className="form-select form-control"
            name="candidateStatus"
            id="candidateStatus"
            onChange={(e) => setCandidateStatus(e.target.value)}
          >
               <option>---</option>
              {candidateStatusOption.map((candidateStatus, key) => {
                return(
                  <option key={key} value={candidateStatus}>{candidateStatus}</option>
                )
              })}
          </select>
        </div> 


         <div className="form-group m-2">
          <label className="m-1">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div> 


         <div className="form-group m-2">
          <label className="m-1">Middle Name</label>
          <input
            type="text"
            className="form-control"
            id="middleName"
            name="middleName"
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div> 


         <div className="form-group m-2">
          <label className="m-1">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div> 


         <div className="form-group m-2">
          <label className="m-1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            name="emailId"
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
        </div>
 

         <div className="form-group m-2">
          <label className="m-1">Telephone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div> 


         <div className="form-group m-2">
          <label className="m-1">College/University/Vocational School</label>
          <input
            type="text"
            className="form-control"
            id="college"
            name="college"
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div> 

         <div className="form-group m-2">
          <label className="m-1">Country</label>
          <select
            className="form-select form-control"
            name="country"
            id="country"
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option>---</option>
            {country_list.map((country, key) => {
              return(
                <option key={key} value={country}>{country}</option>
              )
            })}
            
          </select>
        </div> 

         <div className="form-group m-2">
          <label className="m-1">State</label>
          <select
            className="form-select form-control"
            name="state"
            id="state"
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option>---</option>
            {statesOfUS.map((states, key) => {
              return(
                <option value={states} key={key}>{states}</option>
              )
            })}
            <option value="Not in US/Other">Not in US/Other</option>
          </select>
        </div> 
        
         <div className="form-group m-2">
          <label className="m-1">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </div> 

         <div className="form-group m-2">
          <label className="m-1">Experience</label>
          <input
            type="text"
            className="form-control"
            id="experience"
            name="experience"
            onChange={(e) => setExperience(e.target.value)}
          />
        </div> 

         <div className="form-group m-2">
          <label className="m-1">Visa Status</label>
          <select
            className="form-select form-control"
            value={visaStatus}
            name="visaStatus"
            id="visaStatus"
            onChange={(e) => setVisaStatus(e.target.value)}
          >
            <option>Choose A Visa Status</option>
            <option value="OPT EAD">OPT EAD</option>
            <option value="CPT">CPT</option>
            <option value="GC EAD">GC EAD</option>
            <option value="GC Holder">GC Holder</option>
            <option value="US Citizen">US Citizen</option>
            <option value="TN">TN</option>
          </select>
        </div> 

        {visaStatus === "OPT EAD" || visaStatus === "CPT"
          ? showVisaDateCalendars()
          : ""}

         <div className="form-group m-2">
          <label className="m-1">Social Security Number</label>
          <input
            type="password"
            className="form-control"
            name="SSN"
            id="SSN"
            onChange={(e) => setSSN(e.target.value)}
          />
        </div> 

         <div className="form-group m-2">
          <label className="m-1">Source</label>
          <select
            className="form-select form-control"
            onChange={(e) => setSource(e.target.value)}
          >
            <option >Select Source</option>
            {webSources.map((sources, key) => {
              return(
                  <option value={sources} key={key}>{sources}</option>
              )
            })}

          </select>
        </div> 

        {/* {source === "Other" ? showOtherSourceField() : ""}
        {source === "Reference" ? specifyReference() : ""} */}


         <div className="form-group m-2">
          <label className="m-1">Communication Skills</label>
          <select
            className="form-select form-control"
            name="communicationSkill"
            id="communicationSkill"
            onChange={(e) => setCommunicationSkill(e.target.value)}
          >
            <option value="1">Choose Communication Skill Strength</option>
            {communicationSkillsOptions.map((communicationSkills, key) => {
              return(
              <option value={communicationSkills} key={key}>{communicationSkills}</option>
              )
            })}
          </select>
        </div> 
        
          {/* no built in functionality to store file in the server */}
         <div className="form-group m-2">
          <label className="m-1">Resume Attachment</label>
          <input
            type="file"
            className="form-control"
            name="resume"
            id="resume"
            onChange={(e) => {
              const [file] = e.target.files;
              setResume(...resume, file);
            }}
          />
        </div> 

         <div className="form-group m-2">
          <label className="m-1">Recruiter's Remarks</label>
          <textarea
            className="form-control"
            name="recruiterRemarks"
            id="recruiterRemarks"
            onChange={(e) => setRecruiterRemarks(e.target.value)}
          ></textarea>
        </div> 

        
          <button type="submit" className="btn btn-primary m-2">
            Create Candidate
          </button>

          <button type="reset" className="btn btn-danger m-2">
            Reset Form
          </button>

      </form>
    </div>
  );
};

export default CreateCandidate;
