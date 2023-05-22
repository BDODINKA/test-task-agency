import styled from "styled-components";

export const CountDateTimerStyled = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1920px) {
    gap: 13px;
  }
  @media (max-width: 767px) {
    gap: 4px;
  }
`;

export const CountTimerItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
