import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function BootScreen() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-retro"
    >
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-4xl mb-8"
        >
          RETRO OS
        </motion.div>
        
        <div className="text-sm space-y-2">
          <div>Starting MS-DOS...</div>
          <div>Initializing system...</div>
          <div>Loading config.sys...</div>
          <div>Loading autoexec.bat...</div>
          <div className="mt-4">Loading Windows{dots}</div>
        </div>

        <div className="mt-8">
          <div className="w-64 h-4 bg-gray-800 border-2 border-gray-600">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5 }}
              className="h-full bg-blue-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
