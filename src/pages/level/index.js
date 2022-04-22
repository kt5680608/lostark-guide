import React, { useState } from "react";
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
} from "../../globalStyles/globalStyles";
import { Logo, Navbar } from "../../components";
import { islandHeart, giantHeart, levelGuide } from "../../data";
function LevelPage() {
    const [openLevel1370, setOpenLevel1370] = useState(false);
    const [openLevel1415, setOpenLevel1415] = useState(false);
    const [openLevel1475, setOpenLevel1475] = useState(false);
    const [openLevel1445, setOpenLevel1445] = useState(false);
    return (
        <Page>
            <MainContainer>
                <Logo />
                <SubMainContainer>
                    <SubTitle>레벨별 가이드</SubTitle>
                    <HighlightBox alignItems="flex-start">
                        <Content>
                            로스트아크에는 레벨별로 즐길 수 있는 컨텐츠가
                            달라집니다. 레벨별 가이드에서는 해당 레벨에서 즐길
                            수 있는 중요한 컨텐츠들을 위주로 설명드리겠습니다.{" "}
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
                    <SubtitleContainer
                        onClick={() => setOpenLevel1370(!openLevel1370)}
                    >
                        {openLevel1370 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>1370++</SubTitle>
                    </SubtitleContainer>
                    {openLevel1370 && (
                        <>
                            <HighlightBox alignItems="flex-start">
                                <ContentWarning size={1.2}>필독</ContentWarning>
                                <Content>
                                    기존에 사용하던 장비는 절대 15강 이상으로
                                    강화하시면 안됩니다. 15강 이상은 강화 확률이
                                    급격히 낮아집니다. 기존에 사용하던 장비를
                                    전설 장비로 교체 후{" "}
                                    <ContentHighlight color="red">
                                        [장비 계승]
                                    </ContentHighlight>
                                    을 통해 아이템 레벨을 그대로 가져가며 강화
                                    단계는 9단계 하락하여 높은 강화 확률을 챙길
                                    수 있습니다.
                                </Content>
                            </HighlightBox>
                            {levelGuide.map((item) => (
                                <>
                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            {item.setting.name}
                                        </SubMenuTitle>
                                        {item.settings.map(
                                            (settingsItem) =>
                                                settingsItem.id === 1370 && (
                                                    <>
                                                        <Content>
                                                            딜러:{" "}
                                                            {settingsItem.carry}
                                                        </Content>
                                                        <Content>
                                                            서포터:{" "}
                                                            {settingsItem.sup}
                                                        </Content>
                                                    </>
                                                )
                                        )}
                                    </HighlightBox>
                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            입장 가능 컨텐츠
                                        </SubMenuTitle>
                                        {item.available.map(
                                            (available) =>
                                                available.name < 1415 && (
                                                    <>
                                                        <SubMenuTitle>
                                                            {available.name}++
                                                        </SubMenuTitle>
                                                        <Content>
                                                            {available?.type ===
                                                                "[어비스 레이드]" && (
                                                                <ContentHighlight color="pink">
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentHighlight>
                                                            )}{" "}
                                                            {available?.type ===
                                                                "[군단장 레이드]" && (
                                                                <ContentQuest>
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentQuest>
                                                            )}{" "}
                                                            {available?.type ===
                                                                "[가디언 토벌]" && (
                                                                <ContentHighlight color="green">
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentHighlight>
                                                            )}{" "}
                                                            {
                                                                available.availableContent
                                                            }
                                                        </Content>
                                                    </>
                                                )
                                        )}
                                    </HighlightBox>
                                    <HighlightBox alignItems="flex-start">
                                        {item.equip.map(
                                            (equip) =>
                                                equip.id === 1370 && (
                                                    <>
                                                        <SubMenuTitle>
                                                            {equip.name}
                                                        </SubMenuTitle>

                                                        {equip.description.map(
                                                            (detail) =>
                                                                detail?.color ===
                                                                "orange" ? (
                                                                    <Content color="orange">
                                                                        {
                                                                            detail.description_detail
                                                                        }
                                                                    </Content>
                                                                ) : (
                                                                    <Content>
                                                                        {
                                                                            detail.description_detail
                                                                        }
                                                                    </Content>
                                                                )
                                                        )}
                                                    </>
                                                )
                                        )}
                                    </HighlightBox>

                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            장비 제작 NPC
                                        </SubMenuTitle>
                                        <Content>
                                            1370 장비 제작:{" "}
                                            {item.equipNpc.map(
                                                (npc) =>
                                                    npc.id === 1370 && (
                                                        <>
                                                            <ContentQuest>
                                                                {npc.type}{" "}
                                                            </ContentQuest>
                                                            <ContentNpc>
                                                                {npc.name}{" "}
                                                            </ContentNpc>
                                                        </>
                                                    )
                                            )}
                                        </Content>
                                    </HighlightBox>
                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>TIP</SubMenuTitle>

                                        {item.tip.map(
                                            (tip) =>
                                                tip.id === 1370 && (
                                                    <Content>
                                                        {tip.description}
                                                    </Content>
                                                )
                                        )}
                                    </HighlightBox>
                                </>
                            ))}
                            <CloseButton
                                onClick={() => {
                                    setOpenLevel1370(!openLevel1370);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                    <SubtitleContainer
                        onClick={() => setOpenLevel1415(!openLevel1415)}
                    >
                        {openLevel1415 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight marginRight={12} color="white" />
                        )}
                        <SubTitle>1415++</SubTitle>
                    </SubtitleContainer>
                    {openLevel1415 && (
                        <>
                            <HighlightBox alignItems="flex-start">
                                <Content>
                                    1415레벨 이후부터는{" "}
                                    <ContentHighlight color="purple">
                                        [군단장 레이드]
                                    </ContentHighlight>
                                    를 즐기실 수 있습니다. 이 구간 이후로는
                                    강화를 빠르게 올리기보다는 군단장 레이드
                                    컨텐츠를 즐기며 천천히 강화를 누르시는 걸
                                    추천드립니다.
                                </Content>
                            </HighlightBox>
                            {levelGuide.map((item) => (
                                <>
                                    {item.settings.map(
                                        (settingsItem) =>
                                            settingsItem.id === 1415 &&
                                            settingsItem.name ===
                                                "각인 세팅" && (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <SubMenuTitle>
                                                            {settingsItem.name}
                                                        </SubMenuTitle>
                                                        <Content>
                                                            딜러:{" "}
                                                            {
                                                                settingsItem?.carry
                                                            }
                                                        </Content>
                                                        <Content>
                                                            서포터:{" "}
                                                            {settingsItem?.sup}
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            )
                                    )}
                                    {item.settings.map(
                                        (settingsItem) =>
                                            settingsItem.id === 1415 &&
                                            settingsItem.name ===
                                                "악세 및 보석 세팅" && (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <SubMenuTitle>
                                                            {settingsItem.name}
                                                        </SubMenuTitle>
                                                        <Content>
                                                            장비:{" "}
                                                            <ContentHighlight color="orange">
                                                                {
                                                                    settingsItem.grade
                                                                }
                                                            </ContentHighlight>{" "}
                                                            {
                                                                settingsItem.equipSettings
                                                            }
                                                        </Content>
                                                        <Content>
                                                            보석:{" "}
                                                            {
                                                                settingsItem.jewelrySettings
                                                            }{" "}
                                                            <ContentHighlight color="purple">
                                                                {
                                                                    settingsItem.jewelry
                                                                }
                                                            </ContentHighlight>{" "}
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            )
                                    )}
                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            입장 가능 컨텐츠
                                        </SubMenuTitle>
                                        {item.available.map(
                                            (available) =>
                                                available.name < 1444 &&
                                                available.name > 1414 && (
                                                    <>
                                                        <SubMenuTitle>
                                                            {available.name}++
                                                        </SubMenuTitle>
                                                        <Content>
                                                            {available?.type ===
                                                                "[어비스 레이드]" && (
                                                                <ContentHighlight color="pink">
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentHighlight>
                                                            )}{" "}
                                                            {available?.type ===
                                                                "[군단장 레이드]" && (
                                                                <ContentQuest>
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentQuest>
                                                            )}{" "}
                                                            {available?.type ===
                                                                "[가디언 토벌]" && (
                                                                <ContentHighlight color="green">
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentHighlight>
                                                            )}{" "}
                                                            {
                                                                available.availableContent
                                                            }
                                                        </Content>
                                                    </>
                                                )
                                        )}
                                    </HighlightBox>
                                    <HighlightBox alignItems="flex-start">
                                        {item.equip.map(
                                            (equip) =>
                                                equip.id === 1415 && (
                                                    <>
                                                        <SubMenuTitle>
                                                            {equip.name}
                                                        </SubMenuTitle>

                                                        {equip.description.map(
                                                            (detail) =>
                                                                detail?.color ===
                                                                "orange" ? (
                                                                    <Content color="orange">
                                                                        {
                                                                            detail.description_detail
                                                                        }
                                                                    </Content>
                                                                ) : (
                                                                    <Content>
                                                                        <ContentHighlight color="green">
                                                                            {
                                                                                detail?.material
                                                                            }{" "}
                                                                        </ContentHighlight>
                                                                        :{" "}
                                                                        {
                                                                            detail.description_detail
                                                                        }
                                                                    </Content>
                                                                )
                                                        )}
                                                    </>
                                                )
                                        )}
                                    </HighlightBox>

                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            장비 제작 NPC
                                        </SubMenuTitle>
                                        <Content>
                                            1415 장비 제작:{" "}
                                            {item.equipNpc.map(
                                                (npc) =>
                                                    npc.id === 1415 && (
                                                        <>
                                                            <ContentQuest>
                                                                {npc.type}{" "}
                                                            </ContentQuest>
                                                            <ContentNpc>
                                                                {npc.name}{" "}
                                                            </ContentNpc>
                                                        </>
                                                    )
                                            )}
                                        </Content>
                                    </HighlightBox>
                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>TIP</SubMenuTitle>

                                        {item.tip.map(
                                            (tip) =>
                                                tip.id === 1415 && (
                                                    <Content>
                                                        {tip.description}
                                                    </Content>
                                                )
                                        )}
                                    </HighlightBox>
                                </>
                            ))}
                            <CloseButton
                                onClick={() => {
                                    setOpenLevel1415(!openLevel1415);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                    <SubtitleContainer
                        onClick={() => setOpenLevel1445(!openLevel1445)}
                    >
                        {openLevel1445 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight color="white" marginRight={12} />
                        )}
                        <SubTitle>1445++</SubTitle>
                    </SubtitleContainer>
                    {openLevel1445 && (
                        <>
                            <HighlightBox alignItems="flex-start">
                                <Content>
                                    1445레벨 이후부터는{" "}
                                    <ContentHighlight color="purple">
                                        [군단장 레이드] 발탄 하드
                                    </ContentHighlight>
                                    를 즐기실 수 있습니다. 이 구간 이후로는
                                    1475레벨 때를 대비하여 골드를 많이 모아놓는
                                    것이 중요합니다.
                                </Content>
                            </HighlightBox>
                            {levelGuide.map((item) => (
                                <>
                                    {item.settings.map(
                                        (settingsItem) =>
                                            settingsItem.id === 1445 && (
                                                <>
                                                    <HighlightBox alignItems="flex-start">
                                                        <SubMenuTitle>
                                                            {settingsItem.name}
                                                        </SubMenuTitle>
                                                        <Content>
                                                            {
                                                                settingsItem.description
                                                            }
                                                        </Content>
                                                        <Content>
                                                            {
                                                                settingsItem?.description_detail
                                                            }
                                                        </Content>
                                                    </HighlightBox>
                                                </>
                                            )
                                    )}

                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            입장 가능 컨텐츠
                                        </SubMenuTitle>
                                        {item.available.map(
                                            (available) =>
                                                available.name < 1474 &&
                                                available.name > 1430 && (
                                                    <>
                                                        <SubMenuTitle>
                                                            {available.name}++
                                                        </SubMenuTitle>
                                                        <Content>
                                                            {available?.type ===
                                                                "[어비스 레이드]" && (
                                                                <ContentHighlight color="pink">
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentHighlight>
                                                            )}{" "}
                                                            {available?.type ===
                                                                "[군단장 레이드]" && (
                                                                <ContentQuest>
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentQuest>
                                                            )}{" "}
                                                            {available?.type ===
                                                                "[가디언 토벌]" && (
                                                                <ContentHighlight color="green">
                                                                    {
                                                                        available.type
                                                                    }
                                                                </ContentHighlight>
                                                            )}{" "}
                                                            {
                                                                available.availableContent
                                                            }
                                                        </Content>
                                                    </>
                                                )
                                        )}
                                    </HighlightBox>
                                    <HighlightBox alignItems="flex-start">
                                        {item.equip.map(
                                            (equip) =>
                                                equip.id === 1445 && (
                                                    <>
                                                        <SubMenuTitle>
                                                            {equip.name}
                                                        </SubMenuTitle>

                                                        {equip.description.map(
                                                            (detail) =>
                                                                detail?.color ===
                                                                "orange" ? (
                                                                    <Content color="orange">
                                                                        {
                                                                            detail.description_detail
                                                                        }
                                                                    </Content>
                                                                ) : (
                                                                    <Content>
                                                                        <ContentHighlight color="green">
                                                                            {
                                                                                detail?.material
                                                                            }{" "}
                                                                        </ContentHighlight>
                                                                        :{" "}
                                                                        {
                                                                            detail.description_detail
                                                                        }
                                                                    </Content>
                                                                )
                                                        )}
                                                    </>
                                                )
                                        )}
                                    </HighlightBox>

                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>
                                            장비 제작 NPC
                                        </SubMenuTitle>
                                        <Content>
                                            1445 장비 제작:{" "}
                                            {item.equipNpc.map(
                                                (npc) =>
                                                    npc.id === 1415 && (
                                                        <>
                                                            <ContentQuest>
                                                                {npc.type}{" "}
                                                            </ContentQuest>
                                                            <ContentNpc>
                                                                {npc.name}{" "}
                                                            </ContentNpc>
                                                        </>
                                                    )
                                            )}
                                        </Content>
                                    </HighlightBox>
                                    <HighlightBox alignItems="flex-start">
                                        <SubMenuTitle>TIP</SubMenuTitle>

                                        {item.tip.map(
                                            (tip) =>
                                                tip.id === 1445 && (
                                                    <Content>
                                                        {tip.description}
                                                    </Content>
                                                )
                                        )}
                                    </HighlightBox>
                                </>
                            ))}
                            <CloseButton
                                onClick={() => {
                                    setOpenLevel1445(!openLevel1445);
                                }}
                            >
                                <p>닫기</p>
                            </CloseButton>
                        </>
                    )}
                    <SubtitleContainer
                        onClick={() => setOpenLevel1475(!openLevel1475)}
                    >
                        {openLevel1475 ? (
                            <PointerIconBottom color="white" marginRight={12} />
                        ) : (
                            <PointerIconRight color="white" marginRight={12} />
                        )}
                        <SubTitle>1475++</SubTitle>
                    </SubtitleContainer>
                    <MarginBox />
                </SubMainContainer>
                <Navbar />
            </MainContainer>
        </Page>
    );
}

export default LevelPage;
