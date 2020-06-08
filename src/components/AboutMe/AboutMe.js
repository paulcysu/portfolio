import React from 'react';
import ChangingTextAnimation  from 'components/common/ChangingTextAnimation/ChangingTextAnimation';
import { 
    CircleImage,
    Container, 
    Title,  
} from './styles';

const AboutMe = () => {
    const languages = ['React', 'PHP', 'Javascript', 'Laravel', 'Node', 'Python'];

    return (
        <Container>
            <div>
                <Title>Full Stack Web Developer</Title>
                <ChangingTextAnimation texts={languages}/>
            </div>
            <CircleImage 
                src='https://picsum.photos/500/500' 
                alt="Paul's face"
            />
        </Container>
    )
};

export default AboutMe;