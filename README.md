# 🖥️ Retro OS Portfolio

A nostalgic personal portfolio website styled as a Windows 95/Mac OS 9 operating system simulation, built with modern web technologies.

## ✨ Features

- **Retro Boot Sequence**: Experience a nostalgic BIOS-style boot animation
- **Desktop Environment**: Classic desktop with draggable icons
- **Draggable Windows**: Fully interactive windows with minimize, maximize, and close buttons
- **Start Menu**: Access all applications from the classic start menu
- **Taskbar**: Live clock and active window management
- **Interactive Apps**:
  - 📄 **About Me**: Personal information and skills
  - 💼 **Portfolio**: Showcase your projects with file-style icons
  - 🎵 **Music Player**: Retro Winamp-style music player
  - 🎨 **Paint**: Draw on a canvas with different colors and brush sizes
  - 📧 **Contact**: Get in touch via social links and contact form
  - 📝 **Notepad**: A working text editor

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🎨 Customization

### Update Personal Information

Edit the content files in `src/components/windows/`:
- `AboutContent.jsx` - Your bio, skills, and interests
- `PortfolioContent.jsx` - Your projects
- `ContactContent.jsx` - Your contact information and social links

### Change Colors

Edit `tailwind.config.js` to customize the color palette:
- `win95-gray`: Main window color
- `win95-blue`: Title bar color
- Desktop background: Change in `App.jsx` (currently `bg-teal-600`)

### Add More Desktop Icons

In `Desktop.jsx`, add new entries to the `icons` array with your custom applications.

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Draggable** - Draggable components

## 🎯 Key Interactions

- **Single Click**: Select desktop icon
- **Double Click**: Open application window
- **Drag**: Move windows around the desktop
- **Title Bar**: Click and drag to move windows
- **Minimize/Maximize/Close**: Window controls in title bar
- **Start Menu**: Access all applications
- **Taskbar**: Click to restore minimized windows

## 📝 Notes

- Windows have z-index management - clicking brings them to front
- Double-click desktop icons to open applications
- The paint app allows you to draw with different colors and brush sizes
- Music player is a UI simulation (no actual audio playback)
- Notepad content is not persisted (just like the original!)

## 🎮 Easter Eggs

Try opening multiple windows at once and arranging them on your desktop!

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 🙏 Acknowledgments

Inspired by the classic Windows 95 and Mac OS 9 interfaces that defined an era of computing.

---

Made with nostalgia and ❤️
