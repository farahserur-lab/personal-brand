import { motion } from 'framer-motion'
import Draggable from 'react-draggable'
import { useState, useRef, useEffect } from 'react'

export default function Window({
  id,
  title,
  children,
  initialPosition,
  initialSize,
  zIndex,
  isMinimized,
  isMaximized,
  onClose,
  onMinimize,
  onMaximize,
  onFocus
}) {
  const [size, setSize] = useState(initialSize)
  const [position, setPosition] = useState(initialPosition)
  const nodeRef = useRef(null)

  useEffect(() => {
    if (isMaximized) {
      setSize({ width: window.innerWidth, height: window.innerHeight - 40 })
      setPosition({ x: 0, y: 0 })
    } else {
      setSize(initialSize)
      setPosition(initialPosition)
    }
  }, [isMaximized, initialSize, initialPosition])

  if (isMinimized) {
    return null
  }

  const windowStyle = {
    width: size.width,
    height: size.height,
    zIndex,
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-titlebar"
      position={position}
      onStart={() => onFocus(id)}
      onStop={(e, data) => {
        if (!isMaximized) {
          setPosition({ x: data.x, y: data.y })
        }
      }}
      disabled={isMaximized}
    >
      <motion.div
        ref={nodeRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="absolute win95-window"
        style={windowStyle}
        onClick={() => onFocus(id)}
      >
        {/* Title Bar */}
        <div className="window-titlebar win95-titlebar text-white px-1 py-1 flex items-center justify-between cursor-move">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span>{title}</span>
          </div>
          <div className="flex gap-1">
            <button
              className="win95-button w-6 h-6 text-xs font-bold flex items-center justify-center"
              onClick={() => onMinimize(id)}
            >
              _
            </button>
            <button
              className="win95-button w-6 h-6 text-xs font-bold flex items-center justify-center"
              onClick={() => onMaximize(id)}
            >
              □
            </button>
            <button
              className="win95-button w-6 h-6 text-xs font-bold flex items-center justify-center"
              onClick={() => onClose(id)}
            >
              ×
            </button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-win95-gray border-t border-b border-white text-xs flex gap-2 px-2 py-1">
          <span className="hover:bg-win95-blue hover:text-white px-1 cursor-pointer">File</span>
          <span className="hover:bg-win95-blue hover:text-white px-1 cursor-pointer">Edit</span>
          <span className="hover:bg-win95-blue hover:text-white px-1 cursor-pointer">View</span>
          <span className="hover:bg-win95-blue hover:text-white px-1 cursor-pointer">Help</span>
        </div>

        {/* Content Area */}
        <div className="overflow-auto bg-white" style={{ height: 'calc(100% - 60px)' }}>
          {children}
        </div>
      </motion.div>
    </Draggable>
  )
}
