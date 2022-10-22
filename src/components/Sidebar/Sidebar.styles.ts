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

    background-color: blue;
`;

export const SidebarElementSplitter = styled.div`
    width: 100%;
    height: 1px;
    margin: 16px 0;

    background-color: #DFE0EB;
`;

