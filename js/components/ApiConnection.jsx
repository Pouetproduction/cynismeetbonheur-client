import React from 'react';
import helloWorldApi from '../api/helloWorldApi';
import messageApi from '../api/messageApi';

const ApiConnection = function({value}) {

	const testApiConnection = function() {
		helloWorldApi.helloWorld().then((response) => {
			console.log(response);
		});
	};

	const postMessage = function() {
		messageApi.post().then((response) => {
			console.log(response);
		});
	};

	return <div>
    <button onClick={testApiConnection}>{value}</button>
    <button onClick={postMessage}>Post message</button>
  </div>;
};

export default ApiConnection;
