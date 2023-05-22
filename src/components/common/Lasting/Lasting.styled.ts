import styled from "styled-components";
import { _variables } from "../../../core/variables/palette";

export const LastingStyled = styled.div`
  width: 132px;
  height: 54px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    fill: ${_variables.PALETTE.COLOR_FIVE};
    width: 100%;
    height: auto;
  }

  & > p {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    overflow: hidden;

    font-family: ${_variables.FONT.FAMILY.FONT_PRIMARY};
    font-weight: ${_variables.FONT.WEIGHT.FW_REGULAR};
    font-size: ${_variables.FONT.SIZE.FS_SMALL_LARGE};
    line-height: 100%;

    color: ${_variables.PALETTE.COLOR_FOUR};
    text-align: center;
  }

  @media (max-width: 1920px) {
    width: 64px;
    & > p {
      font-size: ${_variables.FONT.SIZE.FS_SMALL};
    }
  }
`;
