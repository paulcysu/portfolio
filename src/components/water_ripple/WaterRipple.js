import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './style.css';

// This WaterRipple is inspired by DPDK on codepen. https://codepen.io/dpdknl

const WaterRipple = (props) => {
    const {width, height, opacity} = props;
    const canvasRef = useRef(null);
    const [cursorLocation, setCursorLocation] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
        // cursorLocation.forEach(location => draw(ctx, location))
    });

    const canvasStyle = {
        width,
        height,
        opacity
    };

    const rippleSettings = {
        maxSize: 100,
        animationSpeed: 5,
        strokeColor: [148, 217, 255]
    };

    const canvasSettings = {
        blur: 8,
        ratio: 1,
    };

    function onCanvasMouseHover(e) {
        const newCursorLocation = { x: e.clientX, y: e.clientY }
        setCursorLocation([...cursorLocation, newCursorLocation]);
    }

    console.log('locations: ', cursorLocation);
    return (
        <>
            <canvas
                ref={canvasRef}
                className="canvas"
                style={canvasStyle}
                onMouseMove={e => onCanvasMouseHover(e)}
            />
            <div className="wrapper"/>
        </>
    )
};

WaterRipple.defaultProps = {
    width: '100%',
    height: '100vh',
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