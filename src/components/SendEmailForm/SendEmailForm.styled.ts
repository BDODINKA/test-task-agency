import styled from "styled-components";

export const SendEmailFormStyled = styled.form`
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;

  & > button {
    position: absolute;
    right: 8px;
    z-index: 100;
    @media (max-width: 1920px) {
      right: 4px;
    }
  }

  & > p {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 10px);
  }
`;
