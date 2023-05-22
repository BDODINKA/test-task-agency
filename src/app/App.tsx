import React, { SyntheticEvent, useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainStyledStyled } from "../components/common/Main/MainStyled.styled";
import { SectionCountDate } from "../SectionCountDate/SectionCountDate";
import { ModalMain } from "../components/common/Modal/ModalMain";
import { ModalSuccess } from "../components/common/Modal/ModalSuccess";

export const App = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Header />
      <MainStyledStyled>
        <SectionCountDate />
      </MainStyledStyled>
      <Footer emailHandler={() => setState(!state)} resetField={state} />
      <ModalMain open={state} setOpenModal={() => setState(false)}>
        <ModalSuccess
          onClickCard={(e: SyntheticEvent) => e.stopPropagation()}
          setClose={() => setState(!state)}
        />
      </ModalMain>
    </>
  );
};
