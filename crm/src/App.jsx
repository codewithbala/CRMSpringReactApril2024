import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage";
import User from "./components/user/user";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HrManagerHomepage from "./components/user/hrManager/HrManagerHomepage";
import TrainingManagerHomepage from "./components/user/trainingAdmin/TrainingAdminHomepage";
import BusinessManagerHomepage from "./components/user/businessManager/BusinessManagerHompage";
import CreateHREmployee from "./components/user/hrManager/CreateHREmployee";
import CreateBusinessEmployee from "./components/user/businessManager/CreateBusinessEmployee";
import CreateTrainingEmployee from "./components/user/trainingAdmin/createTrainingEmployee";
// import CreateCandidate from "./components/user/employee/CreateCandidate";
import UpdateCandidate from "./components/user/employee/CreateCandidate";

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [department, setDepartment] = useState();

  useEffect(() => {}, [department]);

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
        
          <Route>
            <Route
              path="/"
              element={
                <Login
                  setLoggedIn={setLoggedIn}
                  setTheDepartment={setDepartment}
                />
              }
            />
            <Route
            path="/update-candidate"
            element={<UpdateCandidate/>}
          />


            <Route
              path="/training-admin-page/:deptId/:managerId"
              element={
                loggedIn == true && department == "training" ? (
                  <TrainingManagerHomepage />
                ) : (
                  <Homepage />
                )
              }
            />

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

            <Route
              path="/business-manager-page/:deptId/:managerId"
              element={
                loggedIn == true && department == "business" ? (
                  <BusinessManagerHomepage />
                ) : (
                  <Homepage />
                )
              }
            />
            <Route path="/business/createEmployee/:deptId/:managerId" element={loggedIn==true && department == "business" ? <CreateBusinessEmployee/> : <Homepage/>}/>


            <Route
              path="/hr-manager-page/:deptId/:managerId"
              element={
                loggedIn == true && department == "hr" ? (
                  <HrManagerHomepage />
                ) : (
                  <Homepage />
                )
              }
            />
            <Route path ="/hr/createEmployee/:deptId/:managerId" element={loggedIn==true && department == "hr" ? <CreateHREmployee/> : <Homepage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
