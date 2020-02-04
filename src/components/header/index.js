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

const Text = styled.div`
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 700;
`;

const Header = (props) => {
    const {title} = props;
    return (
        <Container>
            <Text>{title}</Text>
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