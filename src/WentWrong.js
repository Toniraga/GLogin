import React from 'react';
import googleLogo from './Google_2015_logo.svg.png';
import './styles.css';

const WentWrong = ({ setScreen }) => {
	return (
		<div className="email_container">
			<div>
				<img src={googleLogo} style={{ height: '25px' }} alt="google icon" />
			</div>
			<p className="email_signin">Something went wrong</p>
			<p style={{
        textAlign: 'center', 
        marginTop: '15px',
        opacity: '0.9',
        }}
      >Sorry, something went wrong there. Please try again.</p>

			<div className="email_next_container">
        <p></p>
				<button onClick={() => setScreen('email')} className="button">
					Next
				</button>
			</div>
		</div>
	);
};

export default WentWrong;
