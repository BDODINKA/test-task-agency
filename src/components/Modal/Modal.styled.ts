import styled from "styled-components";
import { _variables } from "../../core/variables/palette";

export const ModalContainer = styled.div`
  background: ${_variables.PALETTE.COLOR_TEN};
  width: 100vw;
  height: 100vh;
  position: relative;
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
  left: 50%;
  transform: translate(-50%, 50%);
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
