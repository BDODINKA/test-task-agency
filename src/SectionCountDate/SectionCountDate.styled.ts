import styled from "styled-components";
import { _variables } from "../core/variables/palette";

export const SectionCountDateStyled = styled.div`
  position: relative;
  overflow: hidden;

  & > svg {
    position: absolute;
    fill: ${_variables.PALETTE.COLOR_PRIMARY};

    &:nth-child(1) {
      right: 100%;
      transform: translate(55%, -39%);
    }

    &:nth-child(2) {
      left: 100%;
      rotate: 306deg;
      transform: translate(26%, -73%);
    }

    @media (max-width: 1920px) {
      width: 478px;
      height: 394px;
      &:nth-child(1) {
        transform: translate(53%, -46%);
      }

      &:nth-child(2) {
        rotate: 201deg;
        transform: translate(58%, 17%);
      }
    }
    @media (max-width: 767px) {
      width: 366px;
      height: 302px;
      &:nth-child(1) {
        transform: translate(50%, -50%);
      }

      &:nth-child(2) {
        transform: translate(55%, 25%);
      }
    }
  }
`;

export const SectionCountDateTitles = styled.div`
  padding-top: 213px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (max-width: 1920px) {
    padding-top: 326px;
    gap: 20px;
  }
  @media (max-width: 767px) {
    padding-top: 186px;
    gap: 16px;
  }
`;

export const SectionCountStyled = styled.div`
  padding-top: 32px;
`;

export const SectionCountDateButton = styled.div`
  padding: 72px 0 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  @media (max-width: 1920px) {
    padding: 34px 0 169px;
    gap: 15px;
  }
  @media (max-width: 767px) {
    padding: 34px 0 86px;
    gap: 14px;
  }
`;
