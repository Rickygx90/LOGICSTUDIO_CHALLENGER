import { useEffect, useState } from 'react'
import { getCharacteres } from './starwars'
import { Menu } from '../Menu'

export const Lista: React.FC = () => {
  const [characters, setCharacters] = useState<Array<string>>([])

  useEffect(() => {
    (function () {
      setCharacters(getCharacteres())
    })()

  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <Menu />
      <h1>List</h1>
      <ol style={{ display: 'inline-block', textAlign: 'left' }}>
        {characters?.length > 0 && characters.map((character) => (
          <li key={character}>
            <p>{character}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
