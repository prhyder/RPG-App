import {
	MAGIC_TYPE_SELECTED,
	SKILL_POINTS_CHANGED,
	FETCH_SKILLS_REQUEST,
	FETCH_SKILLS_SUCCESS,
	FETCH_SKILLS_FAILED,
	AVAILABLE_POINTS_DECREMENTED,
	AVAILABLE_POINTS_INCREMENTED
} from "../constants/ActionTypes";

const INITIAL_STATE = {
	selectedMagicType: null,
	totalAvailablePoints: 20,
	availablePoints: 20,
	skillList: [],
	didFetch: false
};

export default (currentState = INITIAL_STATE, action) => {
	switch (action.type) {
		case MAGIC_TYPE_SELECTED:
			console.log(`magic type selected with id ${action.magicTypeId}`);
			return {
				...currentState,
				selectedMagicType: action.magicTypeId
			}
		case FETCH_SKILLS_REQUEST:
			return {
				...currentState,
				skillList: [],
				isFetching: true,
				error: null,
				successMsg:null
			}		
		case FETCH_SKILLS_SUCCESS:
			return {
				...currentState,
				skillList: action.skillList,
				isFetching: false,
				error: null,
				successMsg: action.message,
				didFetch: true
			}
		
		case FETCH_SKILLS_FAILED:
			return {
				...currentState,
				skillList: [],
				isFetching: false,
				error: action.error,
				successMsg:null
			}
		
		case SKILL_POINTS_CHANGED:
			let skillId = action.skillId;
			let points = action.points;			

			let newSkillList = currentState.skillList.slice();
			const skill = newSkillList.find(s => s._id === skillId);
			skill.points = points;

			return {
				...currentState,
				skillList: newSkillList
			}
		case AVAILABLE_POINTS_DECREMENTED:
			return {
				...currentState,
				availablePoints: currentState.availablePoints - action.value
			}
		case AVAILABLE_POINTS_INCREMENTED:
			return {
				...currentState,
				availablePoints: currentState.availablePoints + action.value
			}
		default:
			return currentState;
	};
};
