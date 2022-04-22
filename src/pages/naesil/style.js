import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
export const NaesilMainContainer = styled(Box)`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
`;

export const NaesilSubTitle = styled.h2`
    font-weight: 900;
    font-size: 1.6rem;
    color: white;
    margin: 12px 0 12px 0;
    &:hover {
        color: lightgray;
    }
`;

export const NaesilSubtitleContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border-radius: 24px;
    padding: 4px;
`;

export const NaesilHighlightBox = styled(Box)`
    margin: 12px 0 3px 0;
    background-color: var(--g-color-background-box);
    padding: 6px 12px 6px 12px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
`;

export const NaesilSubMenuTitle = styled.h2`
    font-weight: 900;
    font-size: 1.2rem;
    color: white;
    margin: 6px 0 6px 0;
`;

export const NaesilContent = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    color: white;
    margin: 6px 0 6px 0;
    font-weight: ${(props) => props.weight};
`;

export const NaesilContentHighlight = styled.span`
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--g-color-highlight-first);
    font-weight: bold;
`;

export const NaesilContentNpc = styled.span`
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--g-color-highlight-npc);
    font-weight: bold;
`;

export const NaesilContentQuest = styled.span`
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--g-color-highlight-quest);
    font-weight: bold;
`;

export const NaesilContentLike = styled(NaesilContentQuest)`
    color: var(--g-color-highlight-pink);
`;
export const PointerIconRight = styled(BsFillCaretRightFill)`
    margin-right: 12px;
`;

export const PointerIconBottom = styled(BsFillCaretDownFill)`
    margin-right: 12px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;
