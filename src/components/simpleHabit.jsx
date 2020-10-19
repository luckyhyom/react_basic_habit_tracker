import React, { useRef, useState, useCallback, useEffect } from "react";

const SimpleHabit = (props) => {
  const [count, countSet] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    countSet(count + 1);
  });

  useEffect(() => {
    console.log(spanRef.current);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
