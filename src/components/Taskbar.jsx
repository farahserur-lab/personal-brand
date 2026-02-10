import { useState, useEffect } from 'react'

export default function Taskbar({ windows, onWindowClick, onOpenWindow }) {
  const [time, setTime] = useState(new Date())
  const [showStartMenu, setShowStartMenu] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const startMenuItems = [
    { label: 'About Me', icon: '📄', id: 'about', type: 'about' },
    { label: 'Projects', icon: '💼', id: 'portfolio', type: 'portfolio' },
    { label: 'Music Player', icon: '🎵', id: 'music', type: 'music' },
    { label: 'Paint', icon: '🎨', id: 'paint', type: 'paint' },
    { label: 'Contact', icon: '📧', id: 'contact', type: 'contact' },
    { label: 'Notepad', icon: '📝', id: 'notepad', type: 'notepad' },
  ]

  const handleStartMenuClick = (item) => {
    onOpenWindow({
      id: item.id,
      title: item.label,
      type: item.type,
      initialPosition: { x: 100 + Math.random() * 100, y: 100 + Math.random() * 100 },
      initialSize: { width: 500, height: 400 }
    })
    setShowStartMenu(false)
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-win95-gray win95-border flex items-center px-1 z-50">
        <button
          className="win95-button px-3 py-1 font-bold text-sm flex items-center gap-2 hover:brightness-105"
          onClick={() => setShowStartMenu(!showStartMenu)}
        >
          <span className="text-lg">🪟</span>
          Start
        </button>

        <div className="flex-1 flex items-center gap-1 ml-1">
          {windows.filter(w => !w.isMinimized).map(window => (
            <button
              key={window.id}
              className="win95-button px-3 py-1 text-xs max-w-[150px] truncate"
              onClick={() => onWindowClick(window.id)}
            >
              {window.title}
            </button>
          ))}
        </div>

        <div className="win95-border px-3 py-1 text-sm font-retro bg-win95-gray">
          {formatTime(time)}
        </div>
      </div>

      {showStartMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowStartMenu(false)}
          />
          <div className="fixed bottom-10 left-0 w-64 bg-win95-gray win95-window z-50">
            <div className="bg-gradient-to-b from-win95-blue to-win95-lightblue text-white font-bold text-2xl p-2 writing-mode-vertical">
              RETRO OS
            </div>
            <div className="p-1">
              {startMenuItems.map(item => (
                <button
                  key={item.id}
                  className="w-full text-left px-3 py-2 hover:bg-win95-blue hover:text-white flex items-center gap-3 text-sm"
                  onClick={() => handleStartMenuClick(item)}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <div className="border-t-2 border-win95-darkgray mt-1 pt-1">
                <button className="w-full text-left px-3 py-2 hover:bg-win95-blue hover:text-white flex items-center gap-3 text-sm font-bold">
                  <span className="text-xl">⏻</span>
                  Shut Down...
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
