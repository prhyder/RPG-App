import React from "react";
import PropTypes from "prop-types";
import IndividualSkill from "../components/IndividualSkill";
import { connect } from "react-redux";

import { availablePointsDecremented, availablePointsIncremented, setSkillPoints } from "../actions/userActions";

// Default values for each skill.
const skillDefaults = {
	maximumPoints: 5
}

/**
 * Represents a container for a single skill.
 * Corresponds to an item in userState.skillList[]
 */
class IndividualSkillContainer extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			points: this.props.points,
			maximumPoints: skillDefaults.maximumPoints,
			cost: this.props.cost,
			name: this.props.name,
			description: this.props.description,
			canIncrementPoints: true,
			canDecrementPoints: this.props.canDecrementPoints
		}
		
		this.incrementSkillPoints = this.incrementSkillPoints.bind(this);
		this.decrementSkillPoints = this.decrementSkillPoints.bind(this);

	};

	incrementSkillPoints = () => {
		//Note : I'm removing this check for now. 
		//if (this.state.canIncrementPoints) {
			this.setState({points: this.state.points + this.state.cost}, () => {
					this.props.decrementAvailablePoints(this.state.cost);
					this.props.setSkillPoints(this.state.points, this.props._id);
				}
			);
		//}
	}

	decrementSkillPoints = () => {
		this.setState({points: this.state.points - this.state.cost}, () => {
				this.props.incrementAvailablePoints(this.state.cost);
				this.props.setSkillPoints(this.state.points, this.props._id);
			}
		);
	}

	render() {
		return (
			<IndividualSkill {...this.state} {...this.props} incrementSkillPoints={this.incrementSkillPoints} decrementSkillPoints={this.decrementSkillPoints} />
		)
	}
};

IndividualSkillContainer.propTypes = {
	points: PropTypes.number,
	maximumPoints: PropTypes.number,
	cost: PropTypes.number,
	name: PropTypes.string,
	description: PropTypes.string,
};

IndividualSkillContainer.defaultProps = {
	maximumPoints: 5,
	cost: 1,
	points: 0
}

export const mapStateToProps = store => {
	return {
		availablePoints: store.userState.availablePoints
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		decrementAvailablePoints: value => {
			dispatch(availablePointsDecremented(value))
		},
		incrementAvailablePoints: value => {
			dispatch(availablePointsIncremented(value))
		},
		setSkillPoints: (points, skillId) => {
			dispatch(setSkillPoints(points, skillId))
		}
	}	
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualSkillContainer);