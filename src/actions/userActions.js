import {
	MAGIC_TYPE_SELECTED,
	SKILL_POINTS_CHANGED,
	FETCH_SKILLS_REQUEST,
	FETCH_SKILLS_SUCCESS,
	FETCH_SKILLS_FAILED,
	FETCH_SKILLS_FOR_MAGIC_TYPE_REQUEST,
	FETCH_SKILLS_FOR_MAGIC_TYPE_SUCCESS,
	FETCH_SKILLS_FOR_MAGIC_TYPE_FAILED,
	AVAILABLE_POINTS_INCREMENTED,
	AVAILABLE_POINTS_DECREMENTED,
	SKILL_LIST_LOADED
} from "../constants/ActionTypes";

const apiUrl = "http://localhost:3002/api/";

export const magicTypeSelected = (magicTypeId) => {
	return {
		type: MAGIC_TYPE_SELECTED,
		magicTypeId: magicTypeId
	}
}

export const setSkillPoints = (points, skillId) => {
	return {
		type: SKILL_POINTS_CHANGED,
		points: points,
		skillId: skillId
	}
}

// Fetch all Skills
export const fetchSkills = () => {
	return (dispatch) => {
		dispatch(fetchSkillsRequest());

		return fetch(apiUrl + "skills")
			.then(response => {
				if (response.ok) {
					response.json().then(data => {
						dispatch(fetchSkillsSuccess(data.skills, data.message));
					});
				}
				else {
					response.json().then(error => {
						dispatch(fetchSkillsFailed(error));
					});
				}
			});
		
	}
}
export const fetchSkillsRequest = () => {
	return {
		type: FETCH_SKILLS_REQUEST
	}
}

export const fetchSkillsSuccess = (skills, message) => {
	return {
		type: FETCH_SKILLS_SUCCESS,
		skillList: skills,
		message: message
	}
}

export const fetchSkillsFailed = (error) => {
	return {
		type: FETCH_SKILLS_FAILED,
		error
	}
}

// Fetch Skills for magic type Id
export const fetchSkillsForMagicType = (magicTypeId) => {
	return (dispatch) => {
		dispatch(fetchSkillsForMagicTypeRequest());

		return fetch(apiUrl + "skills/" + magicTypeId)
			.then(response => {
				if (response.ok) {
					response.json().then(data => {
						dispatch(fetchSkillsForMagicTypeSuccess(data.skills, data.message));
					});
				}
				else {
					response.json().then(error => {
						dispatch(fetchSkillsForMagicTypeFailed(error));
					});
				}
			});
		
	}
}
export const fetchSkillsForMagicTypeRequest = () => {
	return {
		type: FETCH_SKILLS_FOR_MAGIC_TYPE_REQUEST
	}
}

export const fetchSkillsForMagicTypeSuccess = (skills, message) => {
	return {
		type: FETCH_SKILLS_FOR_MAGIC_TYPE_SUCCESS,
		skillList: skills,
		message: message
	}
}

export const fetchSkillsForMagicTypeFailed = (error) => {
	return {
		type: FETCH_SKILLS_FOR_MAGIC_TYPE_FAILED,
		error
	}
}

export const skillListLoaded = (skillList) => {
	return {
		type: SKILL_LIST_LOADED,
		skillList: skillList
	}
}

export const availablePointsIncremented = (value) => {
	return {
		type: AVAILABLE_POINTS_INCREMENTED,
		value: value
	}
}

export const availablePointsDecremented = (value) => {
	return {
		type: AVAILABLE_POINTS_DECREMENTED,
		value: value
	}
}
