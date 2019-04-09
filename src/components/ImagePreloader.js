import React from "react";
import PropTypes from "prop-types";

import tallPines from "../images/tallPines.png";
import availablePointsBackground from "../images/availablePointsBackground.png";
import borderBoards from "../images/borderBoards.png";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import parchment from "../images/parchment.png";

/**
 * Preloads all application images.
 */
class ImagePreloader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ImagesLoaded: props.ImagesLoaded,
			images: [
				tallPines,
				availablePointsBackground,
				borderBoards,
				leftArrow,
				rightArrow,
				parchment
			],
			counter: 0
		};

		this.imageLoaded = this.imageLoaded.bind(this);

	}

	imageLoaded = () => {
		let counter = this.state.counter + 1;
		this.setState({ counter: counter });

		if (this.state.images.length === counter) {
			this.state.ImagesLoaded();
		}
	}

	render() {
		var divStyle = {
			display: "none"
		};

		return (
			// Assigning the img src immediately requests the image and caches it in the browser.
			<div style={divStyle}>
				({this.state.images.map((image, index) => (
					<img src={image} key={index} onLoad={this.imageLoaded} onError={this.imageLoaded} />
				))});
			</div>
		);
	}
}

ImagePreloader.propTypes = {
	ImagesLoaded: PropTypes.func.isRequired
}

export default ImagePreloader;