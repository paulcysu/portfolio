import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { 
    Letter,
    Text
} from './styles';

const ChangingTextAnimation = ({texts}) => {
    const [displayText, setDisplayText] = useState({
        index: null,
        text: null
    });

    useEffect(() => {
        if (texts.length > 0) {
            setDisplayText({
                index: 0,
                text: texts[0]
            })
        }
    }, []);

    useEffect(() => {
        if (texts.length > 1) {
            setTimeout(() => {
                startChangingTextAnimation()
            }, 3000)
        }
    }, [displayText])

    const startChangingTextAnimation = () => {
        let index = displayText.index + 1;
        let text = texts[index];

        if (displayText.index === texts.length - 1) {
            index = 0;
            text = texts[index];
        }

        setDisplayText({
            index: index,
            text: text
        });
    }

    return (
        <Text>
            {
                displayText 
                && displayText.text 
                && displayText.text.split().map(letter => 
                    <Letter className='letter' key={letter + '-' + displayText.index + '-letter-key'}>{letter}</Letter>
                )
            }
        </Text>
    )
};

ChangingTextAnimation.defaultProps = {
    texts: []
};

ChangingTextAnimation.propTypes = {
    texts: PropTypes.arrayOf(
        PropTypes.string
    )
};

export default ChangingTextAnimation;