import styled from "styled-components";

export const IconButton = styled.div`
    width: 36px;
    height: 36px;
    background-color: var(--g-color-background-box);
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: var(--g-color-background-box-hover);
    }
`;

export const IconButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
`;

export const HomeWorkTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;
