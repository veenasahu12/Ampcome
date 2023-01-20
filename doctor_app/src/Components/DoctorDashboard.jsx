import React from "react";
import "./Dashboard.css";
import Group1 from "../Photos/Group1.jpg";
import Group2 from "../Photos/Group2.png";
import Group3 from "../Photos/Group3.png";
import Group4 from "../Photos/Group4.png";
import Group5 from "../Photos/Group5.png";
import Activity from "./Activity";


const DoctorDashboard = (props) => {
  return (
    <div>
        <div className="firstDiv">
        <div className="heading">Welcome Anil Kumar</div>
        <div className="sub_headings">Cardiology</div>
        </div>
        <div>
            <img className="secondDiv" src={Group1} alt=""/>
            <img className="secondDiv2" src={Group2} alt=""/>
        </div>
        <div className="thirdDiv_main">
            <a href="./appointment"><img className="thirdDiv1" src={Group3} alt=""/></a>
            <img className="third_Div2" src={Group4} alt=""/>
        </div>
        <div>
            <img className="lastDiv" src={Group5} alt="" />
        </div>
        <div>
          <Activity />
        </div>
    </div>
  );
};

export default DoctorDashboard;
