import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    margin-bottom: 12px;

    border-radius: 8px;
    border: 1px solid #DFE0EB;

    display: flex;
    align-items: center;

    input {
        width: 20px;
        height: 20px;

        border-radius: 100%;
    }
`;

export const InfoContainer = styled.div`
    margin-left: 20px;
    
    h1 {
        margin: 0 !important;
        font-size: 16px;
        color: #252733
    }

    p {
        margin-top: 5px;
        font-size: 12px;
        color: #252733;
    }
`;


