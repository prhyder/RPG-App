import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers'; //Get the State from the reducers

export default function configureStore(initialState) {
	const middlewares = [
		thunk
	];

	const store = createStore(reducer, initialState, compose(
		applyMiddleware(...middlewares),
		window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
	)
	);

	// if (module.hot) {
	// 	// Enable Webpack hot module replacement for reducers
	// 	module.hot.accept('../reducers', () => {
	// 		const nextReducer = require('../reducers').default; // eslint-disable-line global-require
	// 		store.replaceReducer(nextReducer);
	// 	});
	// }

	return store;
}
// let store = createStore(reducer); //Create the store from the state received from the reducers

// export default store;