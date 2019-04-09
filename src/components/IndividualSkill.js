import React from "react";
import PropTypes from "prop-types";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

const Skill = props => (
    <div className="skill container-fluid">
        <div className="row">
            <div className="col-8">
                <div className="name">
                    {props.name}
                </div>
                {/* <div className="description ">
                    {props.description}
                </div> */}
            </div>
            <div className="col-4">
                <div className="d-flex">
                    <DecrementButton {...props} />
                    <div className="points text-center">
                        {props.points}
                    </div>
                    <IncrementButton {...props} />
                </div>
            </div>
        </div>
    </div>
);

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    points: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    incrementSkillPoints: PropTypes.func.isRequired,
    decrementSkillPoints: PropTypes.func.isRequired
};

Skill.defaultProps = {
    points: 0
};

export default Skill;