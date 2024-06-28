import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signup from "./components/register.jsx";
import Login from "./components/loginSignup/login.jsx";
import Nav from "./components/home page/home.jsx";
import NoFound from "./components/notFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path="/register" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Nav/>}></Route>
          <Route path="/*" element={<NoFound />}></Route>

       </Routes>
      </BrowserRouter>
    

  
  
     </>
  );
}

export default App;
