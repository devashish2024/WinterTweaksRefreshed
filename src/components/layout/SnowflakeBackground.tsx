import { useEffect, useRef, useState } from "react";
import snowflakeSVG from "../../assets/snowflake.svg";

const MAX_SNOWFLAKES = 20;
const INTERVAL = 2500;

interface Snowflake {
  id: string;
  size: number;
  left: string;
  duration: string;
  opacity: number;
  endTime: number;
  rotation: number;
}

const SnowfallBackground = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const createSnowflake = (): Snowflake => {
    const id = Math.random().toString(36).substring(2, 9);
    const size = Math.floor(Math.random() * 20) + 6;
    const left = `${Math.floor(Math.random() * 100)}%`;
    const durationSeconds = Math.floor(Math.random() * 8) + 9;

    return {
      id,
      size,
      left,
      duration: `${durationSeconds}s`,
      opacity: Math.random() * 0.6 + 0.4,
      endTime: Date.now() + durationSeconds * 1000,
      rotation: Math.floor(Math.random() * 360),
    };
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSnowflakes((prev) => {
        const active = prev.filter((flake) => Date.now() < flake.endTime);
        const toAdd = Math.min(
          Math.floor(Math.random() * 3) + 3,
          MAX_SNOWFLAKES - active.length
        );
        const newFlakes =
          active.length < MAX_SNOWFLAKES
            ? Array.from({ length: toAdd }, () => createSnowflake())
            : [];
        return [...active, ...newFlakes];
      });
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ backgroundColor: "#2f486e" }}
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0"
          style={{
            left: flake.left,
            animation: `snowfall-${flake.id} ${flake.duration} linear forwards`,
            opacity: flake.opacity,
            zIndex: 0,
          }}
        >
          <img
            src={snowflakeSVG}
            alt="snowflake"
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              filter: "drop-shadow(0 0 1px rgba(255, 255, 255, 0.5))",
              transform: `rotate(${flake.rotation}deg)`,
              display: "block",
            }}
          />
          <style>
            {`@keyframes snowfall-${flake.id} {
                            0% { transform: translateY(-50px) rotate(0deg); }
                            100% { transform: translateY(100vh) rotate(${
                              360 + flake.rotation
                            }deg); }
                        }`}
          </style>
        </div>
      ))}
    </div>
  );
};

export default SnowfallBackground;
