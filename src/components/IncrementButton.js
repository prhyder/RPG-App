import React from "react";

class IncrementButton extends React.Component{
	canIncrement() {
		let lessThanMaximum = this.props.points < this.props.maximumPoints;
		if (lessThanMaximum && this.props.availablePoints >= this.props.cost) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<button
				className="skill-button increment"
				disabled={!this.canIncrement()}
				onMouseDown={() => this.props.incrementSkillPoints(this.props.cost)}>
			</button>
		)
	}
}

export default IncrementButton;