import { FC, useEffect, useState } from "react";
import { useDataTimer } from "../../core/hooks/useDataTimer";
import { WindowCountStyled } from "../common/WindowCount/WindowCount.styled";
import { Lasting } from "../common/Lasting/Lasting";
import {
  CountDateTimerStyled,
  CountTimerItemsStyled,
} from "./CountDateTimer.styled";
import { useWindowSize } from "../../core/hooks/useWindowSize";

export const CountDateTimer: FC<{ date: number }> = ({ date }) => {
  const {
    timerMinutes,
    timerDays,
    timerHours,
    interval,
    timerSeconds,
    startTimer,
  } = useDataTimer(date);

  const windowSize = useWindowSize();
  const [nameCounter, setNameCounter] = useState({
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  });

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, [interval, startTimer]);

  useEffect(() => {
    if (windowSize && windowSize.width <= 1920) {
      setNameCounter({
        days: "DD",
        hours: "HH",
        minutes: "MM",
        seconds: "SS",
      });
    }
    if (windowSize && windowSize.width > 1920) {
      setNameCounter({
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      });
    }
  }, [windowSize]);

  return (
    <CountDateTimerStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerDays}</WindowCountStyled>
        <Lasting title={nameCounter.days} />
      </CountTimerItemsStyled>
      <WindowCountStyled>:</WindowCountStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerHours}</WindowCountStyled>
        <Lasting title={nameCounter.hours} />
      </CountTimerItemsStyled>
      <WindowCountStyled>:</WindowCountStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerMinutes}</WindowCountStyled>
        <Lasting title={nameCounter.minutes} />
      </CountTimerItemsStyled>
      <WindowCountStyled>:</WindowCountStyled>
      <CountTimerItemsStyled>
        <WindowCountStyled>{timerSeconds}</WindowCountStyled>
        <Lasting title={nameCounter.seconds} />
      </CountTimerItemsStyled>
    </CountDateTimerStyled>
  );
};
