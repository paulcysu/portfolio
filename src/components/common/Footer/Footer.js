import React from 'react';
import { 
    Container,
    StyledLink,
    StyledA,
    ContactContainer,
} from './styles';

const Footer = () => {
    const socialMedias = [
        {label: 'Linkenin', route: 'https://www.linkedin.com/in/paulcysu/'},
        {label: 'GitHub', route: 'https://github.com/paulcysu'}
    ];

    return (
        <Container>
            <div>
                {
                    socialMedias.map(media => <StyledA href={media.route}>{media.label}</StyledA>)
                }
            </div>
            <ContactContainer>
                <StyledLink to='/contact'>Paul Su</StyledLink>
                <StyledLink to='/contact'>{process.env.email}</StyledLink>
            </ContactContainer>
        </Container>
    )
};

export default Footer;