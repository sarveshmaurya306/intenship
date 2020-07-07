import React from 'react';
import Home from './ASG Modified/Home.jsx'
import ContactUs from './ASG Modified/ContactUs.jsx'
import Login from './ASG Modified/Login.jsx'
import About from './ASG Modified/About.jsx'
import SignUp from './ASG Modified/SignUp.jsx'
import Courses from './ASG Modified/Courses.jsx'
import {
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  
  return (<div>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
       <Route exact path="/contact">
        <ContactUs/>
      </Route>
      <Route exact path="/about">
       <About/>
      </Route>
      <Route exact path="/login">
         <Login/>
      </Route> 
      <Route exact path="/login/signup">
        <SignUp/>
      </Route>
      <Route exact path="/courses">
        <Courses/>
      </Route>
    </Switch>
  </div>
  );
}
