import { useEffect, useState } from 'react'

const usePointerGlow = () => {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const syncPointer = ({ clientX, clientY }) => {
      const x = clientX.toFixed(2)
      const y = clientY.toFixed(2)
      const xp = (clientX / window.innerWidth).toFixed(2)
      const yp = (clientY / window.innerHeight).toFixed(2)

      document.documentElement.style.setProperty('--x', x)
      document.documentElement.style.setProperty('--y', y)
      document.documentElement.style.setProperty('--xp', xp)
      document.documentElement.style.setProperty('--yp', yp)

      setStatus({ x, y, xp, yp })
    }

    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  return status
}

export default usePointerGlow
