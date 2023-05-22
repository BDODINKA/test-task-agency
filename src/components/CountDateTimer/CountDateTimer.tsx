import { FC, useEffect } from "react";
import { useDataTimer } from "../../core/hooks/useDataTimer";
import { WindowCountStyled } from "../WindowCount/WindowCount.styled";
import { Lasting } from "../Lasting/Lasting";
import {
  CountDateTimerStyled,
  CountTimerItemsStyled,
} from "./CountDateTimer.styled";

export const CountDateTimer: FC<{ date: number }> = ({ date }) => {
  const {
    timerMinutes,
    timerDays,
    timerHours,
    interval,
    timerSeconds,
    startTimer,
  } = useDataTimer(date);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, [interval]);

  return (
    <CountDateTimerStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerDays}</WindowCountStyled>
        <Lasting title={"Days"} />
      </CountTimerItemsStyled>
      <WindowCountStyled>:</WindowCountStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerHours}</WindowCountStyled>
        <Lasting title={"Hours"} />
      </CountTimerItemsStyled>
      <WindowCountStyled>:</WindowCountStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerMinutes}</WindowCountStyled>
        <Lasting title={"Minutes"} />
      </CountTimerItemsStyled>
      <WindowCountStyled>:</WindowCountStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerSeconds}</WindowCountStyled>
        <Lasting title={"Seconds"} />
      </CountTimerItemsStyled>
    </CountDateTimerStyled>
  );
};
