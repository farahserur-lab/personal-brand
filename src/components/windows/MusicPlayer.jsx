import { useState, useRef } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // 3 minutes default
  const [volume, setVolume] = useState(70)

  const tracks = [
    { id: 1, name: 'Retro Wave', artist: 'Synthwave Artist' },
    { id: 2, name: 'Pixel Dreams', artist: 'Chiptune Master' },
    { id: 3, name: '8-Bit Paradise', artist: 'Retro Sounds' },
    { id: 4, name: 'Neon Nights', artist: 'Vapor Wave' },
  ]

  const [currentTrack, setCurrentTrack] = useState(0)

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="p-4 bg-gradient-to-br from-purple-900 to-blue-900 h-full font-retro">
      <div className="win95-window p-4 h-full flex flex-col">
        {/* Display */}
        <div className="bg-black text-green-400 p-4 mb-4 win95-border font-mono">
          <div className="text-center mb-2">
            <div className="text-lg mb-1">♪ {tracks[currentTrack].name} ♪</div>
            <div className="text-xs">{tracks[currentTrack].artist}</div>
          </div>
          <div className="flex justify-between text-xs mt-3">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 mb-4">
          <button className="win95-button px-4 py-2 text-lg" onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}>
            ⏮
          </button>
          <button className="win95-button px-4 py-2 text-lg" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="win95-button px-4 py-2 text-lg" onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}>
            ⏭
          </button>
          <button className="win95-button px-4 py-2 text-lg">
            ⏹
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs">🔊</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-xs w-8">{volume}</span>
        </div>

        {/* Playlist */}
        <div className="win95-border bg-white p-2 flex-1 overflow-auto">
          <div className="text-xs font-bold mb-2">Playlist:</div>
          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className={`p-2 cursor-pointer text-xs ${
                idx === currentTrack ? 'bg-win95-blue text-white' : 'hover:bg-gray-200'
              }`}
              onClick={() => setCurrentTrack(idx)}
            >
              {idx + 1}. {track.name} - {track.artist}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
