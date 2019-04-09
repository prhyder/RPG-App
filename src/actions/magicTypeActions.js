import {
	FETCH_MAGIC_TYPES_REQUEST,
	FETCH_MAGIC_TYPES_SUCCESS,
	FETCH_MAGIC_TYPES_FAILED,
	FETCH_MAGIC_TYPE_REQUEST,
	FETCH_MAGIC_TYPE_SUCCESS,
	FETCH_MAGIC_TYPE_FAILED
} from "../constants/ActionTypes";

// Todo: Load from environemnt.
//const apiUrl = "http://localhost:3002/api/";
const apiUrl = "https://immense-shore-91743.herokuapp.com/";

export const fetchMagicTypes = () => {
	return (dispatch) => {
		dispatch(fetchMagicTypesRequest());

		return fetch(apiUrl + "magicTypes")
			.then(response => {
				if (response.ok) {
					response.json().then(data => {
						dispatch(fetchMagicTypesSuccess(data.magicTypes, data.message));
					});
				}
				else {
					response.json().then(error => {
						dispatch(fetchMagicTypesFailed(error));
					});
				}
			});
	}
}

export const fetchMagicTypesRequest = () => {
	return {
		type: FETCH_MAGIC_TYPES_REQUEST
	}
}

export const fetchMagicTypesSuccess = (magicTypes, message) => {
	return {
		type: FETCH_MAGIC_TYPES_SUCCESS,
		magicTypes: magicTypes,
		message: message
	}
}

export const fetchMagicTypesFailed = (error) => {
	return {
		type: FETCH_MAGIC_TYPES_FAILED,
		error
	}
}

export const fetchMagicTypeById = (magicTypeId) => {
	return (dispatch) => {
		dispatch(fetchMagicTypesRequest());
		// Returns a promise
		return fetch(apiUrl + magicTypeId)
			.then(response => {
				if (response.ok) {
					response.json().then(data => {
						dispatch(fetchMagicTypeSuccess(data.magicType[0], data.message));
					});
				}
				else {
					response.json().then(error => {
						dispatch(fetchMagicTypeFailed(error));
					});
				}
			});
	}
}

export const fetchMagicTypeRequest = () => {
	return {
		type: FETCH_MAGIC_TYPE_REQUEST
	}
}

export const fetchMagicTypeSuccess = (magicType, message) => {
	return {
		type: FETCH_MAGIC_TYPE_SUCCESS,
		magicType: magicType,
		message: message
	}
}

export const fetchMagicTypeFailed = (error) => {
	return {
		type: FETCH_MAGIC_TYPE_FAILED,
		error
	}
}