import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const isDark = () => {
    if (localStorage.theme) {
      return localStorage.theme === 'dark' ? true : false
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [dark, setDark] = useState(isDark)

  const toggleDarkMode = () => {
    setDark((prev) => !prev)
  }

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [dark])

  return [dark, toggleDarkMode]
}

export default useDarkMode
