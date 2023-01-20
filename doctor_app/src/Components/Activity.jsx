import React from "react";
import Group6 from "../Photos/Group6.png";
import notification from "../Photos/notification.png";
import setting from "../Photos/setting.png";
import summary from "../Photos/summary.png";
import box from "../Photos/box.png";

const Activity = (props) => {
  return (
    <div className="container_Div">
      <img className="image_tag" src={Group6} alt="" />
      <div className="div1">
        <img className="notification" src={notification} alt="" />
        <p className="activity">Activity</p>
      </div>
      <div className="main">
          <div>
              <div className="text_div">
              <img src={setting} alt=""/>
              <div className="text_div">
              <div className="title">User Activity</div>
              <div className="time">12:32</div>
              </div>
              </div>
              <p className="subtitle">Vivek Kumar accepted the invitation</p>
          </div>
          <div>
          <div className="text_div">
              <img src={setting} alt=""/>
              <div className="text_div">
              <div className="title">User Activity</div>
              <div className="time">8:16</div>
              </div>
              </div>
              <p className="subtitlee">Ritu M, blocked their calendar for 15th September</p>
          </div>
          <div>
          <div className="text_div">
              <img src={summary} alt=""/>
              <div className="text_div">
              <div className="title">Summary</div>
              <div className="time">8:00</div>
              </div>
              </div>
              <p className="subtitles">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt</p>
          </div>
          <div>
          <div className="text_div">
              <img src={box} alt=""/>
              <div className="text_div">
              <div className="title">Application Update</div>
              <div className="time">yesterday</div>
              </div>
              </div>
              <p className="subtitles">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt</p>
          </div>
          <div>
          <div className="text_div">
              <img src={setting} alt=""/>
              <div className="text_div">
              <div className="title">User Activity</div>
              <div className="time">2 days ago</div>
              </div>
              </div>
              <p className="subtitle">Vivek Kumar accepted the invitation</p>
          </div>
      </div>
        
    </div>
  );
};

export default Activity;
