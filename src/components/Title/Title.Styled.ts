import styled from "styled-components";
import { _variables } from "../../core/variables/palette";

export const TitleBigStyled = styled.h1<{ width?: number; height?: number }>`
  font-family: ${_variables.FONT.FAMILY.FONT_PRIMARY}, sans-serif;
  font-weight: ${_variables.FONT.WEIGHT.FW_BOLD};
  font-style: normal;
  font-size: ${_variables.FONT.SIZE.FS_LARGE};
  line-height: 104%;
  text-transform: uppercase;
  text-align: center;
  color: ${_variables.PALETTE.COLOR_PRIMARY};
  opacity: 0.39;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  margin: 0 auto;
  @media (max-width: 1920px) {
    font-size: ${_variables.FONT.SIZE.FS_MEDIUM};
  }
`;

export const TitleSmallStyled = styled.h2<{ width?: number; height?: number }>`
  font-family: ${_variables.FONT.FAMILY.FONT_PRIMARY}, sans-serif;
  font-weight: ${_variables.FONT.WEIGHT.FW_BOLD};
  font-size: ${_variables.FONT.SIZE.FS_MEDIUM};
  font-style: normal;
  line-height: 104%;
  text-align: center;
  text-transform: uppercase;
  color: ${_variables.PALETTE.COLOR_PRIMARY};
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
`;
