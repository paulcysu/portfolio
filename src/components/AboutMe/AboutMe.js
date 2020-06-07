import React, {useEffect} from 'react';
import { 
    CircleImage,
    Container, 
    Title,  
} from './styles';

const AboutMe = () => {
    useEffect(async () => {

    });

    return (
        <Container>
            <Title>Full Stack Web</Title>
            <CircleImage src='https://picsum.photos/500/500' alt="Paul's face"/>
        </Container>
    )
};

export default AboutMe;