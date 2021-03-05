import React from 'react';
import { NavLink } from "react-router-dom";


const Forgot = () => {
    return (
        <div>
            <div className="login">
            <div className="logo">Vuexy</div>

      <div className="login_page">
          <div className="top_l">
        <h1>Forgot Password? 🔒</h1>

        <div className="phead">
        <p >Enter your email and we'll send you </p>
        </div>
        <div className="p_bott">
         <p>instructions to reset your password</p>
        </div>
        <div className="Email">
           <p>Email</p>
            <input type="email" placeholder="admin@demo.com"/>
            <div className="forgot">
         
            </div>
           <br/>

        </div>
       

        <NavLink to="/Home">
        <div className="sign-in">
            <button type="submit" className="btttn">Sign in</button>
        </div>
        </NavLink>


        <div className="create">
            <p>New on our platform ? </p>
        <NavLink to="/Registration">
                <p> Back to login</p>
            
        </NavLink>
        </div>


        </div>
      </div>
    </div>
        </div>
    )
}

export default Forgot
