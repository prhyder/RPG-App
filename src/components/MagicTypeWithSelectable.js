import React from 'react';
import classNames from 'classnames';
import DisplaySkillNames from "./DisplaySkillNames";

class MagicType extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			skills: this.props.skillList.filter(skill => (skill.magicType === this.props._id) && (skill.points > 0))
		}
	};

	render() {
		var classes = classNames({
			'is-selected': this.props._id === this.props.selectedMagicType,
			'magic-type': true,
			'col-sm': true,
			'mx-auto': true
		});
		return (
			<div className={classes} onMouseDown={() => this.props.selectMagicType(this.props._id)}>
				<div className="name">
					{this.props.name}
				</div>
				{/* <img src={this.props.image} className="image" /> */}
				<div className="description">
					{this.props.description}
				</div>
				<div className="skill-names">
					<DisplaySkillNames {...this.state} />
				</div>
			</div>
		)
	}
};

export default MagicType;