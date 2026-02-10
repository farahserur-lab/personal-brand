export default function DesktopIcon({ id, label, icon, isSelected, onClick, onDoubleClick }) {
  const handleClick = (e) => {
    e.stopPropagation()
    onClick(id)
  }

  return (
    <div
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={onDoubleClick}
    >
      <div className="text-4xl mb-1">{icon}</div>
      <div className="text-xs text-white font-retro drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
        {label}
      </div>
    </div>
  )
}
