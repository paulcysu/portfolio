import React, {useEffect} from 'react';
import styled from 'styled-components';
import Navigation from '../common/Navigation/Navigation';

const Layout = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0;
    background-color: #222;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
`;

const Home = () => {
    useEffect(async () => {

    });

    return (
        <Layout>
            <Navigation/>
            <Title>Full Stack Web Hello </Title>
        </Layout>
    )
};

export default Home;