import { useState } from 'react'
import { Menu } from '../Menu'

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <div>
      <Menu />
      <h1>Counter</h1>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}
