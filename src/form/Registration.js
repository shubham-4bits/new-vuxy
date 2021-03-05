import React from 'react';
import "./Login.css"
import { NavLink } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';



const Registration = () => {
    return (
        <div className="login">
       <div className="logo">Vuexy</div>
        <div className="login_page">
        <div className="welcome">
          <h1>Welcome to Vuexy ! 🚀</h1>
          </div>
  
                  
<div className="ac">
 
        <p>Make your app managment easy and fun! </p>
           

</div>
         
          <div className="admin_id">
            <div className="name">
              <p>Admin: admin@demo.com | admin</p>
              <p>Client:client@demon.com |client</p>
            </div>
            <div className="que">
              {/* <p>❓</p> */}
            </div>
          </div>
  
          <div className="Email">
             <p>Username</p>
              <input type="email" placeholder="Enter ur name"/>
             <p>Email</p>
              <input type="email" placeholder="admin@demo.com"/>
              <p>password</p>
              <input type="password" placeholder="************"/>
  
          </div>
          <div className="now">
              
              <p><input type="checkbox"/>Remember me</p>
          </div>

          <NavLink to="/Home">
           <div className="sign-in">
              <button type="submit" className="btttn">Sign up</button>
          </div>
          </NavLink>
  
  
  
          <div className="create">
              <p>Already have an account ? </p>
          <NavLink to="/">
                  <p>Sign in instead</p>
          </NavLink>
          </div>
  
          <div className="hr">
               <p>OR</p>
    
            
              
          </div>
  
  
          <div className="bottom_icon">
            <FacebookIcon/>
            <TwitterIcon/>
            <MailOutlineIcon/>
            <GitHubIcon/>
            
            
            
           
        </div>
  
  
        </div>
      </div>
    )
}

export default Registration;
