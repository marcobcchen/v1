import { useState, useEffect } from 'react'

const useScrollDirection = (initialDirection) => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const onScroll = () => {
      const scrollY = window.pageYOffset

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollDirection }
}

export default useScrollDirection
