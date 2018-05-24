import React from 'react';
import ReactDOM from 'react-dom';
import AppMenu from './components/menuDemo/menuDemo';
import TableDemo from './components/tableDemo/tableDemo.js';
import CardLayout from './components/cardLayout/cardLayout.js';
import Auth from './components/auth/auth.js';
import {Router, Redirect,hashHistory,Route,IndexRoute} from 'react-router';
import UserLayout from './components/Login/UserLayout.js';
import LoginForm from './components/Login/LoginForm.js';
import RegistrationForm from './components/Login/RegistrationForm.js';


ReactDOM.render(
	(
		<Router history={hashHistory}>
			<Route path='/' component={UserLayout}>
				<IndexRoute component={LoginForm}></IndexRoute>
				<Route path='/Register' component={RegistrationForm}>

				</Route>
			</Route>
			<Route path='/AppMenu' component={AppMenu}>
				<IndexRoute component={TableDemo}></IndexRoute>
				<Route path='/Table' component={TableDemo}>

				</Route>
				<Route path='/CardLayout' component={CardLayout}>

				</Route>
			</Route>
	

		</Router>

	), document.getElementById('root')
);

