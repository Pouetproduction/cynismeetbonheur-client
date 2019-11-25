import React from 'react';
import helloWorldApi from '../api/helloWorldApi';

const ApiConnection = function(props) {
	const testApiConnection = function() {
		helloWorldApi.helloWorld().then((response) => {
			console.log(response);
		});
	};

	return <button onClick={testApiConnection}>{props.value}</button>;
};

export default ApiConnection;
