
import React, { Component } from 'react'
import Home from './containers/Home';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { homeReducer } from './store';

const store = createStore(homeReducer)
class App extends Component {
	render() {
		return (
			<body>
				<Provider store={store}>
					<Home />
				</Provider>
			</body>
		)
	}
}

export default App