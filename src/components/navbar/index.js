import React from "react";
import { Link } from "react-router-dom";
import {
    MainNavbarContainer,
    NavbarContentContainer,
    NavbarItem,
    HomeIcon,
    PlayIcon,
    TermIcon,
    HomeworkIcon,
} from "./style";
function Navbar() {
    return (
        <MainNavbarContainer
            bg="#171721"
            width="100%"
            color="white"
            padding={0}
        >
            <NavbarContentContainer width="50%">
                <Link to="/">
                    <NavbarItem>
                        <HomeIcon size={24}></HomeIcon>홈
                    </NavbarItem>
                </Link>
                <Link to="/guide">
                    <NavbarItem>
                        <PlayIcon size={24}></PlayIcon>가이드
                    </NavbarItem>
                </Link>
                <Link to="/term">
                    <NavbarItem>
                        <TermIcon size={24}></TermIcon>용어
                    </NavbarItem>
                </Link>
                <Link to="/homework">
                    <NavbarItem>
                        <HomeworkIcon size={24} />
                        숙제
                    </NavbarItem>
                </Link>
            </NavbarContentContainer>
        </MainNavbarContainer>
    );
}

export default Navbar;
