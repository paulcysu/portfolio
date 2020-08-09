import styled from 'styled-components';

export const Container = styled.div`
    padding: 8% 12%;
    @media (max-width: 1200px) {
        padding: 8% 10%;
    }
`;

export const Subtitle = styled.div`
    color: #aaa;
    font-size: 1rem;
`;

export const Title = styled.div`
    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
`;

export const Text = styled.div`
    color: #fff;
    font-size: 1rem;
`;

export const SectionTitle = styled.div`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const Card = styled.div`
    background: #333;
    border-radius: 15px;
    box-shadow: 0 10px 10px -8px rgba(0,0,0,.78);
    border: 1px solid dimgray;
    padding: 20px;
    color: #fff;
`;

export const BoldText = styled.div`
    color: #fff;
    font-weight: 700;
`;

export const SpaceBetweenContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;