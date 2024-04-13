import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage";
import User from "./components/user/user";

function App() {
  const [loggedIn, setLoggedIn] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/user"
            element={loggedIn == true ? <User /> : <Homepage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
