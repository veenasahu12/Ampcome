import React from "react";
import "./Appointment.css";
import data from "../Components/Data/db.json";

const Appointments = (props) => {
  return (
    <div>
      <h2 id="heading">Appointments</h2>
      <p id="subheadings">List Of Book Appointment</p>
      <hr />
      <div className="appointDiv">
        <input className="inputfield" placeholder="Search by name, number" />
        <select className="inputfield">
          <option>This Week</option>
        </select>
        <select className="inputfield">
          <option>All</option>
        </select>
        <select className="inputfield">
          <option>All</option>
        </select>
        <select className="inputfield">
          <option>All</option>
        </select>
      </div>
      <table>
        <tr className="table_div">
          <th>ORDER ID</th>
          <th>PATIENT</th>
          <th>CONSULTATION</th>
          <th>TEAM</th>
          <th>DOCTOR</th>
          <th>SLOT</th>
          <th>STATUS</th>
          <th>INVOICE</th>
          <th>ACTION</th>
        </tr>
      </table>
      <hr />
      <tbody>
        {data?.map((val, key) => {
          return (
            <tr key={key} className="body_div" >
              <td >{val.orderID}</td>
              <td >{val.patient}</td>
              <td >{val.Consultation}</td>
              <td >{val.team}</td>
              <td >{val.doctor}</td>
              <td >{val.Slot}</td>
              <td >{val.status}</td>
              <td >{val.invoice}</td>
              <td >{val.Action}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};

export default Appointments;
