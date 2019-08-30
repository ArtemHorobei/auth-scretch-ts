import { useState } from "react";

export function multiple(a: number, b: number): number {
    return a * b;
}

export interface IuseCounter {
    count: number,
    handleIncrementCount: () => void,
    handleDecrementCount: () => void,
}

export function useCounter(initialState: number): IuseCounter {
    const [count, setCount] = useState(initialState);

    function handleIncrementCount() {
        if (count <= 100) setCount(count + 1);
    }

    function handleDecrementCount() {
        if (count > 0) setCount(count - 1);
    }

    return {
        count,
        handleIncrementCount,
        handleDecrementCount,
    };
}
