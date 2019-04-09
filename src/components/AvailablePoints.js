import React from "react";
import PropTypes from "prop-types";

class AvailablePoints extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flash: false,
			imagesLoaded: false
		}
	}

	handleImageLoaded() {
		this.setState({ imagesLoaded: true });
	}

	render() {
		return (
			<div className="available-points container-fluid text-center" onLoad={this.handleImageLoaded.bind(this)}>
				Skill Points Remaining:  <span className="points-text">
					{this.props.availablePoints}/{this.props.totalAvailablePoints}
				</span>
			</div>
		)
	}
};

AvailablePoints.propTypes = {
	availablePoints: PropTypes.number.isRequired,
	totalAvailablePoints: PropTypes.number.isRequired
}

export default AvailablePoints;