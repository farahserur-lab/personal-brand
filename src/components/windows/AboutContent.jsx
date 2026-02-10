export default function AboutContent() {
  return (
    <div className="p-6 font-retro text-sm space-y-4">
      <div className="flex items-start gap-4">
        <div className="text-6xl">👨‍💻</div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-win95-blue">About Me</h2>
          <div className="space-y-3">
            <p>
              <strong>Name:</strong> [Your Name]
            </p>
            <p>
              <strong>Role:</strong> Full Stack Developer
            </p>
            <p>
              <strong>Location:</strong> [Your Location]
            </p>
            <p className="leading-relaxed">
              Welcome to my retro OS portfolio! I'm a passionate developer who loves creating
              unique and nostalgic web experiences. This portfolio combines the charm of 90s
              computing with modern web technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="win95-border p-4 bg-win95-gray">
        <h3 className="font-bold mb-2">Skills:</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>• React & JavaScript</div>
          <div>• Node.js & Express</div>
          <div>• HTML & CSS</div>
          <div>• Python & Django</div>
          <div>• SQL & MongoDB</div>
          <div>• Git & GitHub</div>
        </div>
      </div>

      <div className="win95-border p-4 bg-win95-gray">
        <h3 className="font-bold mb-2">Interests:</h3>
        <p className="text-xs">
          Retro computing, vintage UI design, creative coding, pixel art, and building
          experiences that bring joy and nostalgia to users.
        </p>
      </div>

      <div className="text-xs text-gray-600 italic">
        Last modified: {new Date().toLocaleDateString()}
      </div>
    </div>
  )
}
