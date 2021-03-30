import React, {useEffect} from 'react';
import {setupApp} from "./app/actions/app";
import {LaunchesList} from "./features/launches/list";
import {useAppDispatch} from "./app/utils";


import "antd/dist/antd.min.css";
import styles from "./styles.module.scss";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setupApp());
	}, []);

	return (
		<div className={styles.app}>
			<LaunchesList/>
		</div>
	);
}

export default App;
