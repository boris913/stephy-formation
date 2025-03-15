import React, { useState, useEffect } from 'react';

const DigitalClock = ({ timeZone }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div>
      <h2>Time in {timeZone}:</h2>
      <p>{time}</p>
    </div>
  );
};

export default DigitalClock;