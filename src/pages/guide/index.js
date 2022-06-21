import React from "react";
import { Navbar, Logo } from "../../components";
import {
    Page,
    MainContainer,
    SubMainContainer,
    Box,
} from "../../globalStyles/globalStyles";
import {
    GuideCategoryBox,
    GuideCategoryContainer,
    OverlayBox,
    GuideCategoryName,
    MarginBox,
} from "./style";
import { atom, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
function GuidePage() {
    const guideState = atom({
        key: "guideKey",
        default: 0,
    });
    return (
        <Page>
            <MainContainer>
                <Logo />
                <Navbar />
                <SubMainContainer justifyContent="center">
                    <GuideCategoryContainer grid="66% 33%">
                        <Link to="/guide/level">
                            <GuideCategoryBox
                                width="97%"
                                height="30vh"
                                backgroundImage="url('http://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/8eccc0c425e2466ba71d3e9e6019abeb/e163867acd76419d9aec1b1ee4f4c769_1524103804.jpg')"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                            >
                                <OverlayBox>
                                    <GuideCategoryName>
                                        레벨 구간 별 가이드
                                    </GuideCategoryName>
                                </OverlayBox>
                            </GuideCategoryBox>
                        </Link>
                        <Link to="/guide/naesil/">
                            <GuideCategoryBox
                                width="97%"
                                height="30vh"
                                backgroundImage="url('https://t1.daumcdn.net/cfile/blog/247EC23357D64CD225')"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                            >
                                <OverlayBox>
                                    <GuideCategoryName>
                                        필수 내실 가이드
                                    </GuideCategoryName>
                                </OverlayBox>
                            </GuideCategoryBox>
                        </Link>
                    </GuideCategoryContainer>
                    <GuideCategoryContainer grid="1fr 1fr 1fr">
                        <Link to="/weekContent">
                            <GuideCategoryBox
                                width="97%"
                                height="30vh"
                                backgroundImage="url('https://w.namu.la/s/5ac297594a07639f77cf992808e5a6d5e7cec3ca6fbf087be47e271532aedb2d155b9b31fb3467ea50dcee2265eeeb6579f61e7040c466dc666102a5406f8b91dfbcf97416fc7a0ede54f3ed0fb07be3')"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                            >
                                <OverlayBox>
                                    <GuideCategoryName>
                                        주간 컨텐츠
                                    </GuideCategoryName>
                                </OverlayBox>
                            </GuideCategoryBox>
                        </Link>
                        <Link to="/dayContent">
                            <GuideCategoryBox
                                width="97%"
                                height="30vh"
                                backgroundImage="url('https://cdn-lostark.game.onstove.com/uploadfiles/notice/de39b97f579e4a0295de0daa968fd1ac.png')"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                            >
                                <OverlayBox>
                                    <GuideCategoryName>
                                        일일 컨텐츠
                                    </GuideCategoryName>
                                </OverlayBox>
                            </GuideCategoryBox>
                        </Link>
                        <GuideCategoryBox
                            width="97%"
                            height="30vh"
                            backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAiqiPB5vQs9t43TiFNo09NDgl7GrLFo4jw&usqp=CAU')"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                        >
                            <OverlayBox>
                                <GuideCategoryName>
                                    골드 수급처
                                </GuideCategoryName>
                            </OverlayBox>
                        </GuideCategoryBox>
                    </GuideCategoryContainer>
                </SubMainContainer>
            </MainContainer>
        </Page>
    );
}

export default GuidePage;
