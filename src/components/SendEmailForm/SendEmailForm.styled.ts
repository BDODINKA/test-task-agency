import styled from "styled-components";

export const SendEmailFormStyled = styled.form`
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;

  & > button {
    position: absolute;
    right: 8px;
    @media (max-width: 1920px) {
      right: 4px;
    }
  }
`;
