import React, {useEffect} from 'react';
import {setupApp} from "./app/actions/app";
import {useAppDispatch} from "./app/utils";

import "antd/dist/antd.min.css";
import "./app.scss";
import {Main} from "./app/components/main";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setupApp());
	}, []);

	return (
		<Main/>
	);
}


export default App;
