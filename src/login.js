import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './login.css';
import {login, testAuth} from './redux/users/useractions'

class Login extends React.Component {
	constructor(props) {
		super(props);
		console.log('Props:', props);
	}

  render() {
  	console.log(this.props)
  	const loggedIn = (this.props.loggedIn) ? 'tru' : 'nadda'
  	return(
  		<div>
				<h1>TRAVELOGUE</h1>

				{loggedIn}

				<div className="loginform">
				<h2>Login</h2>
				<form onSubmit={this.props.login}>
					<label>Email</label>
					<input id="login-email" type="email" name="email"/>
					<label>Password</label>
					<input id="login-password" type="text" name="password"/><br/> <br/>
					<button>Lets go!</button>
					<br/>
				</form>
				<button onClick={this.props.testAuth}>Click</button>
			</div>
			<p><Link to={"/usermain"} style={{color: "red"}}>TRAVELOGUE</Link></p>
		</div>
  		);
  };
 }

const mapStateToProps = (state, ownProps) => {
	//var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);
	console.log('state is:',state, ownProps);
	return {
		loggedIn: state._root.entries[0][1].loggedIn
	}
};

 const mapDispatchToProps = (dispatch) => {
 	return {
 		login: (e) => {
 			e.preventDefault();
 		// 	console.log('e',document.getElementById('login-email').value, document.getElementById('login-password').value)
			let usrName = document.getElementById('login-email').value,
					pw = document.getElementById('login-password').value;
 			login({username: usrName, password:pw},dispatch);
 		},
		testAuth: (e) =>{ testAuth(dispatch); }
 	}
 }

 export default connect( mapStateToProps, mapDispatchToProps )(Login);
