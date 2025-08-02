// import React from 'react'
import { useState } from 'react';

export default function useEffect() {
    const [count, setCount] = useState(1);
  return (
    <div>
    <h1>counter</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
