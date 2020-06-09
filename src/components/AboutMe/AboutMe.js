import React from 'react';
import ChangingTextAnimation  from 'components/common/ChangingTextAnimation/ChangingTextAnimation';
import { 
    CircleImage,
    Container,
    Header, 
    Title,  
} from './styles';

const AboutMe = () => {
    const languages = ['React', 'PHP', 'Javascript', 'Laravel', 'Node', 'Python'];

    return (
        <Container>
            <Header>
                <div>
                    <Title>Full Stack Web Developer</Title>
                    <ChangingTextAnimation texts={languages}/>
                </div>
                <CircleImage 
                    src='https://picsum.photos/500/500' 
                    alt="Paul's face"
                />
            </Header>
        </Container>
    )
};

export default AboutMe;