import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => { 
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0 , y: 0 })

  useEffect(() => {
    console.log("efecto ", { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handlemove ', { clientX, clientY })
      setPosition({ x : clientX, y : clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // se ejecuta cada vez que cambia enabled
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
        <div style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
          display: `${enabled ? 'block' : 'none'}`
        }}>

        </div>
        <h3>Proyecto 3</h3>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar': 'Activar'} seguir puntero
        </button>
      </main>
  )
}

function App() {

  return (
    <>
      <FollowMouse />
    </>
    
  )
}

export default App
