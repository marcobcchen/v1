import React from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import useDarkMode from '../hooks/useDarkMode'

const Theme = () => {
  const [dark, toggleDarkMode] = useDarkMode()

  return (
    <div className='fixed left-0 bottom-0 px-5 py-6 lg:p-8 mix-blend-difference z-10'>
      <div
        className='p-2 cursor-pointer bg-white rounded-full'
        onClick={toggleDarkMode}
      >
        {dark ? <MdLightMode /> : <MdDarkMode />}
      </div>
    </div>
  )
}

export default Theme
