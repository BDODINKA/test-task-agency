import React, { SyntheticEvent, useEffect, useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainStyledStyled } from "../components/common/Main/MainStyled.styled";
import { SectionCountDate } from "../SectionCountDate/SectionCountDate";
import { ModalMain } from "../components/common/Modal/ModalMain";
import { ModalSuccess } from "../components/common/Modal/ModalSuccess";
import { useSendToEmail } from "../core/hooks/useSendToEmail";

export const App = () => {
  const [state, setState] = useState(false);
  const { response, sendDataToEmail } = useSendToEmail();

  useEffect(() => {
    if (response === "Ok") {
      setState(true);
    }
  }, [response]);

  return (
    <>
      <Header />
      <MainStyledStyled>
        <SectionCountDate />
      </MainStyledStyled>
      <Footer emailHandler={sendDataToEmail} resetField={state} />
      <ModalMain open={state} setOpenModal={() => setState(false)}>
        <ModalSuccess
          onClickCard={(e: SyntheticEvent) => e.stopPropagation()}
          setClose={() => setState(!state)}
        />
      </ModalMain>
    </>
  );
};
