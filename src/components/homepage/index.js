import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from "../header";
import WaterRipple from "../water_ripple/WaterRipple";

const Container = styled.div`
    background: blue
`;

const HomePage = () => {
    const [user, setUser] = useState({
        name: 'Paul Su'
    });

    useEffect(async () => {
        // const userData = await axios('route-got-user-info');
        // setUser(userData)
    });

    return (
        <Container>
            <WaterRipple/>
        </Container>
    )
};

export default HomePage;