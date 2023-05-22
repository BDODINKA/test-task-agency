import { useRef, useState } from "react";

export const useDataTimer = (date: number) => {
  const [timerDays, setTimerDays] = useState("");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");
  const [targetDate, setTargetDate] = useState(date);

  let interval = useRef().current;

  const startTimer = () => {
    const countDownDate = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        if (days < 10) setTimerDays(`0${days}`);
        else setTimerDays(`${days}`);
        if (hours < 10) setTimerHours(`0${hours}`);
        else setTimerHours(`${hours}`);
        if (minutes < 10) setTimerMinutes(`0${minutes}`);
        else setTimerMinutes(`${minutes}`);
        if (seconds < 10) setTimerSeconds(`0${seconds}`);
        else setTimerSeconds(`${seconds}`);
      }
    }, 1000);
  };

  return {
    timerDays,
    timerHours,
    timerMinutes,
    timerSeconds,
    interval,
    startTimer,
    setTargetDate,
  };
};
