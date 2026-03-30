import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  function handleCounter(number) {
    if (number === "random") {
      const randomValue = Math.floor(Math.random() * 41 - 20);
      setCounter(prev => prev + randomValue);
    } else {
      setCounter(prev => prev + number);
    }
  }

  return (
    <div>
      <section className="counter-section">
        <h2>Counter Component</h2>
        <h3>Valor actual:</h3>
        <p>{counter}</p>
        <section className="counter-buttons">
          <button onClick={() => handleCounter(1)}>+</button>
          <button onClick={() => handleCounter(10)}>++</button>
          <button onClick={() => setCounter(0)}>Reset</button>
          <button onClick={() => handleCounter("random")}>Random</button>
          <button onClick={() => handleCounter(-10)}>--</button>
          <button onClick={() => handleCounter(-1)}>-</button>
        </section>
      </section>
    </div>
  );
}

export default Counter