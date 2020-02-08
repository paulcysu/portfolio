import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WaterRipple = (props) => {
    const {width, height, opacity} = props;

    const canvasStyle = {
        width,
        height,
        opacity
    };

    return (
        <>
            <canvas
                className="canvas"
                style={canvasStyle}
            />
            <div className="wrapper"/>
        </>
    )
};

WaterRipple.defaultProps = {
    width: '100%',
    height: '100%',
    opacity: 1,
};

WaterRipple.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    opacity: PropTypes.number,
};

export default WaterRipple;