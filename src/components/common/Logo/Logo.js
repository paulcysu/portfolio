import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Clickable = styled.div`
    :hover {
        cursor: pointer;
    }
`;

const PSImage = styled.div`
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
`;

const PSLogo = (props) => {
    const {route} = props;
    return (
        <Clickable>
            <Link to={route}>
                <PSImage>Paul Su</PSImage>
            </Link>
        </Clickable>
    )
}

PSLogo.defaultProps = {
    route: '/'
};

PSLogo.propTypes = {
    route: PropTypes.string
};

export default PSLogo;