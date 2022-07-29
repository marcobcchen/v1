import { useState, useEffect } from 'react'

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent
    const regex =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IRMobile|<WPDesktop/i
    const mobile = regex.test(userAgent)

    setIsMobile(mobile)
  }, [])

  return { isMobile }
}

export default useDeviceDetect
