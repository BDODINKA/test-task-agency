import styled from "styled-components";
import { _variables } from "../../core/variables/palette";
import { HTMLAttributes } from "react";

export const ModalContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & { open: boolean }
>`
  background: ${_variables.PALETTE.COLOR_TEN};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  padding-top: 90px;
  display: flex;
  gap: 29px;
  flex-direction: column;
  align-items: center;
`;

export const ModalWindow = styled.div`
  position: absolute;
  padding: 8px;
  width: 320px;
  height: 370px;
  background: ${_variables.PALETTE.COLOR_FOUR};
  border: 1px solid ${_variables.PALETTE.COLOR_ELEVEN};
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  & > :first-child {
    position: absolute;
    right: 0;
  }
`;
