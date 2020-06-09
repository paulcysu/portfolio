import styled from 'styled-components';

export const Container = styled.div`
    overflow: auto;
`;

export const Header = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 8% 12%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1200px) {
        padding: 8% 10%;
        flex-direction: column-reverse;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const CircleImage = styled.img`
    border-radius: 50%;
    border: 10px gray solid;
    @media (min-width: 320px) {
        width: 300px;
        height: 300px;
        margin-bottom: 25px;
    }
    @media (min-width: 900px) {
        width: 400px;
        height: 400px;
    }
    @media (min-width: 1800px) {
        width: 550px;
        height: 550px;
    }
`;