import styled from 'styled-components';

export const Container = styled.div<{ sidebarIsOpen: boolean }>`
    width: 255px;

    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    bottom: 0;

    background-color: #363740;

    z-index: 10;
`;

export const BrandContainer = styled.div`
    height: 128px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
        color: #A4A6B3;
    }
`;

export const SidebarElementSplitter = styled.div`
    width: 100%;
    height: 1px;
    margin: 16px 0;

    background-color: #DFE0EB;
`;

export const Icon = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 13px;

    background-color: blue;
`;

