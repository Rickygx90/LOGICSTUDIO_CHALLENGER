import { useState } from "react"
import { Menu } from "../Menu"

export const Echo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  return (
    <div>
      <Menu />
      <h1>ECHO</h1>
      <input type='text' onChange={handleChange} value={inputValue} />
      <p>{inputValue}</p>
    </div>
  )
}
