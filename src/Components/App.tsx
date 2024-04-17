import { useState } from "react";


export function App() {
    const [count, setCount] = useState<number>(0)
    const incriment = () => setCount(prev => prev + 1)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incriment}>increment</button>
        </div>
    )
};
