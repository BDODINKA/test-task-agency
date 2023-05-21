import styled from "styled-components";
import { _variables } from "../../core/variables/palette";

export const SubTitleStyled = styled.h3<{ width?: number; height?: number }>`
  font-family: ${_variables.FONT.FAMILY.FONT_PRIMARY}, sans-serif;
  font-style: normal;
  font-weight: ${_variables.FONT.WEIGHT.FW_REGULAR};
  font-size: ${_variables.FONT.SIZE.FS_MEDIUM_SMALL};
  line-height: 150%;
  color: ${_variables.PALETTE.COLOR_SIX};
  text-align: center;
  text-transform: uppercase;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
`;
