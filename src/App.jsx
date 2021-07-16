import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  });
  const [interv, setInterv] = useState();
  const [isStart, setIsStart] = useState(false);

  let updatedMs = time.miliseconds;
  let updatedS = time.seconds;
  let updatedM = time.minutes;
  let updatedH = time.hours;

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setIsStart(true);
  };

  const wait = (count) => {
    if (count === 2) {
      clearInterval(interv);
      setIsStart(false);
    }
  };

  const stop = () => {
    clearInterval(interv);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
    });
    setIsStart(false);
  };

  const reset = () => {
    clearInterval(interv);

    updatedS = 0;
    updatedM = 0;
    updatedH = 0;
    updatedMs = 0;

    start();
  };

  function run() {
    if (updatedH === 24) {
      updatedH = 0;
    }

    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }

    updatedMs++;

    return setTime({
      hours: updatedH,
      minutes: updatedM,
      seconds: updatedS,
      miliseconds: updatedMs,
    })
  };

  const myDoubleClick = (event) => {
    let timer;

    clearTimeout(timer);
    timer = setTimeout(wait, 299, event.detail);
  };

  return (
    <div className="app">
      <h1>
        {(time.hours > 9) ? time.hours : '0' + time.hours}
        {' : '}
        {(time.minutes > 9) ? time.minutes : '0' + time.minutes}
        {' : '}
        {(time.seconds > 9) ? time.seconds : '0' + time.seconds}
      </h1>
      <div className="app__buttons">
        {(isStart) ? (
          <>
            <button
              type="button"
              onClick={myDoubleClick}
              className="button"
            >
              Wait
            </button>

            <button
              type="button"
              onClick={reset}
              className="button"
            >
              Reset
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={start}
            className="button"
          >
            Start
          </button>
        )}

        <button
          type="button"
          onClick={stop}
          className="button"
        >
          Stop
        </button>
      </div>
    </div>
  );
};
