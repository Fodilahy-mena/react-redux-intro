import React from 'react';
import store from './redux';
function App(props) {
	store.dispatch({type: 'INCREMENT'})
	store.dispatch({type: 'DECREMENT'})
	return <div></div>;
}

export default App;
