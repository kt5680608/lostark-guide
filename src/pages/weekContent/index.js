import React, { useState } from "react";
import { Logo, Navbar } from "../../components";
import { weekContent } from "../../data";
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
function WeekContentPage() {
    const [openGuardianChallange, setOpenGuardianChallange] = useState(false);
    const [openAbyssChallange, setOpenAbyssChallange] = useState(false);
    const [openAbyssDungeon, setOpenAbyssDungeon] = useState(false);
    const [openAbyssRaid, setOpenAbyssRaid] = useState(false);
    const [openCircus, setOpenCircus] = useState(false);
    const [openDejavu, setOpenDejavu] = useState(false);
    const [openCommanderRaid, setOpenCommanderRaid] = useState(false);
    const [itemName, setItemName] = useState("");
    return (
        <Page>
            <MainContainer>
                <Logo />
                <SubMainContainer>
                    <SubMenuTitle>주간 컨텐츠</SubMenuTitle>
                    <HighlightBox>
                        <ContentSpan color="red">[주의]</ContentSpan>
                        <Content>
                            <ContentSpan color="orange">
                                [한밤중의 서커스 리허설], [몽환의 아스탤지어
                                데자뷰]
                            </ContentSpan>
                            는 군단장 레이드와 횟수를 공유합니다. 군단장
                            레이드를 먼저 완료하시고 남는 군단장 레이드 기회를
                            상기 컨텐츠에 소모해주세요.
                        </Content>
                    </HighlightBox>
                    {weekContent.map((content) =>
                        content.nameArr.map(
                            (item) =>
                                item.id === 0 && (
                                    <>
                                        <SubtitleContainer
                                            onClick={() =>
                                                setOpenCircus(!openCircus)
                                            }
                                        >
                                            {openCircus ? (
                                                <PointerIconBottom
                                                    color="white"
                                                    marginRight={12}
                                                />
                                            ) : (
                                                <PointerIconRight
                                                    marginRight={12}
                                                    color="white"
                                                />
                                            )}
                                            <SubTitle>{item.name}</SubTitle>
                                        </SubtitleContainer>
                                        {openCircus && (
                                            <>
                                                <HighlightBox alignItems="flexStart">
                                                    <Content>
                                                        입장 가능 레벨:{" "}
                                                        <ContentSpan color="purple">
                                                            {item.limit}
                                                        </ContentSpan>{" "}
                                                        이상
                                                    </Content>
                                                    <Content>
                                                        타입:{" "}
                                                        {item.correction ===
                                                        true ? (
                                                            <ContentSpan>
                                                                보정 컨텐츠
                                                            </ContentSpan>
                                                        ) : (
                                                            <ContentSpan>
                                                                비보정 컨텐츠
                                                            </ContentSpan>
                                                        )}
                                                    </Content>
                                                    <Content>
                                                        보상:{" "}
                                                        <ContentSpan color="orange">
                                                            {item.compensation}
                                                        </ContentSpan>
                                                    </Content>
                                                </HighlightBox>
                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        교환 가능 아이템
                                                    </SubMenuTitle>
                                                    {item.compensationChange.map(
                                                        (compensation) => (
                                                            <>
                                                                <Content>
                                                                    {
                                                                        compensation.compensationDetail
                                                                    }
                                                                </Content>
                                                            </>
                                                        )
                                                    )}
                                                </HighlightBox>
                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        교환 NPC
                                                    </SubMenuTitle>
                                                    <Content>
                                                        각 거점도시의{" "}
                                                        <ContentSpan color="green">
                                                            {item?.npc}
                                                        </ContentSpan>
                                                    </Content>
                                                </HighlightBox>
                                            </>
                                        )}
                                    </>
                                )
                        )
                    )}
                    {weekContent.map((content) =>
                        content.nameArr.map(
                            (item) =>
                                item.id === 1 && (
                                    <>
                                        <SubtitleContainer
                                            onClick={() =>
                                                setOpenDejavu(!openDejavu)
                                            }
                                        >
                                            {openDejavu ? (
                                                <PointerIconBottom
                                                    color="white"
                                                    marginRight={12}
                                                />
                                            ) : (
                                                <PointerIconRight
                                                    marginRight={12}
                                                    color="white"
                                                />
                                            )}
                                            <SubTitle>{item.name}</SubTitle>
                                        </SubtitleContainer>
                                        {openDejavu && (
                                            <>
                                                <HighlightBox alignItems="flexStart">
                                                    <Content>
                                                        입장 가능 레벨:{" "}
                                                        <ContentSpan color="purple">
                                                            {item.limit}
                                                        </ContentSpan>{" "}
                                                        이상
                                                    </Content>
                                                    <Content>
                                                        타입:{" "}
                                                        {item.correction ===
                                                        true ? (
                                                            <ContentSpan>
                                                                보정 컨텐츠
                                                            </ContentSpan>
                                                        ) : (
                                                            <ContentSpan>
                                                                비보정 컨텐츠
                                                            </ContentSpan>
                                                        )}
                                                    </Content>
                                                    <Content>
                                                        보상:{" "}
                                                        <ContentSpan color="orange">
                                                            {item.compensation}
                                                        </ContentSpan>
                                                    </Content>
                                                </HighlightBox>
                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        교환 가능 아이템
                                                    </SubMenuTitle>
                                                    {item.compensationChange.map(
                                                        (compensation) => (
                                                            <>
                                                                <Content>
                                                                    {
                                                                        compensation.compensationDetail
                                                                    }
                                                                </Content>
                                                            </>
                                                        )
                                                    )}
                                                </HighlightBox>
                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        교환 NPC
                                                    </SubMenuTitle>
                                                    <Content>
                                                        각 거점도시의{" "}
                                                        <ContentSpan color="green">
                                                            {item?.npc}
                                                        </ContentSpan>
                                                    </Content>
                                                </HighlightBox>
                                            </>
                                        )}
                                    </>
                                )
                        )
                    )}
                    {weekContent.map((content) =>
                        content.nameArr.map(
                            (item) =>
                                item.id === 2 && (
                                    <>
                                        <SubtitleContainer
                                            onClick={() =>
                                                setOpenCommanderRaid(
                                                    !openCommanderRaid
                                                )
                                            }
                                        >
                                            {openCommanderRaid ? (
                                                <PointerIconBottom
                                                    color="white"
                                                    marginRight={12}
                                                />
                                            ) : (
                                                <PointerIconRight
                                                    marginRight={12}
                                                    color="white"
                                                />
                                            )}
                                            <SubTitle>{item.name}</SubTitle>
                                        </SubtitleContainer>
                                        {openCommanderRaid && (
                                            <>
                                                <HighlightBox alignItems="flexStart">
                                                    <Content>
                                                        입장 가능 레벨:{" "}
                                                        <ContentSpan color="purple">
                                                            {item.limit}
                                                        </ContentSpan>{" "}
                                                        이상
                                                    </Content>
                                                    <Content>
                                                        타입:{" "}
                                                        {item.correction ===
                                                        true ? (
                                                            <ContentSpan>
                                                                보정 컨텐츠
                                                            </ContentSpan>
                                                        ) : (
                                                            <ContentSpan>
                                                                비보정 컨텐츠
                                                            </ContentSpan>
                                                        )}
                                                    </Content>
                                                </HighlightBox>

                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        보상
                                                    </SubMenuTitle>
                                                    {item.compensation.map(
                                                        (compensation) => (
                                                            <>
                                                                <Content>
                                                                    {
                                                                        compensation.compensationDetail
                                                                    }
                                                                </Content>
                                                            </>
                                                        )
                                                    )}
                                                </HighlightBox>
                                            </>
                                        )}
                                    </>
                                )
                        )
                    )}
                    {weekContent.map((content) =>
                        content.nameArr.map(
                            (item) =>
                                item.id === 3 && (
                                    <>
                                        <SubtitleContainer
                                            onClick={() =>
                                                setOpenAbyssRaid(!openAbyssRaid)
                                            }
                                        >
                                            {openAbyssRaid ? (
                                                <PointerIconBottom
                                                    color="white"
                                                    marginRight={12}
                                                />
                                            ) : (
                                                <PointerIconRight
                                                    marginRight={12}
                                                    color="white"
                                                />
                                            )}
                                            <SubTitle>{item.name}</SubTitle>
                                        </SubtitleContainer>
                                        {openAbyssRaid && (
                                            <>
                                                <HighlightBox alignItems="flexStart">
                                                    <Content>
                                                        입장 가능 레벨:{" "}
                                                        <ContentSpan color="purple">
                                                            {item.limit}
                                                        </ContentSpan>{" "}
                                                        이상
                                                    </Content>
                                                    <Content>
                                                        타입:{" "}
                                                        {item.correction ===
                                                        true ? (
                                                            <ContentSpan>
                                                                보정 컨텐츠
                                                            </ContentSpan>
                                                        ) : (
                                                            <ContentSpan>
                                                                비보정 컨텐츠
                                                            </ContentSpan>
                                                        )}
                                                    </Content>
                                                </HighlightBox>

                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        보상
                                                    </SubMenuTitle>
                                                    {item.compensation.map(
                                                        (compensation) => (
                                                            <>
                                                                <Content>
                                                                    {
                                                                        compensation.compensationDetail
                                                                    }
                                                                </Content>
                                                            </>
                                                        )
                                                    )}
                                                </HighlightBox>
                                            </>
                                        )}
                                    </>
                                )
                        )
                    )}
                    {weekContent.map((content) =>
                        content.nameArr.map(
                            (item) =>
                                item.id === 4 && (
                                    <>
                                        <SubtitleContainer
                                            onClick={() =>
                                                setOpenAbyssChallange(
                                                    !openAbyssChallange
                                                )
                                            }
                                        >
                                            {openAbyssChallange ? (
                                                <PointerIconBottom
                                                    color="white"
                                                    marginRight={12}
                                                />
                                            ) : (
                                                <PointerIconRight
                                                    marginRight={12}
                                                    color="white"
                                                />
                                            )}
                                            <SubTitle>{item.name}</SubTitle>
                                        </SubtitleContainer>
                                        {openAbyssChallange && (
                                            <>
                                                <HighlightBox alignItems="flexStart">
                                                    <Content>
                                                        입장 가능 레벨:{" "}
                                                        <ContentSpan color="purple">
                                                            {item.limit}
                                                        </ContentSpan>{" "}
                                                        이상
                                                    </Content>
                                                    <Content>
                                                        타입:{" "}
                                                        {item.correction ===
                                                        true ? (
                                                            <ContentSpan>
                                                                보정 컨텐츠
                                                            </ContentSpan>
                                                        ) : (
                                                            <ContentSpan>
                                                                비보정 컨텐츠
                                                            </ContentSpan>
                                                        )}
                                                    </Content>
                                                </HighlightBox>

                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        보상
                                                    </SubMenuTitle>
                                                    {item.compensation.map(
                                                        (compensation) => (
                                                            <>
                                                                <Content>
                                                                    {
                                                                        compensation.compensationDetail
                                                                    }
                                                                </Content>
                                                            </>
                                                        )
                                                    )}
                                                </HighlightBox>
                                            </>
                                        )}
                                    </>
                                )
                        )
                    )}
                    {weekContent.map((content) =>
                        content.nameArr.map(
                            (item) =>
                                item.id === 5 && (
                                    <>
                                        <SubtitleContainer
                                            onClick={() =>
                                                setOpenGuardianChallange(
                                                    !openGuardianChallange
                                                )
                                            }
                                        >
                                            {openGuardianChallange ? (
                                                <PointerIconBottom
                                                    color="white"
                                                    marginRight={12}
                                                />
                                            ) : (
                                                <PointerIconRight
                                                    marginRight={12}
                                                    color="white"
                                                />
                                            )}
                                            <SubTitle>{item.name}</SubTitle>
                                        </SubtitleContainer>
                                        {openGuardianChallange && (
                                            <>
                                                <HighlightBox alignItems="flexStart">
                                                    <Content>
                                                        입장 가능 레벨:{" "}
                                                        <ContentSpan color="purple">
                                                            {item.limit}
                                                        </ContentSpan>{" "}
                                                        이상
                                                    </Content>
                                                    <Content>
                                                        타입:{" "}
                                                        {item.correction ===
                                                        true ? (
                                                            <ContentSpan>
                                                                보정 컨텐츠
                                                            </ContentSpan>
                                                        ) : (
                                                            <ContentSpan>
                                                                비보정 컨텐츠
                                                            </ContentSpan>
                                                        )}
                                                    </Content>
                                                </HighlightBox>

                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        보상
                                                    </SubMenuTitle>
                                                    {item.compensation.map(
                                                        (compensation) => (
                                                            <>
                                                                <Content>
                                                                    {
                                                                        compensation.compensationDetail
                                                                    }
                                                                </Content>
                                                            </>
                                                        )
                                                    )}
                                                </HighlightBox>
                                            </>
                                        )}
                                    </>
                                )
                        )
                    )}
                    {weekContent.map((content) =>
                        content.nameArr.map(
                            (item) =>
                                item.id === 6 && (
                                    <>
                                        <SubtitleContainer
                                            onClick={() =>
                                                setOpenAbyssDungeon(
                                                    !openAbyssDungeon
                                                )
                                            }
                                        >
                                            {openAbyssDungeon ? (
                                                <PointerIconBottom
                                                    color="white"
                                                    marginRight={12}
                                                />
                                            ) : (
                                                <PointerIconRight
                                                    marginRight={12}
                                                    color="white"
                                                />
                                            )}
                                            <SubTitle>{item.name}</SubTitle>
                                        </SubtitleContainer>
                                        {openAbyssDungeon && (
                                            <>
                                                <HighlightBox alignItems="flexStart">
                                                    <Content>
                                                        입장 가능 레벨:{" "}
                                                        <ContentSpan color="purple">
                                                            {item.limit}
                                                        </ContentSpan>{" "}
                                                        이상
                                                    </Content>
                                                    <Content>
                                                        타입:{" "}
                                                        {item.correction ===
                                                        true ? (
                                                            <ContentSpan>
                                                                보정 컨텐츠
                                                            </ContentSpan>
                                                        ) : (
                                                            <ContentSpan>
                                                                비보정 컨텐츠
                                                            </ContentSpan>
                                                        )}
                                                    </Content>
                                                </HighlightBox>

                                                <HighlightBox alignItems="flexStart">
                                                    <SubMenuTitle>
                                                        보상
                                                    </SubMenuTitle>
                                                    {item.compensation.map(
                                                        (compensation) => (
                                                            <>
                                                                <Content>
                                                                    {
                                                                        compensation.compensationDetail
                                                                    }
                                                                </Content>
                                                            </>
                                                        )
                                                    )}
                                                </HighlightBox>
                                            </>
                                        )}
                                    </>
                                )
                        )
                    )}
                    <MarginBox />
                </SubMainContainer>
            </MainContainer>
            <Navbar />
        </Page>
    );
}

export default WeekContentPage;
