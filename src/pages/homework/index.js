import React from "react";
import { Navbar, Logo } from "../../components";
import { HomeworkIcon } from "../../components/navbar/style";
import { Page, MainContainer } from "../../globalStyles/globalStyles";
function HomeworkPage() {
    return (
        <Page>
            <MainContainer>
                <Navbar />
                <Logo />
            </MainContainer>
        </Page>
    );
}

export default HomeworkPage;
