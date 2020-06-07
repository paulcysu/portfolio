import React from 'react';
import PropTypes from 'prop-types';
import {StyledTab} from './styles';

const Tab = ({label, route}) => {
    return (
        <StyledTab to={route}>{label}</StyledTab>
    )
};

Tab.defaultProps = {
    label: '',
    route: '/',
};

Tab.propTypes = {
    label: PropTypes.string,
    route: PropTypes.string
};

export default Tab;