import styled from "styled-components";
import { Box, Image } from "@chakra-ui/react";
export const GuideCategoryBox = styled(Box)`
    border-radius: 16px;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    background-size: cover;
`;
export const GuideCategoryContainer = styled.div`
    margin-top: 12px;
    width: 100%;
    display: grid;
    grid-template-columns: ${(props) => props.grid};
`;

export const OverlayBox = styled.div`
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }
`;

export const GuideCategoryName = styled.h2`
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    margin: 0 12px 0 12px;
`;

export const MarginBox = styled.div`
    width: 100%;
    height: 56px;
`;
