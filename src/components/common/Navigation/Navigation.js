import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
    width: 100%;
    background: gray;
`;

// const Text = styled.div`
//     color: #FFF;
//     font-size: 1.5rem;
//     font-weight: 700;
// `;

const Navigation = (props) => {
    return (
        <Container>
            <Logo route="/"/>
        </Container>
    )
};

Navigation.defaultProps = {
};

Navigation.propTypes = {
};

export default Navigation;