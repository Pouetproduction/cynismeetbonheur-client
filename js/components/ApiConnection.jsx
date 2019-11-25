import React, { useState } from 'react';
import helloWorldApi from '../api/helloWorldApi';
import messageApi from '../api/messageApi';
import { Button, TextareaAutosize } from '@material-ui/core';

const ApiConnection = function({ value }) {
	const [ message, setMessage ] = useState('');
	const [ messageList, setMessageList ] = useState([]);

	const printHelloWorld = function() {
		helloWorldApi.helloWorld().then((response) => {
			console.log(response);
		});

		console.log(message);
	};

	const getMessageList = function() {
		messageApi.get(message).then((response) => {
      console.log(response.data);
      setMessageList(response.data);
		});
	};

	const postMessage = function() {
		messageApi.post(message).then((response) => {
      console.log(response);
      getMessageList();
    });
    setMessageList([...messageList, {message}]);
	};

	const handleChange = function(event) {
    setMessage(event.currentTarget.value);
	};

	return (
		<div>
			<ul>{messageList.map((messageItem) => <li key={messageItem._id}>{messageItem.message}</li>)}</ul>
      <Button variant="text" color="secondary" onClick={getMessageList}>
        Get Messages
      </Button>
			<TextareaAutosize placeholder="Mamie je t'aime" value={message} onChange={handleChange} />
			<Button variant="outlined" color="primary" onClick={printHelloWorld}>
				{value}
			</Button>
			<Button variant="contained" color="primary" onClick={postMessage}>
				Post message
			</Button>
		</div>
	);
};

export default ApiConnection;
