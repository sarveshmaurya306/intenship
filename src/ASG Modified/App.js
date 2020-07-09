import React from 'react';
import Home from './Home.jsx'
import ContactUs from './ContactUs.jsx'
import Login from './Login.jsx'
import About from './About.jsx'
import SignUp from './SignUp.jsx'
import Courses from './Courses.jsx'
import './App.css'
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
