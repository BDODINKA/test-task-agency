import React, { FC, HTMLAttributes } from "react";
import { LastingStyled } from "./Lasting.styled";
import { ReactComponent as Icon } from "../../../assets/svg/leaves.svg";

export const Lasting: FC<
  HTMLAttributes<HTMLDivElement> & { title: string }
> = ({ title, ...rest }) => {
  return (
    <LastingStyled {...rest}>
      <Icon></Icon>
      <p>{title}</p>
    </LastingStyled>
  );
};
