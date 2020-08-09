import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    border-top: 1px solid dimgray;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        position: ${props => props.absolute ? 'absolute' : 'unset'};
        bottom: 0;
    }
`;

export const StyledLink = styled(Link)`
    color: gray;
    font-size: 1.2rem;
    font-weight: 400;
    transition: .5s;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    :not(:first-child) {
        margin-left: 50px;
    }
    :hover {
        color: #fff;
    }
`;

export const StyledA = styled.a`
    color: gray;
    font-size: 1.2rem;
    font-weight: 400;
    transition: .5s;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    :not(:first-child) {
        margin-left: 50px;
    }
    :hover {
        color: #fff;
        cursor: pointer;
    }
`;

export const ContactContainer = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`;