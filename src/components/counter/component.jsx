import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count-1)}
            disabled={count === 0}>
                -
            </button>
            {count}
            <button onClick={() => setCount(count+1)}
            disabled={count === 5}>
                +
            </button>
        </div>
    );
};
