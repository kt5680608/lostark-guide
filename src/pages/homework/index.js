import React, { useState, useEffect } from "react";
import { Navbar, Logo } from "../../components";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { dayWork, weekWork } from "../../data";
import {
    Page,
    QuestionIcon,
    MainContainer,
    MarginBox,
    CloseButton,
    SubTitle,
    MotionDefaultBox,
    SubMainContainer,
    Content,
    ContentHighlight,
    ContentNpc,
    SubMenuTitle,
    HighlightBox,
    HighlightWarningBox,
    ContentQuest,
    IconBox,
    PointerIconRight,
    PointerIconLeft,
    PointerIconBottom,
    SubtitleContainer,
    ContentLike,
    ContentWarning,
    ContentOrange,
    DefaultBox,
    ImageBox,
    Grid,
    YoutubeIcon,
    ContentSpan,
    DiscordIcon,
    OverlayBox,
} from "../../globalStyles/globalStyles";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Checkbox,
    Stack,
} from "@chakra-ui/react";
import {
    IconButton,
    IconButtonContainer,
    GridContainer,
    HomeWorkTitleBox,
} from "./style";
function HomeworkPage() {
    const [dayWorkState, setDayWorkState] = useState();
    const [weekWorkState, setWeekWorkState] = useState();
    const [allState, setAllState] = useState();
    const [handleDelete, setHandleDelete] = useState(false);
    const changeWeekState = (item) => {
        setWeekWorkState(item);
    };
    const changeDayState = (item) => {
        setDayWorkState(item);
    };
    const changeAllState = (item) => {
        setAllState(item);
    };
    useEffect(() => {
        setDayWorkState((prevState) => prevState?.map(() => false));
        setWeekWorkState((prevState) => prevState?.map(() => false));
        setHandleDelete(false);
    }, [handleDelete]);
    return (
        <Page>
            <MainContainer>
                <Navbar />
                <Logo />
                <SubMainContainer>
                    <HomeWorkTitleBox>
                        <SubTitle
                            onClick={() => {
                                console.log(dayWorkState);
                                console.log(weekWorkState);
                            }}
                        >
                            ?????? ??????
                        </SubTitle>

                        <IconButton
                            onClick={() => {
                                setAllState(!allState);
                                setHandleDelete(true);
                            }}
                        >
                            <DeleteIcon color="white" />
                        </IconButton>
                    </HomeWorkTitleBox>
                    <BasicUsage
                        weekWorkFunc={(item) => {
                            changeWeekState(item);
                        }}
                        dayWorkFunc={(item) => {
                            changeDayState(item);
                        }}
                        changeAllStateFunc={(item) => {
                            changeAllState(item);
                        }}
                        allState={allState}
                    />
                    {dayWork.map(
                        (item, idx) =>
                            dayWorkState !== undefined &&
                            dayWorkState[idx] === true && (
                                <HighlightBox
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Content>
                                        ?????? ??????{" "}
                                        <ContentSpan color="green">
                                            [{item.name}]
                                        </ContentSpan>
                                    </Content>
                                    <IconButton
                                        onClick={() => {
                                            setDayWorkState((prevState) =>
                                                prevState.map((item, index) =>
                                                    idx === index ? !item : item
                                                )
                                            );
                                        }}
                                    >
                                        <ContentSpan>??????</ContentSpan>
                                    </IconButton>
                                </HighlightBox>
                            )
                    )}
                    {weekWork.map(
                        (item, idx) =>
                            weekWorkState !== undefined &&
                            weekWorkState[idx] === true && (
                                <HighlightBox
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Content>
                                        ?????? ??????{" "}
                                        <ContentSpan color="purple">
                                            [{item.name}]
                                        </ContentSpan>
                                    </Content>
                                    <IconButton
                                        onClick={() => {
                                            setWeekWorkState((prevState) =>
                                                prevState.map((item, index) =>
                                                    idx === index ? !item : item
                                                )
                                            );
                                        }}
                                    >
                                        <ContentSpan>??????</ContentSpan>
                                    </IconButton>
                                </HighlightBox>
                            )
                    )}
                    <MarginBox />
                </SubMainContainer>
            </MainContainer>
        </Page>
    );
}

function BasicUsage(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dayWorkArr, setDayWorkArr] = useState([false, false, false]);
    const [weekWorkArr, setWeekWorkArr] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const handleCheckDayWorkArr = (index) => {
        setDayWorkArr((prevState) =>
            prevState.map((item, idx) => (idx === index ? !item : item))
        );
    };
    const handleCheckWeekWorkArr = (index) => {
        setWeekWorkArr((prevState) =>
            prevState.map((item, idx) => (idx === index ? !item : item))
        );
    };
    const submitWorkArr = () => {
        props.weekWorkFunc(weekWorkArr);
        props.dayWorkFunc(dayWorkArr);
        onClose();
    };
    useEffect(() => {
        setDayWorkArr((prevState) => prevState.map(() => false));
        setWeekWorkArr((prevState) => prevState.map(() => false));
    }, [props.allState]);
    return (
        <>
            <IconButtonContainer onClick={onOpen}>
                <IconButton>
                    <AddIcon color="white" />
                </IconButton>
            </IconButtonContainer>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Content weight={700} fontSize="1rem" color="black">
                            ?????? ????????????
                        </Content>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Content weight={500} fontSize="0.9rem" color="black">
                            ?????? ??????
                        </Content>
                        <Stack mt={1} spacing={1}>
                            {dayWork.map((item, idx) => (
                                <Checkbox
                                    isChecked={dayWorkArr[idx]}
                                    onChange={() => {
                                        handleCheckDayWorkArr(idx);
                                    }}
                                >
                                    {item.name}
                                </Checkbox>
                            ))}
                        </Stack>

                        <Stack mt={6} spacing={1}>
                            <Content
                                weight={500}
                                fontSize="0.9rem"
                                color="black"
                            >
                                ?????? ??????
                            </Content>
                            <GridContainer>
                                <Stack mt={1} spacing={1}>
                                    {weekWork.map((item, idx) => (
                                        <Checkbox
                                            isChecked={weekWorkArr[idx]}
                                            onChange={() => {
                                                handleCheckWeekWorkArr(idx);
                                            }}
                                        >
                                            {item.name}
                                        </Checkbox>
                                    ))}
                                </Stack>
                            </GridContainer>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                submitWorkArr();
                            }}
                        >
                            ????????????
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default HomeworkPage;
