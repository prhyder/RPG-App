import React from "react";
import SelectSkills from "../components/SelectSkills";
import MovingBackground from "../components/MovingBackground";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AvailablePointsContainer from '../containers/AvailablePointsContainer';

import { fetchSkills } from "../actions/userActions";

class SelectSkillsContainer extends React.Component{	
	render() {
		return (
			<MovingBackground>
				<div className="container justify-content-center">
					<AvailablePointsContainer />
					<SelectSkills {...this.props} />
					<div className="row">
						<div className="col-12 text-center">
							<Link className="btn return-button" to={"/magicTypes"} >
								Return	
							</Link>
						</div>
					</div>
				</div>
			</MovingBackground>
		)
	}
}

export const mapStateToProps = store => {
	return {
		selectedMagicType: store.userState.selectedMagicType,
		skillList: store.userState.skillList.filter(skill => skill.magicType === store.userState.selectedMagicType),
		magicName: store.magicTypeState.magicTypes.find(magicType => magicType._id === store.userState.selectedMagicType).name
	}
};

export const mapDispatchToProps = dispatch => {
	return {
		loadTheSkillList: value => {
			dispatch(fetchSkills(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSkillsContainer);