import { useEffect, useState } from 'react';

type Expression = 'idle' | 'listening' | 'thinking' | 'speaking' | 'happy';

interface AnimatedFaceProps {
  expression: Expression;
}

const AnimatedFace = ({ expression }: AnimatedFaceProps) => {
  const [blinkLeft, setBlinkLeft] = useState(false);
  const [blinkRight, setBlinkRight] = useState(false);

  // Blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkLeft(true);
      setBlinkRight(true);
      setTimeout(() => {
        setBlinkLeft(false);
        setBlinkRight(false);
      }, 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Eye configurations based on expression
  const getEyeState = () => {
    switch (expression) {
      case 'listening':
        return { leftEye: 30, rightEye: 30, leftPupil: 0, rightPupil: 0 };
      case 'thinking':
        return { leftEye: 25, rightEye: 25, leftPupil: -5, rightPupil: 5 };
      case 'speaking':
        return { leftEye: 28, rightEye: 28, leftPupil: 0, rightPupil: 0 };
      case 'happy':
        return { leftEye: 35, rightEye: 35, leftPupil: 0, rightPupil: 0 };
      default:
        return { leftEye: 28, rightEye: 28, leftPupil: 0, rightPupil: 0 };
    }
  };

  const eyeState = getEyeState();

  // Mouth configurations
  const getMouthPath = () => {
    switch (expression) {
      case 'listening':
        return 'M 140 200 Q 150 210 160 200';
      case 'thinking':
        return 'M 135 200 L 165 200';
      case 'speaking':
        return 'M 140 195 Q 150 210 160 195';
      case 'happy':
        return 'M 130 190 Q 150 215 170 190';
      default:
        return 'M 140 200 Q 150 205 160 200';
    }
  };

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full transition-all duration-300"
      >
        {/* Face */}
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="hsl(var(--primary))"
          className="transition-all duration-300"
        />
        
        {/* Left Eye */}
        <g className="transition-all duration-300">
          <ellipse
            cx={100 + eyeState.leftPupil}
            cy="120"
            rx="20"
            ry={blinkLeft ? 2 : eyeState.leftEye}
            fill="white"
          />
          {!blinkLeft && (
            <circle
              cx={100 + eyeState.leftPupil}
              cy="120"
              r="8"
              fill="hsl(var(--foreground))"
            />
          )}
        </g>

        {/* Right Eye */}
        <g className="transition-all duration-300">
          <ellipse
            cx={200 + eyeState.rightPupil}
            cy="120"
            rx="20"
            ry={blinkRight ? 2 : eyeState.rightEye}
            fill="white"
          />
          {!blinkRight && (
            <circle
              cx={200 + eyeState.rightPupil}
              cy="120"
              r="8"
              fill="hsl(var(--foreground))"
            />
          )}
        </g>

        {/* Mouth */}
        <path
          d={getMouthPath()}
          stroke="hsl(var(--foreground))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="transition-all duration-300"
        />

        {/* Speaking animation - moving mouth */}
        {expression === 'speaking' && (
          <ellipse
            cx="150"
            cy="205"
            rx="15"
            ry="10"
            fill="hsl(var(--background))"
            className="animate-pulse"
          />
        )}
      </svg>
    </div>
  );
};

export default AnimatedFace;
