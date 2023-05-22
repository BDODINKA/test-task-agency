import React from "react";
import { Title } from "../components/common/Title/Title";
import { SubTitle } from "../components/common/SubTitle/SubTitle";
import { Wrapper } from "../components/common/Wrapper/Wrapper";
import {
  SectionCountDateButton,
  SectionCountDateStyled,
  SectionCountDateTitles,
  SectionCountStyled,
} from "./SectionCountDate.styled";
import { CountDateTimer } from "../components/CountDateTimer/CountDateTimer";
import { Button } from "../components/common/Button/Button";
import { ReactComponent as BgClaks } from "../assets/svg/Vector (1).svg";

export const SectionCountDate = () => {
  return (
    <Wrapper>
      <SectionCountDateStyled>
        <BgClaks />
        <BgClaks />
        <SectionCountDateTitles>
          <Title children={"Under Construction"} size={"lg"} />
          <SubTitle
            children={"We're making lots of improvements and will be back soon"}
            width={423}
            height={54}
          />
        </SectionCountDateTitles>
        <SectionCountStyled>
          <CountDateTimer date={Date.UTC(2023, 4, 31)} />
        </SectionCountStyled>
        <SectionCountDateButton>
          <SubTitle children={"Check our event page when you wait:"} />
          <Button $btnType={"link"} icon={true} children={"Go to the event"} />
        </SectionCountDateButton>
      </SectionCountDateStyled>
    </Wrapper>
  );
};
