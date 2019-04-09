import React, { Component } from "react";
import MovingBackground from "../components/MovingBackground";
import MagicTypesContainer from "./MagicTypesContainer";
import AvailablePointsContainer from "../containers/AvailablePointsContainer";
import "../scss/rpg.scss";


import { connect } from "react-redux";
import { fetchMagicTypes } from "../actions/magicTypeActions";
import { fetchSkills } from "../actions/userActions";

class MainContainer extends Component {

	componentDidMount() {
		if (!this.props.didFetchMagicTypes) {
			this.props.fetchMagicTypes();
		}
		if (!this.props.didFetchSkills) {
			this.props.loadTheSkillList();
		}
	}

	render() {
		return (
			<div>
				<MovingBackground >
					<AvailablePointsContainer />
					<MagicTypesContainer />
				</MovingBackground>
			</div>
		);
	}
}

export const mapStateToProps = store => {
	return {
		didFetchMagicTypes: store.magicTypeState.didFetch,
		didFetchSkills: store.userState.didFetch
	};
}

export const mapDispatchToProps = dispatch => {
	return {
		fetchMagicTypes: () => {
			dispatch(fetchMagicTypes())
		},
		loadTheSkillList: () => {
			dispatch(fetchSkills())
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);