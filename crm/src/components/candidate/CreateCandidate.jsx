import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCandidate = () => {
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
  // Non-state variables
  let params = useParams();
  let navigate = useNavigate();

  // Toggle other skills input if selected
  const showOtherSkillField = () => {
    console.log("Value of source is: " + source);
    return (
      <>
        <label className="m-1">Specify Other Skill Set(s)</label>
        <input
          type="text"
          className="form-control"
          id="skillSet"
          name="skillSet"
          onChange={(e) => setOtherSkills(e.target.value)}
          required
        />
      </>
    );
  };

  const showOtherSourceField = () => {
    return (
      <div className="form-group m-2">
        <label className="m-1">Specify Other Source</label>
        <input
          type="text"
          maxLength={50}
          className="form-control"
          id="source"
          name="source"
          onChange={(e) => setOtherSource(e.target.value)}
          required
        />
      </div>
    );
  };

  const specifyReference = () => {
    return (
      <div className="form-group m-2">
        <label className="m-1">Specify Reference</label>
        <input
          type="text"
          className="form-control"
          id="source"
          name="source"
          onChange={(e) => setReferenceName(e.target.value)}
          required
        />
      </div>
    );
  };

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

    const baseUrl = "http://localhost:8080/api/training";

    let responseBody = {
      id: params.id,
      recruiterName: recruiterName,
      candidateEntry: candidateEntry,
      skillSet: skillSet,
      batchNo: batchNo,
      candidateStatus: candidateStatus,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      emailId: emailId,
      phoneNumber: phoneNumber,
      college: college,
      country: country,
      state: state,
      city: city,
      experience: experience,
      visaStatus: visaStatus,
      OPTStartDate: OPTStartDate,
      OPTEndDate: OPTEndDate,
      SSN: SSN,
      communicationSkill: communicationSkill,
      resume: resume,
      recruiterRemarks: recruiterRemarks,
      otherSource: otherSource,
      referenceName: referenceName,
    };

    console.log(responseBody);
  };

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
            value={params.recruiterName}
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
            value={params.candidateEntry}
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
            <option value="Java">Java</option>
            <option value=".NET">.NET</option>
            <option value="SQL">SQL</option>
            <option value="Python">Python</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Spring MVC">Spring MVC</option>
            <option value="Backend Java Stack">Backend Java Stack</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option
              value="Other"
              onClick={() => {
                setShowOtherSkillSet(!showOtherSkillSet);
              }}
            >
              Other
            </option>
          </select>
        </div>
        {/* show/hide field based on other response */}
        <div className={showOtherSkillSet ? "form-group m-2" : ""}>
          {showOtherSkillSet ? showOtherSkillField() : ""}
        </div>
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
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
            <option value="60">60</option>
            <option value="61">61</option>
            <option value="62">62</option>
            <option value="63">63</option>
            <option value="64">64</option>
            <option value="65">65</option>
            <option value="66">66</option>
            <option value="67">67</option>
            <option value="68">68</option>
            <option value="69">69</option>
            <option value="70">70</option>
            <option value="71">71</option>
            <option value="72">72</option>
            <option value="73">73</option>
            <option value="74">74</option>
            <option value="75">75</option>
            <option value="76">76</option>
            <option value="77">77</option>
            <option value="78">78</option>
            <option value="79">79</option>
            <option value="80">80</option>
            <option value="81">81</option>
            <option value="82">82</option>
            <option value="83">83</option>
            <option value="84">84</option>
            <option value="85">85</option>
            <option value="86">86</option>
            <option value="87">87</option>
            <option value="88">88</option>
            <option value="89">89</option>
            <option value="90">90</option>
            <option value="91">91</option>
            <option value="92">92</option>
            <option value="93">93</option>
            <option value="94">94</option>
            <option value="95">95</option>
            <option value="96">96</option>
            <option value="97">97</option>
            <option value="98">98</option>
            <option value="99">99</option>
            <option value="100">100</option>
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
            <option value="Tech Screened">Tech Screened</option>
            <option value="In Training">In Training</option>
            <option value="On Bench">On Bench</option>
            <option value="Placed">Placed</option>
            <option value="Redeployed">Redeployed</option>
            <option value="Passive">Passive</option>
            <option value="Not to be contacted">Not to be contacted</option>
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
            <option value="US">United States</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">�land Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia, Plurinational State of</option>
            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BV">Bouvet Island</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="BN">Brunei Darussalam</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, the Democratic Republic of the</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">C�te d'Ivoire</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CW">Cura�ao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard Island and McDonald Islands</option>
            <option value="VA">Holy See (Vatican City State)</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran, Islamic Republic of</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KP">Korea, Democratic People's Republic of</option>
            <option value="KR">Korea, Republic of</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Lao People's Democratic Republic</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MK">
              Macedonia, the former Yugoslav Republic of
            </option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia, Federated States of</option>
            <option value="MD">Moldova, Republic of</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestinian Territory, Occupied</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RE">R�union</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="RW">Rwanda</option>
            <option value="BL">Saint Barth�lemy</option>
            <option value="SH">
              Saint Helena, Ascension and Tristan da Cunha
            </option>
            <option value="KN">Saint Kitts and Nevis</option>
            <option value="LC">Saint Lucia</option>
            <option value="MF">Saint Martin (French part)</option>
            <option value="PM">Saint Pierre and Miquelon</option>
            <option value="VC">Saint Vincent and the Grenadines</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome and Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SX">Sint Maarten (Dutch part)</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="GS">
              South Georgia and the South Sandwich Islands
            </option>
            <option value="SS">South Sudan</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="SD">Sudan</option>
            <option value="SR">Suriname</option>
            <option value="SJ">Svalbard and Jan Mayen</option>
            <option value="SZ">Swaziland</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SY">Syrian Arab Republic</option>
            <option value="TW">Taiwan, Province of China</option>
            <option value="TJ">Tajikistan</option>
            <option value="TZ">Tanzania, United Republic of</option>
            <option value="TH">Thailand</option>
            <option value="TL">Timor-Leste</option>
            <option value="TG">Togo</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TC">Turks and Caicos Islands</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>

            <option value="UM">United States Minor Outlying Islands</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela, Bolivarian Republic of</option>
            <option value="VN">Viet Nam</option>
            <option value="VG">Virgin Islands, British</option>
            <option value="VI">Virgin Islands, U.S.</option>
            <option value="WF">Wallis and Futuna</option>
            <option value="EH">Western Sahara</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
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
            <option value="AL">Alabama (AL)</option>
            <option value="AK">Alaska (AK)</option>
            <option value="AZ">Arizona (AZ)</option>
            <option value="AR">Arkansas (AR)</option>
            <option value="CA">California (CA)</option>
            <option value="CO">Colorado (CO)</option>
            <option value="CT">Connecticut (CT)</option>
            <option value="DE">Delaware (DE)</option>
            <option value="DC">District Of Columbia (DC)</option>
            <option value="FL">Florida (FL)</option>
            <option value="GA">Georgia (GA)</option>
            <option value="HI">Hawaii (HI)</option>
            <option value="ID">Idaho (ID)</option>
            <option value="IL">Illinois (IL)</option>
            <option value="IN">Indiana (IN)</option>
            <option value="IA">Iowa (IA)</option>
            <option value="KS">Kansas (KS)</option>
            <option value="KY">Kentucky (KY)</option>
            <option value="LA">Louisiana (LA)</option>
            <option value="ME">Maine (ME)</option>
            <option value="MD">Maryland (MD)</option>
            <option value="MA">Massachusetts (MA)</option>
            <option value="MI">Michigan (MI)</option>
            <option value="MN">Minnesota (MN)</option>
            <option value="MS">Mississippi (MS)</option>
            <option value="MO">Missouri (MO)</option>
            <option value="MT">Montana (MT)</option>
            <option value="NE">Nebraska (NE)</option>
            <option value="NV">Nevada (NV)</option>
            <option value="NH">New Hampshire (NH)</option>
            <option value="NJ">New Jersey (NJ)</option>
            <option value="NM">New Mexico (NM)</option>
            <option value="NY">New York (NY)</option>
            <option value="NC">North Carolina (NC)</option>
            <option value="ND">North Dakota (ND)</option>
            <option value="OH">Ohio (OH)</option>
            <option value="OK">Oklahoma (OK)</option>
            <option value="OR">Oregon (OR)</option>
            <option value="PA">Pennsylvania (PA)</option>
            <option value="RI">Rhode Island (RI)</option>
            <option value="SC">South Carolina (SC)</option>
            <option value="SD">South Dakota (SD)</option>
            <option value="TN">Tennessee (TN)</option>
            <option value="TX">Texas (TX)</option>
            <option value="UT">Utah (UT)</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
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
            <option value="Monster">Monster</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Indeed">Indeed</option>
            <option value="Dice">Dice</option>
            <option value="CareerBuilder">CareerBuilder</option>
            <option value="Reference">Reference</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {source === "Other" ? showOtherSourceField() : ""}
        {source === "Reference" ? specifyReference() : ""}
        <div className="form-group m-2">
          <label className="m-1">Communication Skills</label>
          <select
            className="form-select form-control"
            name="communicationSkill"
            id="communicationSkill"
            onChange={(e) => setCommunicationSkill(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
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
          <button type="submit" className="btn btn-primary m-2">
            Create Candidate
          </button>

          <button type="reset" className="btn btn-danger m-2">
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCandidate;
