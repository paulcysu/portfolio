import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from './styles'

const Logo = () => {
    return (
        <Link to='/'>
            <Title>Paul Su</Title>
        </Link>
    )
}

export default Logo;