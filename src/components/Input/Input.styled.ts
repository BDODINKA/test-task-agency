import styled from "styled-components";
import { _variables } from "../../core/variables/palette";

export const InputStyled = styled.input`
  background: ${_variables.PALETTE.COLOR_FOUR};
  border: 1px solid ${_variables.PALETTE.COLOR_SIX};
  box-shadow: 0 0 50px ${_variables.PALETTE.COLOR_EIGHT};
  border-radius: 40px;

  font-family: ${_variables.FONT.FAMILY.FONT_THIRD};
  font-weight: ${_variables.FONT.WEIGHT.FW_REGULAR};
  font-size: ${_variables.FONT.SIZE.FS_MEDIUM_SMALL};
  line-height: 150%;
  color: ${_variables.PALETTE.COLOR_PRIMARY};
  width: 440px;
  height: 59px;

  padding: 0 59px 0 27px;

  & ::placeholder {
    color: ${_variables.PALETTE.COLOR_NINE};
  }

  @media (max-width: 1920px) {
    width: 360px;
    height: 41px;
    font-size: ${_variables.FONT.SIZE.FS_SMALL_MEDIUM};
  }
  @media (max-width: 767px) {
    width: 280px;
  }
`;
