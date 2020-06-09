import React from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from './styles';

const DownloadResumeButton = ({style}) => {
    return (
        <Button style={style}>Download Resume</Button>
    )
}

DownloadResumeButton.defaultProps = {
    style: {}
}  

DownloadResumeButton.propTypes = {
    style: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    )
};

export default DownloadResumeButton;