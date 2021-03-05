import React from 'react'
import "./App.css";
import Login from "./form/Login";
import Registration from "./form/Registration";
import Home from "./Home"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forgot from './form/Forgot';


const App = () => {
    return (
        
        <Router>
            <div>
            <Switch>
                <Route path="/Home">
                    <Home/>
                </Route>
                <Route path="/Forgot">
                    <Forgot/>
                </Route>
                <Route path="/Registration">
                      <Registration/>
                </Route>
                <Route path="/">
                      <Login/>
                </Route>
            </Switch>
            </div>
        </Router>
        
        // <div>
        //    <h1>ashubh</h1>
            
        // </div>
    )
}

export default App
