import React, { useEffect, useState } from "react";

const CountDown = ({ inStock }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleCountDown = () => {
    let now = new Date().getTime();
    let futureDate = new Date("Jan 01, 2023 00:00:00");
    let dateDiff = futureDate - now;

    let sec = 1000;
    let mins = sec * 60;
    let hrs = mins * 60;
    let day = hrs * 24;

    let days = Math.floor(dateDiff / day);
    let hours = Math.floor((dateDiff % day) / hrs);
    let minutes = Math.floor((dateDiff % hrs) / mins);
    let seconds = Math.floor((dateDiff % mins) / sec);

    const addZero = (time) => (time < 10 ? "0" + time : time);

    setDays(addZero(days));
    setHours(addZero(hours));
    setMinutes(addZero(minutes));
    setSeconds(addZero(seconds));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleCountDown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="text-sm">Offer expires in:</p>
      <div className="mt-2 flex-align-center gap-2">
        <div className="text-center">
          <div className={`count-down-box ${!inStock && "!bg-slate-500"}`}>
            <span className="text-xs">{`${inStock ? days : "00"}`}</span>
          </div>
          <span className="text-xs">Day</span>
        </div>
        <div className="text-center">
          <div className={`count-down-box ${!inStock && "!bg-slate-500"}`}>
            <span className="text-xs">{`${inStock ? hours : "00"}`}</span>
          </div>
          <span className="text-xs">Hours</span>
        </div>
        <div className="text-center">
          <div className={`count-down-box ${!inStock && "!bg-slate-500"}`}>
            <span className="text-xs">{`${inStock ? minutes : "00"}`}</span>
          </div>
          <span className="text-xs">Min</span>
        </div>
        <div className="text-center">
          <div className={`count-down-box ${!inStock && "!bg-slate-500"}`}>
            <span className="text-xs">{`${inStock ? seconds : "00"}`}</span>
          </div>
          <span className="text-xs">Sec</span>
        </div>
      </div>
    </>
  );
};

export default CountDown;
