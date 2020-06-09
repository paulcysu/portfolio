import React from 'react';
import DownloadResumeButton from 'components/common/DownloadResumeButton/DownloadResumeButton';
import {
    Container,
    Subtitle,
    Title,
    Text,
    SectionTitle
} from './styles';

const Resume = () => {
    console.log('process env: ', process.env);
    return (
        <Container>
            <Subtitle>Full Stack Web Developer</Subtitle>
            <Title>Paul Su</Title>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestiae ipsam eveniet totam unde iure officiis corporis doloremque cumque, rerum similique facere necessitatibus maxime asperiores vel ex! Asperiores, culpa dolorum.</Text>
            <Subtitle>{process.env.EMAIL}</Subtitle>
            <Subtitle>Full Stack Web Developer</Subtitle>
            <DownloadResumeButton style={{marginTop: 10}}/>
        </Container>
    )
};

export default Resume;