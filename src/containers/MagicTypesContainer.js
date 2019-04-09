import React from 'react';
import MagicTypeWithSelectable from "../components/MagicTypeWithSelectable";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { magicTypeSelected } from "../actions/userActions";

class MagicTypesContainer extends React.Component{

	render() {
		return (
			<div className="magic-types-container container">
				<div className="row">
					<div className="col pt-3 text-center mx-auto">
						<div className="bg-gradient">
							<h2>Select a Magic Type</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{this.props.magicTypes.map(magicType => (
						<MagicTypeWithSelectable key={magicType._id} {...magicType} {...this.props} />
					))}
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<Link className="btn text-center"
							to={"/selectSkills"}
							style={this.props.selectedMagicType === null ? {"pointer-events": "none"} : {"pointer-events": "auto"}} >
							Select Skills	
						</Link>
					</div>
				</div>
			</div>
		)
	}
}
  
export const mapStateToProps = store => {
	return {
		selectedMagicType: store.userState.selectedMagicType,
		magicTypes: store.magicTypeState.magicTypes,
		skillList: store.userState.skillList
	};
}

export const mapDispatchToProps = dispatch => {
	return {
		selectMagicType: id => {
			dispatch(magicTypeSelected(id))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MagicTypesContainer);
