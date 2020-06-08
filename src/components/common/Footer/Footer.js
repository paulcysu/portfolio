import React from 'react';
import { 
    Container,
    StyledLink,
    StyledA,
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
            <div>
                <StyledLink to='/contact'>Paul Su</StyledLink>
                <StyledLink to='/contact'>su.paul.cy@gmail.com</StyledLink>
            </div>
        </Container>
    )
};

export default Footer;