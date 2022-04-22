import React, { useState } from "react";
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
import { Navbar, Logo } from "../../components";
import { levelGuide, dayContent } from "../../data";
function DayContent() {
    const [openGuardian, setOpenGuardian] = useState(false);
    const [openChaos, setOpenChaos] = useState(false);
    const [openEpona, setOpenEpona] = useState(false);

    return (
        <Page>
            <MainContainer>
                <Logo />
                <SubMainContainer>
                    <SubMenuTitle>일일 컨텐츠</SubMenuTitle>
                    <HighlightBox alignItems="flex-start">
                        <Content>
                            일일 컨텐츠는 매일 06시에 초기화 되며 재련 재료,
                            악세사리 등 성장에 필요한 여러 아이템을 수급할 수
                            있습니다.
                        </Content>
                    </HighlightBox>
                    <SubtitleContainer onClick={() => setOpenChaos(!openChaos)}>
                        {openChaos ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>카오스 던전</SubTitle>
                    </SubtitleContainer>
                    {openChaos && (
                        <>
                            {dayContent.map(
                                (item) =>
                                    item.name === "chaos" && (
                                        <>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    카오스 던전
                                                </SubMenuTitle>
                                                {item.description.map(
                                                    (description) => (
                                                        <>
                                                            <Content>
                                                                {
                                                                    description.descriptionDetail
                                                                }
                                                            </Content>
                                                        </>
                                                    )
                                                )}
                                            </HighlightBox>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    보상
                                                </SubMenuTitle>
                                                {item.compensation.map(
                                                    (compensation) => (
                                                        <>
                                                            <Content>
                                                                {
                                                                    compensation.name
                                                                }
                                                            </Content>
                                                        </>
                                                    )
                                                )}
                                            </HighlightBox>
                                        </>
                                    )
                            )}
                            <CloseButton
                                onClick={() => {
                                    setOpenChaos(!openChaos);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                    <SubtitleContainer
                        onClick={() => setOpenGuardian(!openGuardian)}
                    >
                        {openGuardian ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>가디언 토벌</SubTitle>
                    </SubtitleContainer>
                    {openGuardian && (
                        <>
                            {dayContent.map(
                                (item) =>
                                    item.name === "guardian" && (
                                        <>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    가디언 토벌
                                                </SubMenuTitle>
                                                {item.description.map(
                                                    (description) => (
                                                        <>
                                                            <Content>
                                                                {
                                                                    description.descriptionDetail
                                                                }
                                                            </Content>
                                                        </>
                                                    )
                                                )}
                                            </HighlightBox>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    기본 보상
                                                </SubMenuTitle>
                                                {item.compensation.map(
                                                    (compensation) =>
                                                        compensation.name ===
                                                            "basic" &&
                                                        compensation.compensationDetail.map(
                                                            (
                                                                compensationDetail
                                                            ) => (
                                                                <Content>
                                                                    {
                                                                        compensationDetail.name
                                                                    }
                                                                </Content>
                                                            )
                                                        )
                                                )}
                                            </HighlightBox>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    영혼 수확 보상
                                                </SubMenuTitle>
                                                {item.compensation.map(
                                                    (compensation) =>
                                                        compensation.name ===
                                                            "special" &&
                                                        compensation.compensationDetail.map(
                                                            (
                                                                compensationDetail
                                                            ) => (
                                                                <Content>
                                                                    {
                                                                        compensationDetail.name
                                                                    }
                                                                </Content>
                                                            )
                                                        )
                                                )}
                                            </HighlightBox>
                                        </>
                                    )
                            )}
                            <CloseButton
                                onClick={() => {
                                    setOpenGuardian(!openGuardian);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                    <SubtitleContainer onClick={() => setOpenEpona(!openEpona)}>
                        {openEpona ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>에포나 의뢰</SubTitle>
                    </SubtitleContainer>
                    {openEpona && (
                        <>
                            {dayContent.map(
                                (item) =>
                                    item.name === "epona" && (
                                        <>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    에포나 의뢰
                                                </SubMenuTitle>
                                                {item.description.map(
                                                    (description) => (
                                                        <>
                                                            <Content>
                                                                {
                                                                    description.descriptionDetail
                                                                }
                                                            </Content>
                                                        </>
                                                    )
                                                )}
                                            </HighlightBox>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    보상
                                                </SubMenuTitle>
                                                {item.compensation.map(
                                                    (compensation) => (
                                                        <>
                                                            <Content>
                                                                {
                                                                    compensation.name
                                                                }
                                                            </Content>
                                                        </>
                                                    )
                                                )}
                                            </HighlightBox>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    평판
                                                </SubMenuTitle>
                                                {item.reputationDescription.map(
                                                    (reputation) => (
                                                        <>
                                                            <Content>
                                                                {
                                                                    reputation.reputationDescriptionDetail
                                                                }
                                                            </Content>
                                                        </>
                                                    )
                                                )}
                                            </HighlightBox>
                                            <HighlightBox alignItems="flex-start">
                                                <SubMenuTitle>
                                                    추천 루트
                                                </SubMenuTitle>
                                                {item.recommand.map(
                                                    (recommand) => (
                                                        <>
                                                            <Content>
                                                                {
                                                                    recommand.descriptionDetail
                                                                }
                                                            </Content>
                                                        </>
                                                    )
                                                )}
                                            </HighlightBox>
                                        </>
                                    )
                            )}
                            <CloseButton
                                onClick={() => {
                                    setOpenEpona(!openEpona);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                </SubMainContainer>
                <MarginBox />
                <Navbar />
            </MainContainer>
        </Page>
    );
}

export default DayContent;
