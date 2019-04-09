import React from "react";
import { connect } from "react-redux";
import AvailablePoints from "../components/AvailablePoints";

class AvailablePointsContainer extends React.Component{

	render() {
		return (
			<AvailablePoints {...this.props} />
		)
	}
}

export const mapStateToProps = store => {
	return {
		availablePoints: store.userState.availablePoints,
		totalAvailablePoints: store.userState.totalAvailablePoints
	}
}

export default connect(mapStateToProps, null)(AvailablePointsContainer);