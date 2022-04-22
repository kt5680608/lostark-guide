import React, { useState } from "react";
import { Navbar, Logo } from "../../components";
import { Term } from "../../data";
import {
    Page,
    MainContainer,
    MarginBox,
    CloseButton,
    SubTitle,
    SubMainContainer,
    Content,
    ContentSpan,
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
} from "../../globalStyles/globalStyles";

function TermPage() {
    const [openTap1, setOpenTap1] = useState(false);
    const [openTap2, setOpenTap2] = useState(false);
    const [openTap3, setOpenTap3] = useState(false);
    const [openTap4, setOpenTap4] = useState(false);
    const [openTap5, setOpenTap5] = useState(false);
    const [openTap6, setOpenTap6] = useState(false);
    return (
        <Page>
            <MainContainer>
                <Navbar />
                <Logo />
                <SubMainContainer>
                    <SubTitle>용어 가이드</SubTitle>
                    <HighlightBox alignItems="flex-start">
                        <Content>
                            로스트아크에는 유저들이 사용하는 다양한 용어가
                            있습니다.
                            {<br />}용어 정리 탭에서는 로스트아크에서 유저들이
                            자주 사용하고 알아두면 유용한 용어들을 정리합니다.
                        </Content>
                    </HighlightBox>
                    <HighlightBox alignItems="flex-start">
                        <Content>
                            특정 컨텐츠에 대한 상세 설명이 필요하시다면{" "}
                            <ContentHighlight color="blue">
                                [주간 컨텐츠]
                            </ContentHighlight>
                            와{" "}
                            <ContentHighlight color="blue">
                                [일간 컨텐츠]
                            </ContentHighlight>{" "}
                            를 확인해주세요.
                        </Content>
                    </HighlightBox>
                    <SubtitleContainer onClick={() => setOpenTap1(!openTap1)}>
                        {openTap1 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>버스 관련</SubTitle>
                    </SubtitleContainer>
                    {openTap1 && (
                        <>
                            {Term.map(
                                (item) =>
                                    item.name === "bus" && (
                                        <>
                                            {item.termDic.map((dicItem) => (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <Content>
                                                            <ContentSpan
                                                                padding="1px 2px 1px 2px"
                                                                isHighlight
                                                            >
                                                                {
                                                                    dicItem.termName
                                                                }
                                                            </ContentSpan>{" "}
                                                            :{" "}
                                                            {
                                                                dicItem.description
                                                            }
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            ))}
                                        </>
                                    )
                            )}
                        </>
                    )}
                    <SubtitleContainer onClick={() => setOpenTap2(!openTap2)}>
                        {openTap2 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>스펙 관련</SubTitle>
                    </SubtitleContainer>
                    {openTap2 && (
                        <>
                            {Term.map(
                                (item) =>
                                    item.name === "spec" && (
                                        <>
                                            {item.termDic.map((dicItem) => (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <Content>
                                                            <ContentSpan
                                                                padding="1px 2px 1px 2px"
                                                                isHighlight
                                                            >
                                                                {
                                                                    dicItem.termName
                                                                }
                                                            </ContentSpan>{" "}
                                                            :{" "}
                                                            {
                                                                dicItem.description
                                                            }
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            ))}
                                        </>
                                    )
                            )}
                        </>
                    )}
                    <SubtitleContainer onClick={() => setOpenTap3(!openTap3)}>
                        {openTap3 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>아이템 관련</SubTitle>
                    </SubtitleContainer>
                    {openTap3 && (
                        <>
                            {Term.map(
                                (item) =>
                                    item.name === "item" && (
                                        <>
                                            {item.termDic.map((dicItem) => (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <Content>
                                                            <ContentSpan
                                                                padding="1px 2px 1px 2px"
                                                                isHighlight
                                                            >
                                                                {
                                                                    dicItem.termName
                                                                }
                                                            </ContentSpan>{" "}
                                                            :{" "}
                                                            {
                                                                dicItem.description
                                                            }
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            ))}
                                        </>
                                    )
                            )}
                        </>
                    )}
                    <SubtitleContainer onClick={() => setOpenTap4(!openTap4)}>
                        {openTap4 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>직업 관련</SubTitle>
                    </SubtitleContainer>
                    {openTap4 && (
                        <>
                            {Term.map(
                                (item) =>
                                    item.name === "jobs" && (
                                        <>
                                            {item.termDic.map((dicItem) => (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <Content>
                                                            <ContentSpan
                                                                padding="1px 2px 1px 2px"
                                                                isHighlight
                                                            >
                                                                {
                                                                    dicItem.termName
                                                                }
                                                            </ContentSpan>{" "}
                                                            :{" "}
                                                            {
                                                                dicItem.description
                                                            }
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            ))}
                                        </>
                                    )
                            )}
                        </>
                    )}
                    <SubtitleContainer onClick={() => setOpenTap5(!openTap5)}>
                        {openTap5 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>숙련도 관련</SubTitle>
                    </SubtitleContainer>
                    {openTap5 && (
                        <>
                            {Term.map(
                                (item) =>
                                    item.name === "proficiency" && (
                                        <>
                                            {item.termDic.map((dicItem) => (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <Content>
                                                            <ContentSpan
                                                                padding="1px 2px 1px 2px"
                                                                isHighlight
                                                            >
                                                                {
                                                                    dicItem.termName
                                                                }
                                                            </ContentSpan>{" "}
                                                            :{" "}
                                                            {
                                                                dicItem.description
                                                            }
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            ))}
                                        </>
                                    )
                            )}
                        </>
                    )}
                    <SubtitleContainer onClick={() => setOpenTap6(!openTap6)}>
                        {openTap6 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>기타</SubTitle>
                    </SubtitleContainer>
                    {openTap6 && (
                        <>
                            {Term.map(
                                (item) =>
                                    item.name === "others" && (
                                        <>
                                            {item.termDic.map((dicItem) => (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <Content>
                                                            <ContentSpan
                                                                padding="1px 2px 1px 2px"
                                                                isHighlight
                                                            >
                                                                {
                                                                    dicItem.termName
                                                                }
                                                            </ContentSpan>{" "}
                                                            :{" "}
                                                            {
                                                                dicItem.description
                                                            }
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            ))}
                                        </>
                                    )
                            )}
                        </>
                    )}
                    <MarginBox />
                </SubMainContainer>
            </MainContainer>
        </Page>
    );
}

export default TermPage;
