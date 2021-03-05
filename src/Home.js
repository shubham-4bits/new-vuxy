import React from "react";
import "./Home.css";
import { FcAbout } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Avatar } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import { BiCalendarCheck } from "react-icons/bi";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
// import Pagi_nation from "./Pagi_nation";
import Papp from "./Papp"


const Home = () => {
  return (
    <>
      {/* <h1>honw</h1> */}
      <div className="home">
        <div className="sidebar">
          <div className="sidebar_item">
              <span className="sidebar_item1">Vuexy</span></div>
          <div className="sidebar_item">
            <HomeIcon /><div className="dash">Dashbord</div> 
          </div>
          <div className="sidebar_item">
            {/* <MailOutlineIcon />
            <div className="dash">Email </div> */}
          </div>
          <div className="sidebar_item">
            {/* <ChatBubbleOutlineIcon />
            <div className="dash"> Chat</div> */}
           
          </div>
          <div className="sidebar_item">
            {/* <EventAvailableIcon /><div className="dash">  To Do</div> */}
          
          </div>
          <div className="sidebar_item">
            {/* <CalendarTodayIcon /><div className="dash"> To 1Do</div> */}
           
          </div>
          <div className="sidebar_item">
            {/* <PermIdentityIcon /><div className="dash">  To 2Do</div> */}
          
          </div>
          <div className="sidebar_item">
            {/* <AddShoppingCartIcon /><div className="dash"> To 2Do</div> */}
           
          </div>
          <div className="sidebar_item">
            {/* <PermIdentityIcon /><div className="dash">  To 2Do</div> */}
          
          </div>
          <div className="sidebar_item">
            {/* <EventAvailableIcon /><div className="dash">  To Do</div> */}
          
          </div>
          <div className="sidebar_item">
            {/* <EventAvailableIcon /><div className="dash">  To Do</div> */}
          
          </div>

        </div>

        <div className="right_side">
          <div className="navbar_right">
            <div className="right_icon">
            <div className="nav_push">
            
              {/* <FcBusinessContact size={30} /> */}
              </div>
              <div className="nav_push">

              {/* <FcAbout size={30} /> */}
              </div>
            <div className="nav_push">
              {/* <BiCalendarCheck size={30} /> */}
              </div>
            </div>
            <div className="nav_bottom">
                <div className="nav_push">
              {/* <ShoppingCartIcon /> */}
              </div>
              <div className="nav_push">
              <NotificationsNoneIcon />
              </div>
              <div className="nav_push">
              {/* <SearchIcon /> */}
              </div>
              <div className="nav_push">
              <div className="login_name">
                  <div>JohnDoe</div>
                  <div>admin</div>
              </div>
              </div>

              <Avatar src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/avatar-s-11.1d46cc62.jpg" />
            </div>
          </div>

          <div className="navbar_middle">
            <div className="middle_left">
              <p>Show</p>
              <div className="number">
                  <p>10 ^</p></div>
              <button className="butt">Add Record </button>
            </div>

            <div className="middle_right">
              <p>Search</p>
              <input className="middle_select" type="text" placeholder="Search Invoice"/>
              <input className="middle_select2" type="text" placeholder="Select Status"/>
            </div>
          </div>


          <div className="table_right">
            <div className="table_right_box_top">
              <div className="table_right_box_in1">name</div>
              <div className="table_right_box_in1"></div>
             
              <div className="table_right_box_in1">total</div>
<div className="tot">
              <div className="table_right_box_in1">total</div>
              <div className="table_right_box_in1"> </div>
              <div className="table_right_box_in1">bale</div>
              </div>
            </div>


        <Papp/>
       




          
      
        
           







          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
