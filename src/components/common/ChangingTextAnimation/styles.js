import styled from 'styled-components';

export const Text = styled.div`
    font-size: 1.5rem;
    color: #fff;
    margin-left: 4px;
    -webkit-transition: opacity 3s ease-in-out;
    -moz-transition: opacity 3s ease-in-out;
    -ms-transition: opacity 3s ease-in-out;
    -o-transition: opacity 3s ease-in-out;
    opacity: ${(props) => props.fade ? "0" : "0.7"};
`;