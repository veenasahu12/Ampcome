import React from "react";
import Appointments from "./Appointments";
import DoctorDashboard from "./DoctorDashboard";
import Login from "./Login";
import {Routes,Route} from "react-router-dom";

const AllRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/appointment" element={<Appointments />}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
