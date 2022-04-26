import React, { useState, useEffect } from "react";
import { Navbar, Logo } from "../../components";
import { HomeworkIcon } from "../../components/navbar/style";
import { AddIcon } from "@chakra-ui/icons";
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
import { IconButton, IconButtonContainer, GridContainer } from "./style";
function HomeworkPage() {
    const [dayWorkState, setDayWorkState] = useState();
    const [weekWorkState, setWeekWorkState] = useState();
    const changeWeekState = (item) => {
        setWeekWorkState(item);
    };
    const changeDayState = (item) => {
        setDayWorkState(item);
    };
    useEffect(() => {
        console.log(dayWorkState);
        console.log(weekWorkState);
    }, [dayWorkState, weekWorkState]);
    return (
        <Page>
            <MainContainer>
                <Navbar />
                <Logo />
                <SubMainContainer>
                    <SubTitle>숙제 검사</SubTitle>
                    <BasicUsage
                        weekWorkFunc={(item) => {
                            changeWeekState(item);
                        }}
                        dayWorkFunc={(item) => {
                            changeDayState(item);
                        }}
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
                                        일일 숙제{" "}
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
                                        <ContentSpan>완료</ContentSpan>
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
                                        주간 숙제{" "}
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
                                        <ContentSpan>완료</ContentSpan>
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
        setDayWorkArr((prevState) =>
            prevState.map((item, idx) => item !== false && !item)
        );
        setWeekWorkArr((prevState) =>
            prevState.map((item, idx) => item !== false && !item)
        );
        onClose();
    };
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
                            숙제 추가하기
                        </Content>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Content weight={500} fontSize="0.9rem" color="black">
                            일일 숙제
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
                                주간 숙제
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
                            추가하기
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default HomeworkPage;
