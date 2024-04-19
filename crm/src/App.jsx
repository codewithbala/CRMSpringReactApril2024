import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage";
import User from "./components/user/user";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import EmployeeHomepage from "./components/user/employee/EmployeeHomepage";
import ManagersPage from "./components/user/managers/ManagersPage";
import CreateBusinessEmployee from "./components/user/businessManager/CreateBusinessEmployee";
import UpdateCandidate from "./components/user/employee/UpdateCandidate";
import CreateTrainingEmployee from "./components/user/trainingAdmin/createTrainingEmployee";
import CreateCandidate from "./components/candidate/CreateCandidate";
import CandidateInterview from "./components/candidate/CandidateInterview";
import ViewCandidate from "./components/candidate/viewCandidate/ViewCandidate";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    // localStorage.getItem("loggedIn") === "true"
  );
  const [department, setDepartment] = useState(
    localStorage.getItem("department")
  );
  const [user, setUser] = useState(localStorage.getItem("user"));
  //reload the app whenever the compoennt is called
  async function init(){
    
  }
  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true")
  },[])

  useEffect(() => {
    console.log(user);
  }, [loggedIn,department]);
  console.log(user)
  if(!loggedIn || window.location.pathname == "/"){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route
                path="/"
                element={
                  <Login
                    setLoggedIn={setLoggedIn}
                    setTheDepartment={setDepartment}
                    setUser={setUser}
                  />
                }
              />
            </Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }else{
    return (
      <div>
        
        <BrowserRouter>
        <div className="row">
          <div style={{position: "fixed"}} className="col-2">
        <Header className="fixed" setLoggedIn={setLoggedIn} department={department} />
         </div>
         <div className="col-2"></div>
         <div className="col-9">
          <Routes>
            <Route>
              {/* <Route
                path="/"
                element={
                  <Login
                    setLoggedIn={setLoggedIn}
                    setTheDepartment={setDepartment}
                    setUser={setUser}
                  />
                }
              /> */}
  
  
              {/* training admin */}
              <Route
                path="/training-admin-page"
                element={
                  loggedIn == true && department == "training" ? (
                    <ManagersPage department={department}/>
                  ) : (
                    <Homepage />
                  )
                }
              />
              {/* training employee */}
              {/* <Route
                path="/training-employee-page"
                element={
                  loggedIn == true && department == "training-employee" ? (
                    <EmployeeHomepage department={department}/>
                  ) : (
                    <Homepage />
                  )
                }
              /> */}
              {/* create training employee */}
              <Route
                path="/training/createEmployee/:deptId/:managerId"
                element={
                  loggedIn == true && department == "training" ? (
                    <CreateTrainingEmployee />
                  ) : (
                    <Homepage />
                  )
                }
              />
              {/* business manager */}
              <Route
                path="/business-manager-page"
                element={
                  loggedIn == true && department == "business" ? (
                    <ManagersPage department={department}/>
                  ) : (
                    <Homepage />
                  )
                }
              />
              
              {/* Business employee*/}
              {/* <Route
                path="/business-employee-page"
                element={
                  loggedIn == true && department == "business-employee" ? (
                    <EmployeeHomepage department={department}/>
                  ) : (
                    <Homepage />
                  )
                }
              /> */}

              {/* create business employee */}
              <Route path="/business/createEmployee/:deptId/:managerId" element={loggedIn==true && department == "business" ? <CreateBusinessEmployee/> : <Homepage/>}/>
  
              {/* HR manager*/}
              <Route
                path="/hr-manager-page"
                element={
                  loggedIn == true && department == "hr" ? (
                    <ManagersPage department={department}/>
                  ) : (
                    <Homepage />
                  )
                }
              />
  
              <Route
                path="/employee-page"
                element={
                  loggedIn == true && department.includes("employee") ? (
                    <EmployeeHomepage department={department}/>
                  ) : (
                    <Homepage />
                  )
                }
              />
  
              <Route path ="/hr/createEmployee/:deptId/:managerId" element={loggedIn==true && department == "hr" ? <UpdateCandidate/> : <Homepage/>}/>
              
              <Route path="/:department/createEmployee/:deptId/:employeeId" element={ loggedIn==true && department == "hr-employee" ?<UpdateCandidate/> : department == "training-employee"?<UpdateCandidate/> : department == "business-employee"? <UpdateCandidate/> : <Homepage/>}></Route>

                {/* Create a new candidate */}
                <Route
                path="/candidates/create-candidate/"
                element={department == "hr-employee" ? <CreateCandidate department={department}/> : <Homepage/>}
              ></Route>

              {/* Create a new candidate
                  <Route
                path="/candidates/create-candidate/"
                element={<CreateCandidate department={department} />}
              ></Route> */}

              {/* Test route, will delete */}
              <Route
                path="/candidates/candidate-interview"
                element={
                  <CandidateInterview
                    
                    remarks={"Candidate did well during the interview"}
                  />
                }
              />

              <Route path="/candidates/view-candidate/:id" element={<ViewCandidate/>}></Route>
  
            </Route>
          </Routes>
            </div>
          </div>
        </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
  
}

export default App;
