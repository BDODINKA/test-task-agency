import React, { FC, SyntheticEvent } from "react";
import { ModalContent, ModalWindow } from "./Modal.styled";
import { Title } from "../Title/Title";
import { SubTitle } from "../SubTitle/SubTitle";
import { Buttons } from "../Buttons/Buttons";

export const ModalSuccess: FC<{
  onClickCard: (e: SyntheticEvent) => void;
  setClose: () => void;
}> = ({ onClickCard, setClose }) => {
  return (
    <ModalWindow onClick={onClickCard}>
      <Buttons icon={true} $btnType={"close"} onClick={setClose} />
      <ModalContent>
        <Title children={"SUCCESS!"} size={"sm"} />
        <SubTitle
          children={"You have successfully subscribed to the email newsletter"}
        />
        <Buttons
          icon={false}
          $btnType={"default"}
          children={"Close"}
          onClick={setClose}
        />
      </ModalContent>
    </ModalWindow>
  );
};
