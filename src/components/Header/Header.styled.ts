import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: absolute;
  padding-top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  @media (max-width: 1920px) {
    padding-top: 100px;
  }
  @media (max-width: 767px) {
    padding-top: 80px;
  }
`;
