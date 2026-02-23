import React, { useRef } from "react";

const MagneticButton = ({ text = "Hover me" }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    buttonRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div className="flex justify-center items-center h-40">
      <button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="px-6 py-3 bg-black text-white rounded-2xl font-semibold transition-transform duration-200"
      >
        {text}
      </button>
    </div>
  );
};

export default MagneticButton;