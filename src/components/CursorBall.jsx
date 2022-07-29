import React, { useState, useEffect } from 'react'

const CursorBall = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  useEffect(() => {
    const onMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
      className={`w-20 h-20 -m-10 pointer-events-none transition-all ease-out fixed bg-white rounded-full mix-blend-difference z-10 ${
        mousePosition.x ? 'opacity-100' : 'opacity-0'
      }`}
    ></div>
  )
}

export default CursorBall
