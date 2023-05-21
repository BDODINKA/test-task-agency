import React from "react";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Title } from "../components/Title/Title";
import { SubTitle } from "../components/SubTitle/SubTitle";
import { Logo } from "../components/Logo/Logo";
import { CountDateTimer } from "../components/CountDateTimer/CountDateTimer";
import { Modal } from "../components/Modal/Modal";
import { MainStyledStyled } from "../components/Main/MainStyled.styled";

export const App = () => {
  return (
    <>
      <Header />
      <MainStyledStyled>
        <Wrapper>
          <Title
            children={"Under Construction"}
            size={"lg"}
            width={838}
            height={75}
          />
          <SubTitle
            children={"We're making lots of improvements and will be back soon"}
          />
          {/*<SubTitle children={"Check our event page when you wait:"} />*/}
          {/*<CountDateTimer />*/}
        </Wrapper>
      </MainStyledStyled>
      <Footer />
    </>
  );
};
