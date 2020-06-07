import React from 'react';
import Tab from './Tab';
import { TabsContainer } from './styles';

const Tabs = () => {
    const tabs = [
        {label: 'About Me', route: '/'},
        {label: 'Resume', route: '/resume'},
        {label: 'Portfolio', route: '/portfolio'},
        {label: 'Contact', route: '/contact'},
    ];

    return (
        <div>
            {
                tabs.map(tab => <Tab label={tab.label} route={tab.route}/>)
            }
        </div>
    )
};

export default Tabs;