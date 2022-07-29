import React from 'react'
import { Element } from 'react-scroll'
import useDeviceDetect from './hooks/useDeviceDetect'
import Logo from './components/Logo'
import Theme from './components/Theme'
import Navigation from './components/Navigation'
import CursorBall from './components/CursorBall'
import Intro from './views/Intro'
import About from './views/About'
import Skill from './views/Skill'
import Experience from './views/Experience'
import Work from './views/Work'

function App() {
  const { isMobile } = useDeviceDetect()

  const routes = [
    {
      name: 'intro',
      element: <Intro />,
    },
    {
      name: 'about',
      element: <About />,
    },
    {
      name: 'skill',
      element: <Skill />,
    },
    {
      name: 'experience',
      element: <Experience />,
    },
    {
      name: 'work',
      element: <Work />,
    },
  ]

  return (
    <div className='font-manrope'>
      <Logo />
      <Navigation />
      <Theme />
      {isMobile ? null : <CursorBall />}
      <main className='bg-white dark:bg-black'>
        {routes.map((route) => {
          return (
            <Element key={route.name} name={route.name}>
              {route.element}
            </Element>
          )
        })}
      </main>
      <footer className='fixed left-0 right-0 bottom-0 -z-10 h-20 lg:h-24 flex justify-center items-center bg-black dark:bg-white'>
        <p className='font-manrope font-semibold text-sm text-center text-white dark:text-black'>
          Designed & Built by Marco Chen
        </p>
      </footer>
    </div>
  )
}

export default App
