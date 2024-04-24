import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Clean-up function
    return () => {
      clearInterval(intervalId);
      console.log("Timer has been stopped and cleaned up.");
    };
  },[]); // Empty dependency array means this effect runs only once, like componentDidMount

  const handleStopTimer = () => {
    setTime(0); // Reset time to 0
  };

  return (
    <div>
      <h2>Timer: {time}</h2>
      <button onClick={handleStopTimer}>Stop Timer</button>
    </div>
  );
}

export default Timer;


