import React from 'react';

const DisplaySkillNames = props => {
	return (
		<div className="display-skill-names container">
			<div className="row">
				<ul>
					{props.skills.map(skill => (
						<li key={skill._id}>{skill.name}: {skill.points}</li>
					))}
				</ul>
			</div>
		</div>
	)
}
export default DisplaySkillNames;