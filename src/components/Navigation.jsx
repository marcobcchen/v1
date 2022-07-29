import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    name: '我是誰',
    enName: 'About',
    path: '/about',
  },
  {
    name: '我會什麼',
    enName: 'SKill',
    path: '/skill',
  },
  {
    name: '我在哪待過',
    enName: 'Experience',
    path: '/experience',
  },
  {
    name: '我做過什麼',
    enName: 'Work',
    path: '/work',
  },
]

const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <>
      <div className='fixed right-0 top-0 p-5 lg:p-8 z-10 mix-blend-difference z-10'>
        <nav>
          <ul className='flex flex-col items-end'>
            {navLinks.map((item) => {
              return (
                <li
                  key={item.enName}
                  className='text-lg md:text-3xl text-white font-semibold font-manrope mb-1'
                >
                  <Link className='' to={item.path}>
                    {pathname === item.path ? `( ${item.name} )` : item.enName}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation
