import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { animateScroll, scroller } from 'react-scroll'

const ScrollToView = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    const element = pathname.slice(1)

    if (element !== '') {
      scroller.scrollTo(element, {
        duration: 600,
        delay: 100,
        smooth: 'easeOutQuad',
      })
    } else {
      animateScroll.scrollToTop()
    }
  })

  return <div>{children}</div>
}

export default ScrollToView
