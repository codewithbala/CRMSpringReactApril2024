import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage";
import User from "./components/user/user";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import CreateHREmployee from "./components/user/hrManager/CreateHREmployee";
import CreateBusinessEmployee from "./components/user/businessManager/CreateBusinessEmployee";
import CreateTrainingEmployee from "./components/user/trainingAdmin/createTrainingEmployee";
// import CreateCandidate from "./components/user/employee/CreateCandidate";
import UpdateCandidate from "./components/user/employee/UpdateCandidate";
import EmployeeHomepage from "./components/user/employee/EmployeeHomepage";
import ManagersPage from "./components/user/managers/ManagersPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [department, setDepartment] = useState(localStorage.getItem("department"));
  const [user,setUser] = useState(localStorage.getItem("user"));



  console.log("loggedin is"+typeof(loggedIn))

  useEffect(() => {
    console.log(user)
  }, [department]);
  console.log(user)
  return (
    <div>
      
      <BrowserRouter>
      <Header />
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
            <Route
            path="/update-candidate"
            element={<UpdateCandidate/>}
          />

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
            <Route
              path="/training-employee-page"
              element={
                loggedIn == true && department == "training-employee" ? (
                  <EmployeeHomepage department={department}/>
                ) : (
                  <Homepage />
                )
              }
            />
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
            <Route
              path="/business-employee-page"
              element={
                loggedIn == true && department == "business-employee" ? (
                  <EmployeeHomepage department={department}/>
                ) : (
                  <Homepage />
                )
              }
            />
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
              path="/hr-employee-page"
              element={
                loggedIn == true && department == "hr-employee" ? (
                  <EmployeeHomepage department={department}/>
                ) : (
                  <Homepage />
                )
              }
            />

            <Route path ="/hr/createEmployee/:deptId/:managerId" element={loggedIn==true && department == "hr" ? <CreateHREmployee/> : <Homepage/>}/>


            <Route path="/create-candidate" element={ <UpdateCandidate/>} />

          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
