import React, { useState, useEffect } from "react";
import { Navbar, Logo } from "../../components";
import { IframeContainer } from "./style";
import Youtube from "react-youtube";
import { Modal, Popover } from "hoondesign";
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
import { Youtubers } from "../../data";
function MainPage() {
    const Children = () => {
        return (
            <div>
                <p>안녕하세요</p>
            </div>
        );
    };
    return (
        <Page>
            <MainContainer>
                <Logo />
                <SubMainContainer>
                    <SubtitleContainer onHoverStart={{}}>
                        <SubTitle>로스트아크 유튜버</SubTitle>
                        <QuestionIcon color="white" size={18} />{" "}
                    </SubtitleContainer>

                    <Grid
                        drag="x"
                        dragConstraints={{
                            left: Youtubers?.length * -87,
                            right: 0,
                        }}
                    >
                        {Youtubers.map((youtuber) => (
                            <MotionDefaultBox
                                padding="4px 12px 4px 12px"
                                hoverColor="box-hover"
                                cursor="pointer"
                                onTap={() => {
                                    window.open(`${youtuber.url}`);
                                }}
                            >
                                <ImageBox
                                    width="100%"
                                    height="96px"
                                    backgroundImage={`url("${youtuber.thumbnail}")`}
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    borderRadius="50%"
                                />
                                <ContentHighlight>
                                    {youtuber.name}
                                </ContentHighlight>
                                <DefaultBox
                                    direction="row"
                                    bgColor="transparent"
                                    justifyContent="center"
                                >
                                    <YoutubeIcon color="red" size={20} />
                                    <ContentSpan>
                                        {youtuber.subscribers}
                                    </ContentSpan>
                                </DefaultBox>
                                {youtuber.content ? (
                                    <Content>{youtuber.content}</Content>
                                ) : (
                                    <Content> &nbsp;</Content>
                                )}
                            </MotionDefaultBox>
                        ))}
                    </Grid>
                    <SubTitle>하이퍼 익스프레스 추천 가이드</SubTitle>
                    <IframeContainer>
                        <iframe
                            width="100%"
                            height="360px"
                            src="https://www.youtube.com/embed/33iK9DTQMFE"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </IframeContainer>
                    <SubTitle>
                        로스트아크 통합 디스코드에 대해 아시나요?
                    </SubTitle>
                    <DefaultBox
                        backgroundImage="url('http://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/8eccc0c425e2466ba71d3e9e6019abeb/e163867acd76419d9aec1b1ee4f4c769_1524103804.jpg')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        rgba="rgba(0, 0, 0, 0.7)"
                        margin="12px 0px 12px 0px"
                    >
                        <OverlayBox>
                            <Content>
                                1. 파티, 레이드, 길드 구인 및 구직
                            </Content>
                            <Modal
                                modalButtonChildren="hihi"
                                modalContentChildren={<Children />}
                            ></Modal>
                            <Content>
                                2. 음성채널을 이용한 원활한 브리핑
                            </Content>
                            <Content>3. 다양한 편의 기능 및 정보 제공</Content>
                            <ContentHighlight marginTop={12} fontSize={1.1}>
                                36만명의 모험가분들과 소통하세요!
                            </ContentHighlight>

                            <DefaultBox
                                hoverColor="box-hover"
                                padding="12px 12px 12px 12px"
                                cursor="pointer"
                                direction="row"
                                onClick={() => {
                                    window.open("https://discord.gg/lark");
                                }}
                            >
                                <DiscordIcon size={36} color="#6F81C3" />
                                <SubMenuTitle>
                                    통합 디스코드 바로가기
                                </SubMenuTitle>
                            </DefaultBox>
                        </OverlayBox>
                    </DefaultBox>
                    <MarginBox />
                </SubMainContainer>
                <Navbar />
            </MainContainer>
        </Page>
    );
}

export default MainPage;
