import React from 'react';
import DownloadResumeButton from 'components/common/DownloadResumeButton/DownloadResumeButton';
import {
    Card,
    Container,
    Subtitle,
    Title,
    Text,
    SectionTitle,
    SpaceBetweenContainer,
    BoldText
} from './styles';

const Resume = () => {
    return (
        <Container>
            <Subtitle>Full Stack Web Developer</Subtitle>
            <Title>Paul Su</Title>
            <Text>
                Developer with expertise and 
                vocational background contributing to
                multiple projects. After four years college degree in Economics, 
                I attended a coding bootcamp to gain additional skills.
                Seek the opportunity and contribute 
                expertise to a company that encourages
                robust and well-designed programming
                techniques and promotes best practices.
            </Text>
            <Subtitle>{process.env.EMAIL}</Subtitle>
            <Subtitle>Full Stack Web Developer</Subtitle>
            <DownloadResumeButton style={{marginTop: 10, marginBottom: 30}}/>

            <SectionTitle>Work Experience</SectionTitle>
            <Card>
                <BoldText>Tom Ferry International</BoldText>
                <SpaceBetweenContainer>
                    <Subtitle>Tom Ferry International, Santa Ana, CA</Subtitle>
                    <Subtitle>2019 – Present</Subtitle>
                </SpaceBetweenContainer>
                <ul>
                    <li>Develop source code using React, JavaScript, Bootstrap 4, Materialize CSS, Material UI, Grid, Flexbox, SCSS, and CSS to produce responsive mobile-based web pages.</li>
                    <li>Use controllers, queues, observers, events, eloquent, and queries to generate application programming interfaces (API) and routes.</li>
                    <li>Contribute skills to convert, refactor, and maintain legacy jQuery and HTML files to React reusable components.</li>
                    <li>Enhance database capabilities through writing and incorporating PostgreSQL and Laravel (PHP) code for execution of commands, controllers, helpers, migrations, and models.</li>
                    <li>Successfully debug complex front end and back end teams by using debuggers, logs, xDebug, and other libraries-specific debugging tools.</li>
                    <li>To help the team complete work before deadlines, assisted senior developers by writing code, test, and debug applications.</li>
                    <li>Promoted to Fullstack Developer from Frontend Developer after learning Laravel and mastering PHP.</li>
                </ul>
            </Card>
            

        </Container>
    )
};

export default Resume;