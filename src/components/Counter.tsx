import { useState } from "react";
import '../assets/css/card.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}