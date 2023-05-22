import styled from "styled-components";
import { _variables } from "../../core/variables/palette";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 192px;
  display: flex;
  justify-content: center;
  background: ${_variables.PALETTE.COLOR_PRIMARY};
  @media (max-width: 1920px) {
    height: 160px;
  }
  @media (max-width: 767px) {
    height: 141px;
  }
`;
