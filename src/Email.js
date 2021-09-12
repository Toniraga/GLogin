import React from 'react';
import googleLogo from './Google_2015_logo.svg.png';
import './styles.css';

const Email = ({ setScreen, inputData, setInputData }) => {
	const setEmail = (val) => {
		setInputData({...inputData, email: val})
	}

	return (
		<div className="email_container">
			<div>
				<img src={googleLogo} style={{ height: '25px' }} alt="google icon" />
			</div>
			<p className="email_signin">Sign in</p>
			<p className="email_continue">to continue to Gmail</p>
			<div className="email_input_cover">
				<div className="text-field">
					<input
						onChange={(e) => setEmail(e.target.value)}
						className="input"
						type="text"
						required
					/>
					<label>Email or phone</label>
				</div>
				<a
					style={{
						color: '#1a40e8dc',
						opacity: '0.8',
						cursor: 'pointer',
						fontWeight: 600,
						fontSize: '15px',
						textDecoration: 'none',
					}}
					href="https://accounts.google.com/signin/v2/usernamerecovery?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
					target="_blank"
					rel="noreferrer"
				>
					Forgot email?
				</a>
			</div>
			<div className="email_device">
				<p style={{ opacity: '0.8', marginBottom: '4px' }}>
					Not your device? Use Guest mode to sign in privately.
				</p>
				<a
					style={{
						color: '#1a40e8dc',
						opacity: '0.8',
						cursor: 'pointer',
						fontWeight: 600,
						fontSize: '15px',
						textDecoration: 'none',
					}}
					href="https://support.google.com/chrome/answer/6130773?hl=en-GB"
					target="_blank"
					rel="noreferrer"
				>
					Learn more
				</a>
			</div>
			<div className="email_next_container">
				<a
					style={{
						color: '#1a40e8dc',
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
					Create account
				</a>
				<button disabled={!inputData.email.trim()} onClick={() => setScreen('password')} className="button">
					Next
				</button>
			</div>
		</div>
	);
};

export default Email
