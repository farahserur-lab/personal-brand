import { useState, useEffect } from 'react'
import BootScreen from './components/BootScreen'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window from './components/Window'
import AboutContent from './components/windows/AboutContent'
import PortfolioContent from './components/windows/PortfolioContent'
import MusicPlayer from './components/windows/MusicPlayer'
import PaintApp from './components/windows/PaintApp'
import ContactContent from './components/windows/ContactContent'
import NotepadContent from './components/windows/NotepadContent'

function App() {
  const [isBooting, setIsBooting] = useState(true)
  const [windows, setWindows] = useState([])
  const [nextZIndex, setNextZIndex] = useState(100)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const openWindow = (windowConfig) => {
    const existingWindow = windows.find(w => w.id === windowConfig.id)
    if (existingWindow) {
      bringToFront(windowConfig.id)
      return
    }

    const newWindow = {
      ...windowConfig,
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: false,
    }
    setWindows([...windows, newWindow])
    setNextZIndex(nextZIndex + 1)
  }

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id))
  }

  const minimizeWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ))
  }

  const restoreWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: false } : w
    ))
    bringToFront(id)
  }

  const maximizeWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ))
  }

  const bringToFront = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: nextZIndex } : w
    ))
    setNextZIndex(nextZIndex + 1)
  }

  const windowComponents = {
    about: AboutContent,
    portfolio: PortfolioContent,
    music: MusicPlayer,
    paint: PaintApp,
    contact: ContactContent,
    notepad: NotepadContent,
  }

  if (isBooting) {
    return <BootScreen />
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-teal-600 relative">
      <Desktop onOpenWindow={openWindow} />
      
      {windows.map(window => {
        const ContentComponent = windowComponents[window.type]
        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            initialPosition={window.initialPosition}
            initialSize={window.initialSize}
            zIndex={window.zIndex}
            isMinimized={window.isMinimized}
            isMaximized={window.isMaximized}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onMaximize={maximizeWindow}
            onFocus={bringToFront}
          >
            <ContentComponent />
          </Window>
        )
      })}

      <Taskbar 
        windows={windows} 
        onWindowClick={restoreWindow}
        onOpenWindow={openWindow}
      />
    </div>
  )
}

export default App
