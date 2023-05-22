import styled from "styled-components";
import { _variables } from "../../core/variables/palette";

export const WindowCountStyled = styled.div`
  font-family: ${_variables.FONT.FAMILY.FONT_PRIMARY};
  font-weight: ${_variables.FONT.WEIGHT.FW_SEMI_BOLD};
  font-size: ${_variables.FONT.SIZE.FS_LARGE};
  line-height: 100%;

  color: ${_variables.PALETTE.COLOR_PRIMARY};
  @media (max-width: 1920px) {
    font-size: ${_variables.FONT.SIZE.FS_MEDIUM};
  }
`;
