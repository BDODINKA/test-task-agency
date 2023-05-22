import styled, { css } from "styled-components";
import { _variables } from "../../../core/variables/palette";

export const ButtonStyled = styled.button<{
  $btnType: "input" | "close" | "default";
}>`
  cursor: pointer;
  border: none;
  ${(props) =>
    props.$btnType === "input" &&
    css`
      width: 43px;
      height: 43px;
      border-radius: 50%;
      background: ${_variables.PALETTE.COLOR_FIVE};
      @media (max-width: 1920px) {
        width: 33px;
        height: 33px;
      }
    `}

  ${(props) =>
    props.$btnType === "default" &&
    css`
      background: ${_variables.PALETTE.COLOR_SEVEN};
      border-radius: 40px;
      width: 200px;
      min-height: 60px;
      font-family: ${_variables.FONT.FAMILY.FONT_PRIMARY};
      font-weight: ${_variables.FONT.WEIGHT.FW_REGULAR};
      font-size: ${_variables.FONT.SIZE.FS_MEDIUM_SMALL};
      line-height: 150%;

      color: ${_variables.PALETTE.COLOR_FOUR};
    `}

  ${(props) =>
    props.$btnType === "close" &&
    css`
      width: 55px;
      height: 55px;
      background: transparent;

      & > svg {
        fill: ${_variables.PALETTE.COLOR_TWELVE};
      }
    `}
`;

export const LinkBtnStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 17px 28px;
  width: 240px;
  height: 60px;
  background: ${_variables.PALETTE.COLOR_SEVEN};
  border-radius: 40px;
  font-family: ${_variables.FONT.FAMILY.FONT_PRIMARY};
  font-style: normal;
  font-weight: ${_variables.FONT.WEIGHT.FW_REGULAR};
  font-size: ${_variables.FONT.SIZE.FS_MEDIUM_SMALL};
  line-height: 150%;
  color: ${_variables.PALETTE.COLOR_FOUR};
  text-decoration: none;
`;
