import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 5% 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1200px) {
        padding: 5% 10%;
        flex-direction: column-reverse;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
`;

export const CircleImage = styled.img`
    border-radius: 50%;
    border: 10px gray solid;
`;