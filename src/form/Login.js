import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';

const Login = () => {
  return (
    <div className="login">
      <div className="logo">Vuexy</div>

      <div className="login_page">
          <div className="welcome">

        <h1>Welcome to Vuexy ! 👏</h1>
          </div>
          
<div className="ac">
    <div className="p_bottom">
        <p>Please sign-in to youre account and start  </p>
        </div>
            <p>the advanture</p>

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
           <p>Email</p>
            <input type="email" placeholder="admin@demo.com"/>
            <div className="forgot">
            <p>password</p>
            <NavLink to="/Forgot">
                <div className="forgot_link">

            <p>Forgot Password ?</p>
                </div>
            </NavLink>

            </div>
            <input type="password" placeholder="*******"/>

        </div>
        <div className="now">
              
              <p><input type="checkbox"/>Remember me</p>
          
        </div>

        <NavLink to="/Home">
        <div className="sign-in">
            <button type="submit" className="btttn">Sign in</button>
        </div>
        </NavLink>


        <div className="create">
            <p>New on our platform ? </p>
        <NavLink className="navl" to="/Registration">
                <p>Create an account</p>
        </NavLink>
        </div>

        <div className="hp">
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
    
  );
};

export default Login;
