import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { AiFillHome, AiFillPlaySquare } from "react-icons/ai";
import { TiSortAlphabetically } from "react-icons/ti";
import { BsBookFill } from "react-icons/bs";
export const MainNavbarContainer = styled(Box)`
    position: fixed;
    bottom: 0;
    height: 56px;
    box-shadow: 0 -4px 16px rgb(0 0 0 / 32%);
    display: flex;
    justify-content: center;
`;

export const NavbarContentContainer = styled(Box)`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NavbarItem = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    cursor: pointer;
`;

export const HomeIcon = styled(AiFillHome)`
    margin-bottom: 4px;
`;

export const PlayIcon = styled(AiFillPlaySquare)`
    margin-bottom: 4px;
`;

export const TermIcon = styled(TiSortAlphabetically)`
    margin-bottom: 4px;
`;

export const HomeworkIcon = styled(BsBookFill)`
    margin-bottom: 4px;
`;
