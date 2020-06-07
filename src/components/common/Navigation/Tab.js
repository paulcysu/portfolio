import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Tab = ({label, route}) => {
    return (
        <Link to={route}>{label}</Link>
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