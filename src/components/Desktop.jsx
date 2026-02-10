import { useState } from 'react'
import DesktopIcon from './DesktopIcon'

export default function Desktop({ onOpenWindow }) {
  const [selectedIcon, setSelectedIcon] = useState(null)

  const icons = [
    {
      id: 'about',
      label: 'About_Me.txt',
      icon: '📄',
      windowConfig: {
        id: 'about',
        title: 'About Me',
        type: 'about',
        initialPosition: { x: 100, y: 100 },
        initialSize: { width: 500, height: 400 }
      }
    },
    {
      id: 'portfolio',
      label: 'Projects.exe',
      icon: '💼',
      windowConfig: {
        id: 'portfolio',
        title: 'My Projects',
        type: 'portfolio',
        initialPosition: { x: 150, y: 150 },
        initialSize: { width: 600, height: 500 }
      }
    },
    {
      id: 'music',
      label: 'Music.mp3',
      icon: '🎵',
      windowConfig: {
        id: 'music',
        title: 'Music Player',
        type: 'music',
        initialPosition: { x: 200, y: 200 },
        initialSize: { width: 400, height: 300 }
      }
    },
    {
      id: 'paint',
      label: 'Paint.exe',
      icon: '🎨',
      windowConfig: {
        id: 'paint',
        title: 'Paint',
        type: 'paint',
        initialPosition: { x: 250, y: 150 },
        initialSize: { width: 600, height: 500 }
      }
    },
    {
      id: 'contact',
      label: 'Contact.lnk',
      icon: '📧',
      windowConfig: {
        id: 'contact',
        title: 'Contact',
        type: 'contact',
        initialPosition: { x: 300, y: 100 },
        initialSize: { width: 450, height: 350 }
      }
    },
    {
      id: 'notepad',
      label: 'Notes.txt',
      icon: '📝',
      windowConfig: {
        id: 'notepad',
        title: 'Notepad',
        type: 'notepad',
        initialPosition: { x: 350, y: 200 },
        initialSize: { width: 500, height: 400 }
      }
    }
  ]

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId)
  }

  const handleIconDoubleClick = (windowConfig) => {
    onOpenWindow(windowConfig)
    setSelectedIcon(null)
  }

  const handleDesktopClick = () => {
    setSelectedIcon(null)
  }

  return (
    <div 
      className="h-full w-full p-4"
      onClick={handleDesktopClick}
    >
      <div className="grid grid-cols-[repeat(auto-fill,100px)] gap-4 auto-rows-min">
        {icons.map(icon => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            icon={icon.icon}
            isSelected={selectedIcon === icon.id}
            onClick={handleIconClick}
            onDoubleClick={() => handleIconDoubleClick(icon.windowConfig)}
          />
        ))}
      </div>
    </div>
  )
}
