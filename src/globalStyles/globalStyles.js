import styled, { createGlobalStyle } from "styled-components";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
    BsFillCaretRightFill,
    BsFillCaretDownFill,
    BsFillCaretLeftFill,
    BsYoutube,
    BsDiscord,
    BsFillQuestionCircleFill,
} from "react-icons/bs";
export const GlobalStyle = createGlobalStyle`
    :root {
    --g-color-blue: #0057ff;
    --g-color-blue-overlay: #FCFCFF;
    --g-color-black: #000;
    --g-color-white: #fff;
    --g-color-gray0: #fff;
    --g-color-gray50: #fff;
    --g-color-gray100: #efefef;
    --g-color-gray150: #ddd;
    --g-color-gray200: #767676;
    --g-color-gray300: #111;
    --g-color-gray400: #000;    
    --g-color-background: #171620;
    --g-color-background-second: #171721;
    --g-color-background-box: #212529;
    --g-color-background-third: #621341;
    --g-color-background-transparent: transparent;
    --g-color-background-box-hover: #282C31;
    --g-color-background-span: #F7F7F7;
    --g-color-background-red: red;
    --g-color-highlight-first: #24AFDA;
    --g-color-highlight-blue: #24AFDA;
    --g-color-highlight-npc:#B7DE53;
    --g-color-highlight-green:#B7DE53;
    --g-color-highlight-quest: #7661B6;
    --g-color-highlight-purple: #7661B6;
    --g-color-highlight-pink: #FC1D8D;
    --g-color-highlight-orange: #DE7800;
    --g-color-highlight-red: red;

    --g-ncols: 12;
    
    --g-text-font-size-0: 8px;
    --g-text-font-size-1: 12px;
    --g-text-font-size-2: 14px;
    --g-text-font-size-3: 16px;
    --g-text-font-size-4: 18px;
    --g-text-font-size-5: 24px;
    --g-text-font-size-6: 36px;
    --g-text-font-size-7: 48px;
    --g-text-font-size-8: 60px;
    --g-text-font-size-9: 72px;

    html{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color:#171620;
        font-size: 16px;
    }


    }
    a {
    text-decoration: none;
    color: var(--color-black);
    margin: 0;
    padding: 0;
    cursor: pointer;
}

    a:visited {
    text-decoration: none;
    }
    iframe{
        margin-bottom: 24px;
    }

    a:hover {
    text-decoration: none;
    }

    a:focus {
    text-decoration: none;
    }

    a:hover,
    a:active {
    text-decoration: none;
    }

    h1{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    p{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    h2{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    figure{
        margin: 0;
        padding: 0;
    }
    li{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
`;

export const MainContainer = styled.div`
    background-color: #171620;
    width: 50vw;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MarginBox = styled.div`
    width: 100%;
    height: 56px;
`;

export const CloseButton = styled.div`
    margin-top: 12px;
    cursor: pointer;
    padding: 6px;
    color: white;
    background-color: var(--g-color-background-box);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    min-width: 48px;

    &:hover {
        background-color: var(--g-color-background-box-hover);
    }
`;

export const SubMainContainer = styled(Box)`
    margin-top: 24px;
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : "flex-start"};
`;

export const MainBox = styled(SubMainContainer)`
    align-items: flex-start;
`;

export const SubTitle = styled.h2`
    font-weight: 900;
    font-size: 1.2rem;
    color: white;
    margin: 12px 0 12px 0;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border-radius: 24px;
`;

export const HighlightBox = styled(Box)`
    margin: 12px 0 3px 0;
    background-color: var(--g-color-background-box);
    padding: 6px 12px 6px 12px;
    border-radius: 16px;
    display: flex;
    flex-direction: ${(props) =>
        props.direction ? `${props.direction}` : "column"};
    align-items: ${(props) =>
        props.alignItems ? `${props.alignItems}` : "center"};
    justify-content: ${(props) =>
        props.justifyContent ? `${props.justifyContent}` : "center"};
    cursor: ${(props) => (props.cursor ? `${props.cursor}` : "default")};
    &:hover {
        background-color: ${(props) =>
            props.hoverColor
                ? `var(--g-color-background-${props.hoverColor})`
                : "var(--g-color-background-box)"};
    }
`;

export const DefaultBox = styled(Box)`
    -webkit-user-drag: none;
    padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 0px")};
    background-color: ${(props) =>
        props.bgColor
            ? `var(--g-color-background-${props.bgColor})`
            : "var(--g-color-background-box)"};
    border-radius: 16px;

    display: flex;
    justify-content: ${(props) => props.justifyContent};
    flex-direction: ${(props) =>
        props.direction ? `${props.direction}` : "column"};

    align-items: ${(props) =>
        props.alignItems ? `${props.alignItems}` : "center"};
    margin: ${(props) => (props.margin ? props.margin : "12px 0px 12px 0px")};
    background-size: cover;
    &:hover {
        background-color: ${(props) =>
            props.hoverColor &&
            `var(--g-color-background-${props.hoverColor})`};
    }
`;

export const MotionDefaultBox = styled(motion.div)`
    padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 0px")};
    background-color: ${(props) =>
        props.bgColor
            ? `var(--g-color-background-${props.bgColor})`
            : "var(--g-color-background-box)"};
    border-radius: 16px;
    display: flex;
    flex-direction: ${(props) =>
        props.direction ? `${props.direction}` : "column"};

    align-items: ${(props) =>
        props.alignItems ? `${props.alignItems}` : "center"};
    margin: ${(props) => (props.margin ? props.margin : "12px 0px 12px 0px")};
    background-size: cover;
    min-width: 120px;
    max-height: ${(props) => props.maxWidth};
    &:hover {
        background-color: ${(props) =>
            props.hoverColor &&
            `var(--g-color-background-${props.hoverColor})`};
    }
`;

export const HighlightWarningBox = styled(HighlightBox)`
    background-color: var(--g-color-background-box-warning);
`;

export const SubMenuTitle = styled.h2`
    font-weight: 900;
    font-size: 1.2rem;
    color: white;
    margin: 6px 0 6px 0;
`;

export const Content = styled.p`
    font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9rem")};
    line-height: 1.5;
    color: ${(props) =>
        props.color ? `var(--g-color-highlight-${props.color})` : "white"};
    margin: 6px 0 6px 0;
    font-weight: ${(props) => props.weight};
`;

export const ContentSpan = styled.span`
    font-size: 0.9rem;
    background-color: ${(props) =>
        props.isHighlight ? "var(--g-color-background-third)" : "transparent"};
    line-height: 1.5;
    border-radius: 10%;
    border: none;
    padding: ${(props) => (props.padding ? props.padding : "0 0 0 0")};
    color: ${(props) =>
        props.color ? `var(--g-color-highlight-${props.color})` : "white"};
    margin: 3px 0 0px 0;
    font-weight: ${(props) => props.weight};
`;
export const ContentHighlight = styled.span`
    font-size: ${(props) =>
        props.fontSize ? `{props.fontSize}rem` : "0.9rem"};
    line-height: 1.5;
    color: ${(props) =>
        props.color ? `var(--g-color-highlight-${props.color})` : "white"};
    font-weight: bold;
    margin-top: ${(props) =>
        props.marginTop ? `${props.marginTop}px` : "0px"};
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : "0px"};
`;

export const ContentNpc = styled.span`
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--g-color-highlight-npc);
    font-weight: bold;
`;

export const ContentOrange = styled(ContentNpc)`
    font-size: 0.9rem;
    line-height: 1.5;
    color: orange;
    font-weight: bold;
`;
export const ContentQuest = styled.span`
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--g-color-highlight-quest);
    font-weight: bold;
`;

export const ContentLike = styled(ContentQuest)`
    color: var(--g-color-highlight-pink);
`;

export const ContentWarning = styled(ContentQuest)`
    color: red;
    font-size: ${(props) => props.size}rem;
    font-weight: 900;
`;
export const PointerIconRight = styled(BsFillCaretRightFill)`
    margin-right: ${(props) => props.marginRight}px;
    margin-left: ${(props) => props.marginLeft}px;
    cursor: pointer;
    &:hover {
        color: #e3e3e3;
    }
`;

export const PointerIconBottom = styled(BsFillCaretDownFill)`
    margin-right: ${(props) => props.marginRight}px;
    cursor: pointer;
`;

export const PointerIconLeft = styled(BsFillCaretLeftFill)`
    margin-right: ${(props) => props.marginRight}px;
    cursor: pointer;
`;

export const QuestionIcon = styled(BsFillQuestionCircleFill)`
    margin-left: 6px;
    cursor: pointer;
`;

export const IconBox = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
    padding: ${(props) => props.padding}px;
    background-color: var(--g-color-background-box);
    &:hover {
        background-color: var(--g-color-background-box-hover);
    }
`;

export const Grid = styled(motion.div)`
    cursor: grab;
    display: flex;

    flex-direction: row;
    width: 100%;
    gap: 12px;
    margin-bottom: 24px;
    align-items: center;
`;

export const ImageBox = styled(Box)`
    margin: 6px 0 6px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    background-size: cover;
`;

export const YoutubeIcon = styled(BsYoutube)`
    margin-right: 4px;
`;

export const DiscordIcon = styled(BsDiscord)`
    margin-right: 12px;
`;

export const OverlayBox = styled.div`
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 0px")};
    cursor: ${(props) => (props.cursor ? props.cursor : "default")};
    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }
`;
