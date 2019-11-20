import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import { configureStore, createAction, createSlice } from '@reduxjs/toolkit';
import App from './components/App.jsx';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
    increment: (state) => state + 1,
		decrement: (state) => state - 1
	}
});
const { actions, reducer } = counterSlice;

const store = configureStore({
	reducer: reducer
});

store.subscribe(() => {
	console.log(store.getState());
});

const { increment, decrement } = actions;
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('cb-app'));
