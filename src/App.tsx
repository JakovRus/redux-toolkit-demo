import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import './App.css';
import {setupApp} from "./app/actions/app";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setupApp());
	}, []);

	return (
		<div className="App">
			App
		</div>
	);
}

export default App;
