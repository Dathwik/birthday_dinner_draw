import { useEffect, useState } from "react";

function CountdownTimer() {
  const closingDate = new Date("2025-12-22T23:59:59");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = closingDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ expired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.expired) {
    return <p>⛔ Draw Closed</p>;
  }

  return (
    <p className="countdown-text">⏳
  <span className="text-shimmer">
     Time Left to Enter Draw:{" "}
    {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
  </span>
</p>

  );
}

export default CountdownTimer;
