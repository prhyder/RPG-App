import React from 'react';
import classNames from 'classnames';

class MovingBackground extends React.Component{
	constructor() {
		super();
		this.state = {
			x: 0,
      		y: 0
		};
	};
	  
	_onMouseMove(e) {
		this.setState({ x: e.screenX, y: e.screenY });
		if (e.screenX < 200) {
			
		}
	}

	render() {
		const { x, y } = this.state;
		var divStyle = {
			color: 'white'
		};

		var classes = classNames({
			"moving-background": true,
			'is-selected': this.props._id === this.props.selectedMagicType,
			"far-left": this.state.x < 200,
			"left": this.state.x > 200 && this.state.x < 400
		});


		return (
			<div className={classes} onMouseMove={this._onMouseMove.bind(this)}>
				<div>
					{/* <h1 style={divStyle}>Mouse coordinates: {x} {y}</h1> */}
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default MovingBackground;