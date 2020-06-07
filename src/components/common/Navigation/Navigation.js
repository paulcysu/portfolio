import React from 'react';
import Logo from '../Logo/Logo';
import {Header} from './styles';
import Tabs from './Tabs';

const Navigation = () => {
    return (
        <Header>
            <Logo/>
            <Tabs/>
        </Header>
    )
};

export default Navigation;