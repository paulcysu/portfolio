import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    width: 100%;
    background: #222;
`;

export const StyledTab = styled(Link)`
    color: gray;
    font-size: 1.2rem;
    font-weight: 400;
    transition: .5s;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    :not(:last-child) {
        margin-right: 50px;
    }
    :hover {
        color: #fff;
    }
`;