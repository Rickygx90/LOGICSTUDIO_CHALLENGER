import { Link } from 'react-router-dom'

export const Menu: React.FC = () => {
  return (
    <nav
      style={{
        backgroundColor: 'black',
      }}
    >
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '0',
          height: '80px',
        }}
      >
        <Link style={{ marginInline: '10px' }} to={'/'}>
          Bienvenido, Douglas
        </Link>
        <div
          style={{
            justifyContent: 'flex-end',
          }}
        >
          <Link style={{ marginInline: '10px' }} to={'/echo'}>
            Echo
          </Link>
          <Link style={{ marginInline: '10px' }} to={'/lista'}>
            Lista
          </Link>
          <Link style={{ marginInline: '10px' }} to={'/counter'}>
            Counter
          </Link>
          <Link style={{ marginInline: '10px' }} to={'/stopwatch'}>
            Stopwatch
          </Link>
        </div>
      </ul>
    </nav>
  )
}
