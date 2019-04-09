import React from "react";
import {Link} from "react-router-dom";

const IntroScreen = props => (
	<div className="intro-screen">
        <p>Intro screen.</p>
        <Link to="/magicTypes" className="btn text-center">
            Continue
        </Link>
    </div>
);

export default IntroScreen;