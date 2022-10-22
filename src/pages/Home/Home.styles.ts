import styled from 'styled-components';

export const Content = styled.div`
    height: calc(100vh - 30px);
    margin-left: 255px;
    padding-bottom: 0;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background-color: #F7F8FC ;
`;

export const InfoElementsContainer = styled.div`
    height: 150px;
    margin-top: 58px;

    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
`;

export const Wrapper = styled.div`
    margin-top: 30px;
    padding: 16px;
    
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
`;


export const MainTableContainer = styled.div`
    padding: 15px;

    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #DFE0EB;

    
    h1 {
        margin-top: 10px;
        margin-bottom: 20px;
    }
`;


export const MainTableContent = styled.div`

`;

