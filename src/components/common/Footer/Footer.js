import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import { 
    Container,
    StyledLink,
    StyledA,
    ContactContainer,
} from './styles';

const Footer = ({location}) => {
    const [absoluteFooter, setAbsoluteFooter] = useState(true);

    useEffect(() => {
        if (location.pathname !== '/') {
            setAbsoluteFooter(false);
        } else {
            setAbsoluteFooter(true);
        }
    })

    const socialMedias = [
        {label: 'Linkenin', route: 'https://www.linkedin.com/in/paulcysu/'},
        {label: 'GitHub', route: 'https://github.com/paulcysu'}
    ];

    return (
        <Container absolute={absoluteFooter}>
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

Footer.defaultProps = {
    location: {},
};

Footer.propTypes = {
    location: PropTypes.objectOf(
        PropTypes.string
    )
};

export default withRouter(Footer);