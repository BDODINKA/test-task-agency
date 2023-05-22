import styled from "styled-components";

export const LogoStyled = styled.a`
  cursor: pointer;
  @media (max-width: 767px) {
    & > svg {
      width: 128px;
      height: 40px;
    }
  }
`;
