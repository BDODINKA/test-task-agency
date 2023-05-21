import React from "react";
import { ModalContainer, ModalContent, ModalWindow } from "./Modal.styled";
import { Title } from "../Title/Title";
import { SubTitle } from "../SubTitle/SubTitle";
import { Button } from "../Button/Button";

export const Modal = () => {
  return (
    <ModalContainer>
      <ModalWindow>
        <Button icon={true} btnType={"close"} />
        <ModalContent>
          <Title children={"SUCCESS!"} size={"sm"} />
          <SubTitle
            children={
              "You have successfully subscribed to the email newsletter"
            }
          />
          <Button icon={false} btnType={"default"} children={"Close"} />
        </ModalContent>
      </ModalWindow>
    </ModalContainer>
  );
};
