import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage";
import User from "./components/user/user";
import Header from "./components/header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState();

  return (
    <div>

  <Header />
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
    </div>

  );
}

export default App;
