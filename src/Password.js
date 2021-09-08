import React from 'react';
import googleLogo from './Google_2015_logo.svg.png';
import './styles.css';

const Password = ({ setScreen }) => {
	return (
		<div className="email_container">
			<div>
				<img src={googleLogo} style={{ height: '25px' }} alt="google icon" />
			</div>
			<p className="email_signin">Welcome</p>
			<p>Mail shows here</p>
			<div className="email_input_cover">
				<input className="input" />
				<span>show password checkobox here</span>
			</div>
			<div className="email_next_container">
				<a
					style={{
						color: '#1a73e8',
						opacity: '0.8',
						cursor: 'pointer',
						fontWeight: 600,
						fontSize: '15px',
						textDecoration: 'none',
					}}
					href="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp"
					target="_blank"
					rel="noreferrer"
				>
					Forgot password?
				</a>
				<button onClick={() => setScreen('wentWrong')} className="button">
					Next
				</button>
			</div>
		</div>
	);
};

export default Password;
