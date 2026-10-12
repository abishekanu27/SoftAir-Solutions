import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import BackgroundCanvas from './components/BackgroundCanvas';

const TARGET_DATE = new Date('2027-01-01T00:00:00').getTime();

export default function App() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = Date.now();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon-wrapper">
      {/* Dynamic Ambient Background with Interactive Particles */}
      <BackgroundCanvas />

      {/* Centered Coming Soon Presentation */}
      <main className="coming-soon-main">
        <div className="coming-soon-glow-backdrop" aria-hidden="true" />

        <div className="coming-soon-card">
          <h1 className="coming-soon-title">
            We are coming soon to the world...!
          </h1>

          {/* Countdown to Jan 01 2027 */}
          <div className="countdown-container">
            <div className="countdown-badge">
              <span className="countdown-pulse-dot" />
              <span>Target Launch &bull; Jan 01, 2027</span>
            </div>

            <div className="countdown-grid">
              <div className="countdown-unit">
                <div className="countdown-number">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="countdown-label">Days</div>
              </div>

              <span className="countdown-separator">:</span>

              <div className="countdown-unit">
                <div className="countdown-number">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="countdown-label">Hours</div>
              </div>

              <span className="countdown-separator">:</span>

              <div className="countdown-unit">
                <div className="countdown-number">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="countdown-label">Minutes</div>
              </div>

              <span className="countdown-separator">:</span>

              <div className="countdown-unit countdown-unit-seconds">
                <div className="countdown-number">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
