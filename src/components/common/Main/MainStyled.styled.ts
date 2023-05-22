import styled from "styled-components";

export const MainStyledStyled = styled.main`
  min-height: calc(100vh - 192px);
  position: relative;
  @media (max-width: 1920px) {
    min-height: calc(100vh - 160px);
  }
  @media (max-width: 767px) {
    min-height: calc(100vh - 141px);
  }
`;
