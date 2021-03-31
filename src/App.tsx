import React, {useEffect} from 'react';
import {appInfoRequested} from "./app/actions/app";
import {useAppDispatch} from "./app/utils";

import "antd/dist/antd.min.css";
import "./app.scss";
import {Main} from "./app/components/main";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(appInfoRequested());
	}, []);

	return (
		<Main/>
	);
}


export default App;
