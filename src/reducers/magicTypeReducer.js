import { FETCH_MAGIC_TYPES_REQUEST, FETCH_MAGIC_TYPES_SUCCESS, FETCH_MAGIC_TYPES_FAILED } from "../constants/ActionTypes";

const INITIAL_STATE = {
	magicTypes: [],
	isFetching: false,
	error: null,
	successMsg: null,
	didFetch: false
};

export default (currentState = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_MAGIC_TYPES_REQUEST:
			return {
				...currentState,
				magicTypes: [],
				isFetching: true,
				error: null,
				successMsg: null
			}
		
		case FETCH_MAGIC_TYPES_SUCCESS:
			return {
				...currentState,
				magicTypes: action.magicTypes,
				isFetching: false,
				error: null,
				successMsg: action.message,
				didFetch: true
			}
		
		case FETCH_MAGIC_TYPES_FAILED:
			return {
				...currentState,
				magicTypes: [],
				isFetching: false,
				error: action.error,
				successMsg: null
			}
		
		default:
			return currentState;
	};
};