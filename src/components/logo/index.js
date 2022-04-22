import React from "react";
import { LogoMainContainer, Logo, Description } from "./style";
import { Link } from "react-router-dom";
function LogoHomeButton() {
    return (
        <LogoMainContainer>
            <Link to="/">
                <Logo>Forkoko</Logo>
            </Link>
            <Description>모코코를 위한 로스트아크 가이드</Description>
        </LogoMainContainer>
    );
}

export default LogoHomeButton;
