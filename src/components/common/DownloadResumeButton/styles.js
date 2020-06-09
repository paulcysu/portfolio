import styled from 'styled-components';

export const Button = styled.div`
    color: #fff;
    background-color: #333;
    box-shadow: 0 10px 10px -8px rgba(0,0,0,.78);
    display: inline-block;
    position: relative;
    padding: .8em 2.1em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    border: 2px solid skyblue;
    text-shadow: none;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    box-sizing: border-box;
    :hover {
        background-color: dodgerblue;
        cursor: pointer;
    }
`