import React, { useState, useEffect } from "react";

const quotes = [
  "Dream big, work hard.",
  "Code is poetry in motion.",
  "Stay curious, keep learning.",
  "Creativity is intelligence having fun.",
  "Progress over perfection."
];

const QuoteRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000); // cambia cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white text-center font-semibold">
      <p className="text-lg">{quotes[index]}</p>
      <small className="block mt-2 text-sm opacity-80">Quote of the moment</small>
    </div>
  );
};

export default QuoteRotator;