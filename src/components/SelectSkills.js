import React from "react";
import PropTypes from "prop-types";
import IndividualSkillContainer from "../containers/IndividualSkillContainer";

class SelectSkills extends React.Component{
	render() {
		return (
			<div className="select-skills-container container-fluid mt-5 ">
				<div className="row">
					<div className="col-12 text-center pt-5 p-3">
						<h2>{this.props.magicName} Magic</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{this.props.skillList.map(skill => (
							<IndividualSkillContainer key={skill._id} {...skill} />
						))}
					</div>
				</div>
			</div>
		)
	}	
}

SelectSkills.propTypes = {
	magicName: PropTypes.string,
	skillList: PropTypes.array
}

export default SelectSkills;