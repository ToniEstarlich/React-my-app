import React, { useState, useEffect } from "react";

const TypewriterTerminal = ({
  lines = [
    "Initializing system...",
    "Loading modules...",
    "Connecting to server...",
    "Access granted ✔",
    "Welcome, Toni 🚀"
  ],
  speed = 50
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) return;

    if (currentText.length < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setCurrentText(lines[currentLine].slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentText("");
        setCurrentLine((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [currentText, currentLine, lines, speed]);

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-xl shadow-lg w-full max-w-lg">
      {displayedLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      {currentLine < lines.length && <p>{currentText}_</p>}
    </div>
  );
};

export default TypewriterTerminal;