import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from "../header";
import axios from 'axios';

const Container = styled.div`
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
            <Header title={user.name}/>
        </Container>
    )
};

export default HomePage;