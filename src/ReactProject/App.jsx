import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import NavBar from './NavBar'
export default function App(params) {
	return(<div>
	<NavBar/>
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route exact path="/about" component={About}/>
		<Route exact path="/service" component={Service}/>
		<Route exact path="/contact" component={Contact}/>
		<Redirect to="/"/>  {/*default path of router*/}
	</Switch>
	</div>)
};
