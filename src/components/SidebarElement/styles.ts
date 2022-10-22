import styled from 'styled-components';

export const Container = styled.div`
    height: 56px;
    padding-left:32px;

    display: flex;
    align-items: center;

    cursor: pointer;

    transition: all 0.1s ease-in-out;

    p {
        font-size: 16px;
        color: #A4A6B3
    }

    &:hover {
        background-color: #9FA2B4;
    }

    &:hover > p {
        color: #DDE2FF;
    }
`;

export const Icon = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 26px;

    background-color: blue;
`;
