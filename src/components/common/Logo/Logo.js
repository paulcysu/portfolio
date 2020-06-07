import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Title} from './styles'

const StyledLink = styled(
    styled(Link)`
        &:hover {
            cursor: pointer;
        }
    `
)

const PSLogo = () => {
    return (
        <Link to='/'>
            <Title>Paul Su</Title>
        </Link>
    )
}

export default PSLogo;