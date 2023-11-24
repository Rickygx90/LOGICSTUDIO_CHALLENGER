import { useEffect, useState } from "react"
import { Menu } from "../Menu"

export const Stopwatch: React.FC = () => {
  const [second, setSecond] = useState<number>(0)
  const [startCount, setStartCount] = useState<boolean>(false)

  useEffect(() => {
    let idTimeout: number

    if (startCount) {
      idTimeout = setTimeout(() => {
        setSecond((prevSecond) => prevSecond + 1)
      }, 1000)
    }

    return () => clearInterval(idTimeout)
  }, [second, startCount])

  return (
    <div>
      <Menu />
      <h1>Stopwatch</h1>
      <p>{second} segundo(s)</p>
      <div>
        <button onClick={() => { setStartCount(true) }}>Start</button>
        <button onClick={() => { setStartCount(false) }}>Stop</button>
        <button onClick={() => { setSecond(0) }}>Reset</button>
      </div>
    </div>
  )
}
