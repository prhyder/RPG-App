import React from "react";

class DecrementButton extends React.Component{
	canDecrement() {
		if (this.props.points > 0) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<button
				className="skill-button decrement"
				disabled={!this.canDecrement()}
				onMouseDown={() => this.props.decrementSkillPoints(this.props.cost)}>
			</button>
		)
	}
}

export default DecrementButton;