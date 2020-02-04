import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
    width: 100%;
    background: gray;
`;

const Header = (props) => {
    const {title} = props;
    return (
        <Container>
            {title}
        </Container>
    )
};

Header.defaultProps = {
    title: ''
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;