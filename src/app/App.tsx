import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainStyledStyled } from "../components/Main/MainStyled.styled";
import { SectionCountDate } from "../SectionCountDate/SectionCountDate";

export const App = () => {
  return (
    <>
      <Header />
      <MainStyledStyled>
        <SectionCountDate />
      </MainStyledStyled>
      <Footer />
    </>
  );
};
