import { useRef, useState, useEffect } from 'react'

export default function PaintApp() {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#000000')
  const [brushSize, setBrushSize] = useState(3)
  const [tool, setTool] = useState('pen')

  const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#C0C0C0'
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [])

  const startDrawing = (e) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e) => {
    if (!isDrawing) return
    
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const ctx = canvas.getContext('2d')
    
    if (tool === 'pen') {
      ctx.strokeStyle = color
      ctx.lineWidth = brushSize
      ctx.lineCap = 'round'
      ctx.lineTo(x, y)
      ctx.stroke()
    } else if (tool === 'eraser') {
      ctx.strokeStyle = '#FFFFFF'
      ctx.lineWidth = brushSize * 3
      ctx.lineCap = 'round'
      ctx.lineTo(x, y)
      ctx.stroke()
    }
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="flex h-full bg-win95-gray">
      {/* Toolbar */}
      <div className="w-20 win95-border bg-win95-gray p-2 space-y-2">
        <button
          className={`win95-button w-full p-2 text-2xl ${tool === 'pen' ? 'brightness-90' : ''}`}
          onClick={() => setTool('pen')}
          title="Pen"
        >
          ✏️
        </button>
        <button
          className={`win95-button w-full p-2 text-2xl ${tool === 'eraser' ? 'brightness-90' : ''}`}
          onClick={() => setTool('eraser')}
          title="Eraser"
        >
          🧹
        </button>
        <button
          className="win95-button w-full p-2 text-2xl"
          onClick={clearCanvas}
          title="Clear"
        >
          🗑️
        </button>
        
        <div className="border-t-2 border-gray-600 my-2"></div>
        
        <div className="space-y-1">
          <div className="text-xs text-center mb-1">Size</div>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-center">{brushSize}px</div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 p-2 flex flex-col">
        <div className="win95-border bg-white p-2 mb-2 flex-1">
          <canvas
            ref={canvasRef}
            width={500}
            height={350}
            className="border border-gray-300 cursor-crosshair"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>

        {/* Color Palette */}
        <div className="win95-border bg-win95-gray p-2">
          <div className="text-xs mb-1">Colors:</div>
          <div className="flex gap-1">
            {colors.map((c) => (
              <button
                key={c}
                className="w-8 h-8 win95-button"
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              >
                {color === c && <span className="text-red-500 font-bold">✓</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
