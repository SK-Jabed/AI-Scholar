"use client";
// CardSpotlight.jsx
import React, { useRef, useState } from "react";

const CardSpotlight = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      ref={cardRef}
      className={`card bg-base-100  relative  overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-10"
          style={{
            background:
              "radial-gradient(circle 350px at var(--x) var(--y), rgba(0, 150, 137, 0.3), transparent 80%)",
            "--x": `${position.x}px`,
            "--y": `${position.y}px`,
          }}
        />
      )}

      {/* Moving dots effect */}
      {isHovering && <MovingDots />}

      {/* Card content */}
      <div className="z-20 relative">{children}</div>
    </div>
  );
};

// A simplified version of the dots animation using CSS
const MovingDots = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
    </div>
  );
};







export { CardSpotlight };
