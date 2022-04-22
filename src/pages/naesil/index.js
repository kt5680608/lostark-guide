import React, { useState } from "react";
import { Logo, Navbar } from "../../components";
import { islandHeart, giantHeart, NaesilOthers } from "../../data";
import {
    Page,
    MainContainer,
    MarginBox,
    CloseButton,
    SubTitle,
    SubMainContainer,
    Content,
    ContentHighlight,
    ContentNpc,
    SubMenuTitle,
    HighlightBox,
    HighlightWarningBox,
    ContentQuest,
    PointerIconRight,
    PointerIconBottom,
    SubtitleContainer,
    ContentLike,
    ContentWarning,
    ContentOrange,
    ImageBox,
    DefaultBox,
} from "../../globalStyles/globalStyles";
function NaesilPage() {
    const [openIsland, setOpenIsland] = useState(false);
    const [openGiant, setOpenGiant] = useState(false);
    const [openAdventure, setOpenAdventure] = useState(false);
    const [openOthers, setOpenOthers] = useState(false);
    return (
        <Page>
            <MainContainer>
                <Logo />
                <SubMainContainer>
                    <SubTitle>필수 내실 가이드</SubTitle>
                    <HighlightBox alignItems="flex-start">
                        <Content>
                            내실을 쌓으며 여러 보상을 받을 수 있습니다. 하지만
                            다른 컨텐츠를 즐기지 않고 내실만 쌓는 것은 너무
                            따분하겠죠? 내실 가이드에서는 강해지기 위해
                            필수적으로 받아야하는{" "}
                            <ContentHighlight color="blue">
                                [스킬포인트 물약]
                            </ContentHighlight>{" "}
                            만을 다루겠습니다.
                        </Content>
                    </HighlightBox>
                    <HighlightBox alignItems="flex-start">
                        <Content>
                            필수 내실 가이드에 있는 모든 보상은{" "}
                            <ContentHighlight color="green">
                                [원정대 공유]
                            </ContentHighlight>{" "}
                            입니다.
                        </Content>
                    </HighlightBox>
                    <SubtitleContainer
                        onClick={() => setOpenIsland(!openIsland)}
                    >
                        {openIsland ? (
                            <PointerIconBottom color="white" />
                        ) : (
                            <PointerIconRight color="white" />
                        )}
                        <SubTitle>섬의 마음</SubTitle>
                    </SubtitleContainer>
                    {openIsland && (
                        <>
                            <HighlightBox alignItems="flex-start">
                                <Content>
                                    각 섬을 돌아다니며 퀘스트를 완료하면 섬의
                                    마음을 얻을 수 있으며 섬의 마음 20개를
                                    모으면 베른북부 옆에 있는 외로운 섬 오페르의{" "}
                                    <ContentHighlight color="green">
                                        [기에나 석상]
                                    </ContentHighlight>{" "}
                                    에 반납 후{" "}
                                    <ContentNpc>[오페르 할아버지]</ContentNpc>{" "}
                                    에게 스킬포인트 물약을 받을 수 있습니다.
                                </Content>
                                <Content>
                                    섬의 마음은 획득 유형과 필요 재료 위주로
                                    설명하겠습니다.
                                </Content>
                            </HighlightBox>
                            {islandHeart.map((island) => (
                                <HighlightBox alignItems="flex-start">
                                    <SubMenuTitle>{island.name}</SubMenuTitle>
                                    <Content>
                                        유형:
                                        <ContentHighlight color={island.color}>
                                            {" "}
                                            {island.type}
                                        </ContentHighlight>
                                    </Content>
                                    <Content>
                                        선행 퀘스트:{" "}
                                        {island.quest !== "없음" ? (
                                            <ContentHighlight color="purple">
                                                [{island.quest}]
                                            </ContentHighlight>
                                        ) : (
                                            island.quest
                                        )}
                                    </Content>
                                    {island.detail && (
                                        <Content>비고: {island.detail}</Content>
                                    )}
                                </HighlightBox>
                            ))}
                            <CloseButton
                                onClick={() => {
                                    setOpenIsland(!openIsland);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                    <SubtitleContainer onClick={() => setOpenGiant(!openGiant)}>
                        {openGiant ? (
                            <PointerIconBottom color="white" />
                        ) : (
                            <PointerIconRight color="white" />
                        )}
                        <SubTitle>거인의 심장</SubTitle>
                    </SubtitleContainer>
                    {openGiant && (
                        <>
                            <HighlightBox alignItems="flex-start">
                                <Content>
                                    거인의 심장은 섬의 마음과 마찬가지로 일정
                                    개수를 모아 보상을 받는 수집형 컨텐츠입니다.
                                    거인의 심장은 4개, 6개, 10개, 12개 수집 시{" "}
                                    <ContentHighlight color="blue">
                                        [스킬포인트 물약]
                                    </ContentHighlight>{" "}
                                    을 보상으로 수령할 수 있습니다.
                                </Content>
                            </HighlightBox>
                            <HighlightBox alignItems="flex-start">
                                <Content>
                                    필수 내실 가이드에서 10개의 거인의 심장을
                                    소개합니다. 나머지 2개는{" "}
                                    <ContentLike>[호감도]</ContentLike>가 필요한
                                    컨텐츠로 선택하여 진행하시면 됩니다.
                                </Content>
                            </HighlightBox>
                            {giantHeart.map((giant) => (
                                <HighlightBox alignItems="flex-start">
                                    <SubMenuTitle>{giant.name}</SubMenuTitle>
                                    <Content>유형: {giant.type}</Content>
                                    <Content>
                                        획득 방법:{" "}
                                        <ContentHighlight color="purple">
                                            {giant.method}
                                        </ContentHighlight>
                                    </Content>
                                    {giant.detail && (
                                        <Content>비고: {giant.detail}</Content>
                                    )}
                                </HighlightBox>
                            ))}
                            <CloseButton
                                onClick={() => {
                                    setOpenGiant(!openGiant);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                    {/* <SubtitleContainer
                        onClick={() => setOpenAdventure(!openAdventure)}
                    >
                        {openAdventure ? (
                            <PointerIconBottom color="white" />
                        ) : (
                            <PointerIconRight color="white" />
                        )}
                        <SubTitle>모험의 서</SubTitle>
                    </SubtitleContainer> */}
                    <SubtitleContainer
                        onClick={() => setOpenOthers(!openOthers)}
                    >
                        {openOthers ? (
                            <PointerIconBottom color="white" />
                        ) : (
                            <PointerIconRight color="white" />
                        )}
                        <SubTitle>기타</SubTitle>
                    </SubtitleContainer>
                    {openOthers &&
                        NaesilOthers.map((NaesilOther) => (
                            <>
                                <SubTitle>{NaesilOther.name}</SubTitle>
                                {NaesilOther.dateQuest.map((item) => (
                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            {item?.day}일차
                                        </SubMenuTitle>
                                        <Content>
                                            퀘스트 명: {item?.name}
                                        </Content>
                                        <Content>
                                            지역 명: {item?.mapName}
                                        </Content>
                                        <Content>
                                            NPC:
                                            {item.npc ? (
                                                <ContentHighlight color="green">
                                                    {" "}
                                                    [{item.npc}]
                                                </ContentHighlight>
                                            ) : (
                                                "없음"
                                            )}
                                        </Content>
                                        {item?.location && (
                                            <ImageBox
                                                width="90%"
                                                height="300px"
                                                backgroundImage={`url(${item.location})`}
                                                backgroundPosition="center"
                                                backgroundRepeat="no-repeat"
                                            ></ImageBox>
                                        )}
                                    </HighlightBox>
                                ))}
                            </>
                        ))}
                </SubMainContainer>
                <MarginBox />
                <Navbar />
            </MainContainer>
        </Page>
    );
}

export default NaesilPage;
